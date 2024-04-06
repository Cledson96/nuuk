import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  host: 'mail.nuukresources.com',
  port: 465,
  secure: true,
  auth: {
    user: 'contact@nuukresources.com',
    pass: '54x3M6lUDQfY',
  },
});
export default transporter;
