import { NextResponse } from 'next/server';
import transporter from '../../services/email';

export async function POST(request: Request) {
  const formData = await request.formData();

  const formDataArray = Array.from(formData.entries());
  const formDataObject: { [key: string]: FormDataEntryValue } = {};
  for (const [key, value] of formDataArray) {
    formDataObject[key] = value;
  }

  try {
    const upload = formDataObject['img'] as any;
    let img = null;
    if (upload instanceof File) {
      const imgAsBuffer = await upload.arrayBuffer();
      if (imgAsBuffer) {
        img = imgAsBuffer;
      }
    }

    let mailOptions: {
      from: string;
      to: string;
      subject: string;
      html: string;
      attachments?: { filename: string; content: Buffer }[];
    } = {
      from: `${formDataObject.name} <${formDataObject.email}>`,
      to: 'contact@nuukresources.com',
      subject: '*SITE* Work with us',
      html: `<h1 style="margin-bottom:10px;font-size:20px">A CV was sent via the website</h1>
      <p style="margin-bottom:3px">Name: ${formDataObject.name}</p>
      <p style="margin-bottom:3px">Age: ${formDataObject.age}</p>
      <p style="margin-bottom:3px">Email: ${formDataObject.email}</p>
      <p style="margin-bottom:3px">Phone: ${formDataObject.phone}</p>
      <p style="margin-bottom:3px">Phone contact: ${formDataObject.phone_contact}</p>
      <p style="margin-bottom:3px">Message: ${formDataObject.message}</p>
      <p style="margin-bottom:3px">Workspace: ${formDataObject.service}</p>
      <p style="margin-bottom:3px">Street: ${formDataObject.street}</p>
      <p style="margin-bottom:3px">Number: ${formDataObject.number}</p>
      <p style="margin-bottom:3px">District: ${formDataObject.district}</p>
      <p style="margin-bottom:3px">City: ${formDataObject.city}</p>
      <p style="margin-bottom:3px">State: ${formDataObject.state}</p>
      <p style="margin-bottom:3px">Country: ${formDataObject.country}</p>
      <p style="margin-bottom:3px">Zip: ${formDataObject.zip}</p>
      <p style="margin-bottom:3px">Complement: ${formDataObject.complement}</p>

      `,
    };
    if (img) {
      mailOptions.attachments = [
        {
          filename: upload.name,
          content: Buffer.from(img),
        },
      ];
    }
    await transporter.sendMail(mailOptions);

    return NextResponse.json({ message: 'Email send' }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: 'Internal Server Error', message: error },
      { status: 500 },
    );
  }
}
