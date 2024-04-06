'use client';

import Image from 'next/image';
import img from '@/img/contact.jpg';
import ContactsItens from '../intenscontact';
import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
interface ContactItem {
  title: string;
  name: string;
  description: string;
  email: string;
  message: string;
  button: string;
}
export default function Contact({
  locale,
  footer,
}: {
  locale: 'en' | 'pt' | 'fr';
  footer?: boolean;
}) {
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [itens, setItens] = useState<ContactItem>({
    title: '',
    description: '',
    email: '',
    message: '',
    button: '',
    name: '',
  });
  useEffect(() => {
    ContactsItens({ locale }).then(res => setItens(res));
  }, [locale]);

  const send = () => {
    setLoading(true);
    handleSubmit();
  };
  const handleSubmit = async () => {
    try {
      setLoading(true);
      const resposta = await fetch('/api/email/contact', {
        method: 'POST',
        body: JSON.stringify(form),
      });

      if (resposta.status === 200) {
        toast.success('resume sent successfully!');
        setLoading(false);
        setForm({
          name: '',
          email: '',
          message: '',
        });
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
    <div className="contact-section">
      <div className="container">
        <div
          className="contact-area"
          style={footer ? { marginBottom: '-250px' } : {}}
        >
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-6">
              <div className="contact-img">
                <Image
                  src={img}
                  alt="contact image"
                  style={{ height: '350px' }}
                />
              </div>
            </div>

            <div className="col-lg-6 col-md-6">
              <div className="contact-text">
                <div className="section-head">
                  <h2>{itens.title}</h2>
                  <p> {itens.description}</p>
                </div>
                <div className="contact-form">
                  <form action={send} id="contactForm">
                    <div className="row">
                      <div className="col-md-12 col-sm-6">
                        <div className="form-group">
                          <input
                            type="text"
                            name="name"
                            className="form-control"
                            value={form.name}
                            onChange={e =>
                              setForm({ ...form, name: e.target.value })
                            }
                            required
                            placeholder={itens.name}
                          />
                          <div className="help-block with-errors"></div>
                        </div>
                      </div>

                      <div className="col-md-12 col-sm-6">
                        <div className="form-group">
                          <input
                            type="email"
                            name="email"
                            value={form.email}
                            onChange={e =>
                              setForm({ ...form, email: e.target.value })
                            }
                            className="form-control"
                            required
                            placeholder={itens.email}
                          />
                          <div className="help-block with-errors"></div>
                        </div>
                      </div>

                      <div className="col-lg-12 col-md-12">
                        <div className="form-group">
                          <textarea
                            name="message"
                            value={form.message}
                            onChange={e =>
                              setForm({ ...form, message: e.target.value })
                            }
                            className="form-control"
                            required
                            placeholder={itens.message}
                          ></textarea>
                          <div className="help-block with-errors"></div>
                        </div>
                      </div>

                      <div className="col-lg-12 col-md-12">
                        <button
                          type="submit"
                          disabled={loading}
                          className="default-btn page-btn"
                        >
                          {itens.button}
                        </button>
                        <div
                          id="msgSubmit"
                          className="h3 text-center hidden"
                        ></div>
                        <div className="clearfix"></div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
