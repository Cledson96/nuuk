'use client';

import Image from 'next/image';
import img from '@/img/contact.jpg';
import ContactsItens from './intenscontact';
import { useState, useEffect } from 'react';
interface ContactItem {
  title: string;
  name: string;
  description: string;
  email: string;
  message: string;
  button: string;
}
export default function Contact({ locale }: { locale: 'en' | 'pt' | 'fr' }) {
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
  return (
    <div className="contact-section">
      <div className="container">
        <div className="contact-area">
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
                  <form id="contactForm">
                    <div className="row">
                      <div className="col-md-12 col-sm-6">
                        <div className="form-group">
                          <input
                            type="text"
                            name="name"
                            id="name"
                            className="form-control"
                            required
                            data-error="Please enter your name"
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
                            id="email"
                            className="form-control"
                            required
                            data-error="Please enter your email"
                            placeholder={itens.email}
                          />
                          <div className="help-block with-errors"></div>
                        </div>
                      </div>

                      <div className="col-lg-12 col-md-12">
                        <div className="form-group">
                          <textarea
                            name="message"
                            className="form-control"
                            id="message"
                            required
                            data-error="Write your message"
                            placeholder={itens.message}
                          ></textarea>
                          <div className="help-block with-errors"></div>
                        </div>
                      </div>

                      <div className="col-lg-12 col-md-12">
                        <button type="submit" className="default-btn page-btn">
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
