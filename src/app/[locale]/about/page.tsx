import { FaAngleDoubleRight } from 'react-icons/fa';
import Link from 'next/link';

export default async function IndexPage() {
  return (
    <>
      <div className="about-title about-title-bg about-image paralax">
        <div className="d-table">
          <div className="d-table-cell">
            <div className="container">
              <div className="about-title-text">
                <h2>About Us</h2>
                <ul>
                  <li>
                    <Link href="/">Home</Link>
                  </li>
                  <li>
                    <FaAngleDoubleRight color="blue" className="mx-2" />
                    About Us
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="about-style-two about-style-three pt-100 pb-70">
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-lg-6 p-0">
              <div className="about-img">
                <img src="assets/img/about-two.png" alt="about image" />
              </div>
            </div>

            <div className="col-lg-6">
              <div className="about-text">
                <div className="section-head">
                  <h2>We have been doing projects since 2008.</h2>
                  <p>
                    It is a long fact that a reader will be distracted by the
                    readable content.
                  </p>
                </div>

                <ul>
                  <li>
                    <i className="icofont-check-circled"></i>
                    100% Secured
                  </li>
                  <li>
                    <i className="icofont-check-circled"></i>
                    Fast & Clean Service
                  </li>
                  <li>
                    <i className="icofont-check-circled"></i>
                    Well Disciplined
                  </li>
                  <li>
                    <i className="icofont-check-circled"></i>
                    24/7 Services
                  </li>
                  <li>
                    <i className="icofont-check-circled"></i>
                    Budget Oriented
                  </li>
                  <li>
                    <i className="icofont-check-circled"></i>
                    Online Payment
                  </li>
                </ul>

                <div className="theme-button">
                  <a href="#" className="default-btn">
                    Learn More
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
