'use client';
import { AboutPage, ContactFooter, Input } from '@/components';
import { Form, Button } from 'antd';
import { Locale } from '@/config/i18n-config';
import { useState, useEffect, FormEvent } from 'react';
import { TextWork } from '@/components';
import { FaRegCheckCircle } from 'react-icons/fa';
import { toast } from 'react-toastify';
import Link from 'next/link';
interface Text {
  work: string;
  home: string;
  title: string;
  service: string;
  message: string;
  form: {
    name: string;
    email: string;
    phone: string;
    phone_contact: string;
    message: string;
    button: string;
    workspace: string;
    age: string;
    file: string;
    street: string;
    number: string;
    city: string;
    state: string;
    country: string;
    zip: string;
    complement: string;
    district: string;
  };
  services: { title: string; link: string }[];
}

export default function Work({
  params: { locale },
}: {
  params: { locale: Locale };
}) {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);
  const [texts, setTexts] = useState<Text>({
    work: '',
    home: '',
    title: '',
    service: '',
    message: '',
    form: {
      name: '',
      email: '',
      phone: '',
      phone_contact: '',
      message: '',
      button: '',
      workspace: '',
      age: '',
      file: '',
      street: '',
      number: '',
      city: '',
      state: '',
      country: '',
      zip: '',
      complement: '',
      district: '',
    },
    services: [],
  });
  useEffect(() => {
    TextWork({ locale }).then(res => setTexts(res));
  }, [locale]);

  const handleSubmit = async (e: any) => {
    setLoading(true);

    const formData = new FormData();
    for (const key in e) {
      if (key !== 'file') {
        formData.append(key, e[key]);
      }
    }
    if (e.file && e.file.file && e.file.file.originFileObj) {
      formData.append('img', e.file.file.originFileObj);
    }

    try {
      const resposta = await fetch('/api/email/work', {
        method: 'POST',
        body: formData,
      });

      if (resposta.status === 200) {
        toast.success('resume sent successfully!');
        form.resetFields();
        setLoading(false);
      } else {
        toast.error('Error sending resume');
      }
    } catch (error) {
      setLoading(false);
      console.log(error);
      toast.error('Error sending resume');
    }
  };
  return (
    <>
      <AboutPage
        image="work/background.jpg"
        title={texts.work}
        home={texts.home}
      />
      <div className="service-details-area main-service-area pt-20 services-details-page">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="service-details-post">
                <h3 className="color-default-title">{texts.title}</h3>
                <p>{texts.message}</p>
                <div className="contact-form">
                  <Form form={form} onFinish={handleSubmit} layout="vertical">
                    <div className="row">
                      <div className="col-md-6 col-sm-6">
                        <Input
                          name="name"
                          placeholder={texts.form.name}
                          required={true}
                        />
                      </div>
                      <div className="col-md-3 col-sm-3">
                        <Input
                          type="date"
                          name="age"
                          required
                          placeholder={texts.form.age}
                        />
                      </div>
                      <div className="col-md-3 col-sm-3">
                        <Input
                          name="file"
                          placeholder={texts.form.file}
                          upload
                          config={{
                            accepts: '.pdf',
                          }}
                        />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6 col-sm-6">
                        <Input
                          type="email"
                          name="email"
                          placeholder={texts.form.email}
                          required={true}
                        />
                      </div>
                      <div className="col-md-6 col-sm-6">
                        <Input
                          name="service"
                          required={true}
                          placeholder={texts.form.workspace}
                          select
                          options={texts.services.map(service => ({
                            value: service.title,
                            text: service.title,
                          }))}
                        />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6 col-sm-6 ">
                        <Input
                          name="phone"
                          placeholder={texts.form.phone}
                          type="number"
                          required
                        />
                      </div>
                      <div className="col-md-6 col-sm-6 ">
                        <Input
                          type="number"
                          name="phone_contact"
                          placeholder={texts.form.phone_contact}
                        />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-8 col-sm-8 ">
                        <Input
                          name="street"
                          placeholder={texts.form.street}
                          required={true}
                          type="string"
                        />
                      </div>
                      <div className="col-md-4 col-sm-4 ">
                        <Input
                          type="number"
                          name="number"
                          placeholder={texts.form.number}
                        />
                      </div>
                      <div className="col-md-6 col-sm-6 ">
                        <Input
                          name="complement"
                          placeholder={texts.form.complement}
                          type="string"
                        />
                      </div>
                      <div className="col-md-3 col-sm-3 ">
                        <Input
                          type="number"
                          name="zip"
                          required
                          placeholder={texts.form.zip}
                        />
                      </div>
                      <div className="col-md-3 col-sm-3 ">
                        <Input
                          type="string"
                          name="country"
                          required
                          placeholder={texts.form.country}
                        />
                      </div>
                      <div className="col-md-4 col-sm-5 ">
                        <Input
                          name="district"
                          placeholder={texts.form.district}
                          type="string"
                          required={true}
                        />
                      </div>
                      <div className="col-md-4 col-sm-4 ">
                        <Input
                          type="string"
                          name="city"
                          placeholder={texts.form.city}
                          required={true}
                        />
                      </div>
                      <div className="col-md-4 col-sm-4 ">
                        <Input
                          type="string"
                          name="state"
                          placeholder={texts.form.state}
                          required={true}
                        />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-12 col-sm-12">
                        <Input
                          name="message"
                          placeholder={texts.form.message}
                          textarea
                          required={true}
                        />
                      </div>
                    </div>
                    <div className="row">
                      <Button
                        loading={loading}
                        type="primary"
                        htmlType="submit"
                      >
                        {texts.form.button}
                      </Button>
                    </div>
                  </Form>
                </div>
              </div>
            </div>
            <div className="col-lg-4 main-service-area blog-side-bar">
              <div className="service-sidebar">
                <div className="service-list">
                  <p>{texts.service}</p>
                  <ul>
                    {texts.services.map((item, index) => (
                      <li key={index}>
                        <Link href={item.link}>{item.title}</Link>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="discount-text">
                  <h1>
                    Get <span>15% Discount</span> on your first Service
                  </h1>

                  <div className="theme-button">
                    <a href="#" className="default-btn">
                      Book Now
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ContactFooter locale={locale} footer />
    </>
  );
}
