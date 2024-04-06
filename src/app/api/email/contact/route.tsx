import { NextResponse } from 'next/server';
import transporter from '../../services/email';

export async function POST(request: Request) {
  const data = await request.json();

  try {
    let mailOptions: {
      from: string;
      to: string;
      subject: string;
      html: string;
    } = {
      from: `${data.name} <${data.email}>`,
      to: 'contact@nuukresources.com',
      subject: '*SITE* Contact',
      html: `<h1 style="margin-bottom:10px;font-size:20px">Contact from site</h1>
      <p style="margin-bottom:3px">Name: ${data.name}</p>
      <p style="margin-bottom:3px">Email: ${data.email}</p>
      <p style="margin-bottom:3px">Message: ${data.message}</p>

      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ message: 'Email send' }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: 'Internal Server Error', message: error },
      { status: 500 },
    );
  }
}
