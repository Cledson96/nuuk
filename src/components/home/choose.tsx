'use client';

import Image from 'next/image';
import img from '@/img/home/negotiation.jpg';
import { useState } from 'react';
export default function Choose() {
  const [first, setFirst] = useState(false);
  const [second, setSecond] = useState(false);
  const [third, setThird] = useState(false);
  const [fourth, setFourth] = useState(false);

  return (
    <section className="why-choose-section why-choose-bg">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-6 why-choose-img">
            <Image src={img} alt="image" />
          </div>

          <div className="col-lg-5 ">
            <div className="why-choose-text">
              <div className="section-head">
                <h1>Why Choose Us</h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
            </div>
            <div className="why-choose-accordian">
              <div className="accordion">
                <div className="card">
                  <div className="card-header">
                    <h2 className="mb-0">
                      <a
                        onClick={() => setFirst(!first)}
                        className={first ? 'btn' : 'btn collapsed'}
                      >
                        Expert Cleaners
                      </a>
                    </h2>
                  </div>
                  <div className={first ? 'collapse show' : 'collapse'}>
                    <div className="card-body">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore.
                    </div>
                  </div>
                </div>

                <div className="card">
                  <div className="card-header">
                    <h2 className="mb-0">
                      <a
                        onClick={() => setSecond(!second)}
                        className={second ? 'btn' : 'btn collapsed'}
                      >
                        Latest Equipment
                      </a>
                    </h2>
                  </div>
                  <div className={second ? 'collapse show' : 'collapse'}>
                    <div className="card-body">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore.
                    </div>
                  </div>
                </div>

                <div className="card">
                  <div className="card-header">
                    <h2 className="mb-0">
                      <a
                        onClick={() => setThird(!third)}
                        className={third ? 'btn' : 'btn collapsed'}
                      >
                        Clean & Fast Service
                      </a>
                    </h2>
                  </div>
                  <div className={third ? 'collapse show' : 'collapse'}>
                    <div className="card-body">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore.
                    </div>
                  </div>
                </div>

                <div className="card">
                  <div className="card-header" id="headingFour">
                    <h2 className="mb-0">
                      <a
                        onClick={() => setFourth(!fourth)}
                        className={fourth ? 'btn' : 'btn collapsed'}
                      >
                        Budget Oriented
                      </a>
                    </h2>
                  </div>

                  <div className={fourth ? 'collapse show' : 'collapse'}>
                    <div className="card-body">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore.
                    </div>
                  </div>
                </div>
              </div>
            </div>
            I
          </div>
        </div>
      </div>
    </section>
  );
}
