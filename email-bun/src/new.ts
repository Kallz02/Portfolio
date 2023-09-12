import { Elysia } from 'elysia';
import { cors } from '@elysiajs/cors';
import { swagger } from '@elysiajs/swagger';

import nodemailer from 'nodemailer';
const app = new Elysia();

app.use(cors());
app.use(swagger());


const primaryTransporter = nodemailer.createTransport({
	host: process.env.SMTP_HOST,
	port: 587, // TLS

	auth: {
		user: process.env.SMTP_USER, // Your Gmail email address
		pass:process.env.SMTP_PASS // Your Gmail password or an app-specific password
	}
});
const sendEmail = (mailOptions: nodemailer.SendMailOptions) => {
	primaryTransporter.sendMail(mailOptions, (error, info) => {
		if (error) {
			console.error('Error sending mail:', error);
		} else {
			console.log('mail sent:', info.response);
		}
	});
};
app.post('/send-email', async ({ body }) => {
	// const { text } = body;

	const mailOptions = {
		from: 'noreply@akshayk.dev',
		to: 'akshay@akshayk.dev',
		subject: 'contact enquiry',
		text: 'hello'
	};

	// Send email using the sendEmail function
	sendEmail(mailOptions);
	return { data: 'mail sent' };
});
app.get('/', () => 'The Elysia Server');
app.get('*', () => 'Route Not Implemented!!');

app.listen(8080);

console.log(`🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`);
