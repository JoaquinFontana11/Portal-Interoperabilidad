import nodemailer from 'nodemailer';
import * as dotenv from 'dotenv';

dotenv.config();

export const sendMail = async (body: string, from: string) => {
	let transporter = nodemailer.createTransport({
		service: 'gmail',
		auth: {
			user: process.env.EMAIL,
			pass: process.env.EMAIL_PASSWORD
		}
	});

	try {
		await transporter.sendMail({
			from: from,
			to: 'camilodipaolo10@gmail.com',
			subject: 'Consulta envio de mail desde el portal',
			text: body
		});
	} catch (err) {
		console.log('Algo salio mal enviando el mail', err);
	}
};
