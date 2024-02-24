import { Elysia, t } from 'elysia';
import { cors } from '@elysiajs/cors';
import { swagger } from '@elysiajs/swagger';

import nodemailer from 'nodemailer';

const app = new Elysia();

app.use(cors());
app.use(swagger());

const Email = t.Object({
	firstName: t.String(),
	lastName: t.String(),
	email: t.String(),
	phoneNumber: t.String(),
	details: t.String(),
	api: t.String()
});

app.post(
	'/send-email',
	async ({ body }) => {
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		const { firstName, lastName, email, phoneNumber, details, api } = body as any;
		console.log(api);
		if (api === process.env.API) {
			const htmlEmail = `
  <html>
    <body>
      <h1>Hello, ${firstName} ${lastName}</h1>
      <h3>Email: ${email}</h3>
      <h3>Phone Number: ${phoneNumber}</h3>
      <h3>Details: ${details}</h3>
    </body>
  </html>
`;

			const mailOptions = {
				from: 'noreply@akshayk.dev',
				to: 'akshay@akshayk.dev',
				subject: 'contact enquiry',
				html: htmlEmail
			};

			// Send email using the sendEmail function
			sendEmail(mailOptions);
			return { data: 'mail sent' };
		} else {
			return { data: 'error lol' };
		}
	},
	{ body: Email }
);

const primaryTransporter = nodemailer.createTransport({
	host: process.env.SMTP_HOST,
	port: 587, // TLS

	auth: {
		user: process.env.SMTP_USER, // Your Gmail email address
		pass: process.env.SMTP_PASS // Your Gmail password or an app-specific password
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

app.get('/', () => {
	return { data: 'The Elysia Server' };
});
app.get('*', () => 'Route Not Implemented!!');

app.listen(8080);

console.log(`🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`);
