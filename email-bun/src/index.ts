import { Hono } from 'hono';
import { cors } from 'hono/cors';
import { prettyJSON } from 'hono/pretty-json';
import nodemailer from 'nodemailer';
const app = new Hono();
app.use('*', prettyJSON());
app.use('*', cors());
app.notFound((c) => c.json({ message: 'Not Found', ok: false }, 404));
// Primary SMTP configuration (Gmail)
const primaryTransporter = nodemailer.createTransport({
	host: process.env.SMTP_HOST,
	port: 587, // TLS

	auth: {
		user: process.env.SMTP_USER, // Your Gmail email address
		pass:process.env.SMTP_PASS // Your Gmail password or an app-specific password
	}
});

// Secondary SMTP configuration (Outlook)
const secondaryTransporter = nodemailer.createTransport({
	host: 'smtp-mail.outlook.com',
	port: 587,
	secure: false, // TLS
	auth: {
		user: 'your@outlook.com', // Your Outlook email address
		pass: 'your_password' // Your Outlook password
	}
});
app.get('/', (c) => {
	return c.json({ message: 'Hello Bun!' });
});

const sendEmail = async (mailOptions: nodemailer.SendMailOptions, res: any) => {
	try {
		// Try sending using the primary SMTP server
		const primaryInfo = await primaryTransporter.sendMail(mailOptions);
		console.log('Email sent using primary SMTP server: ' + primaryInfo.response);
	} catch (primaryError) {
		console.error('Email sending failed using primary SMTP server:', primaryError);
		try {
			// Try sending using the secondary SMTP server
			const secondaryInfo = await secondaryTransporter.sendMail(mailOptions);
			console.log('Email sent using secondary SMTP server: ' + secondaryInfo.response);
		} catch (secondaryError) {
			console.error('Email sending failed using secondary SMTP server:', secondaryError);
		}
	}
};

// Define an email sending endpoint
app.post('/send-email', async (c) => {
	// const { to, subject, text } = await c.req.json();

	const mailOptions = {
		from: 'YourEmailAddress',
		to: 'akshay@akshayk.dev',
		subject: 'contact',
		text: 'hello'
	};

	// Send email using the sendEmail function
	await sendEmail(mailOptions, c);

	return c.json({ success: true, message: 'Email sent successfully' });
});

const port = parseInt(process.env.PORT!) || 3000;
console.log(`Running at http://localhost:${port}`);

export default {
	port,
	fetch: app.fetch
};
