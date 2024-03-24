"use client";
import { useState, useEffect } from "react";
import logo from "@/img/logo-azul-cortada.png";
import Image from "next/image";
import Link from "next/link";
import { IoIosArrowForward } from "react-icons/io";

const itens = [
  {
    title: "Home",
    children: [
      {
        title: "Home Page 1",
        link: "index.html",
      },
      {
        title: "Home Page 2",
        link: "index-two.html",
      },
      {
        title: "Home Page 3",
        link: "index-three.html",
      },
    ],
    link: "/",
  },
  {
    title: "About",
    link: "about.html",
  },
  {
    title: "Services",
    children: [
      {
        title: "Service one",
        link: "service.html",
      },
      {
        title: "Services two",
        link: "service-two.html",
      },
      {
        title: "Service three",
        link: "service-three.html",
      },
      {
        title: "Service details",
        link: "service-details.html",
      },
    ],
    link: "service.html",
  },
];

export default function MenuHeader() {
  const [isSticky, setIsSticky] = useState(false);

  const checkScroll = () => {
    const offset = window.scrollY;

    if (offset > 100) {
      setIsSticky(true);
    } else {
      setIsSticky(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", checkScroll);
    return () => {
      window.removeEventListener("scroll", checkScroll);
    };
  }, []);

  return (
    <div className={`navbar-area ${isSticky ? "sticky " : ""}`}>
      <div className="mobile-nav">
        <Image src={logo} alt="logo" />
      </div>
      <div className="main-nav">
        <div className="container">
          <nav className="navbar navbar-expand-md navbar-light">
            <a className="navbar-brand" href="index.html">
              <Image
                src={logo}
                style={{ width: "auto", height: "100%" }}
                alt="logo"
              />
            </a>
            <div className="collapse navbar-collapse mean-menu justify-content-center">
              <ul className="navbar-nav">
                {itens.map((item, index) => {
                  return (
                    <li className="nav-item" key={index}>
                      {item.children ? (
                        <Link
                          href={item.link ?? "#"}
                          className="nav-link dropdown-toggle"
                        >
                          {item.title}
                          <IoIosArrowForward />
                        </Link>
                      ) : (
                        <a href={item.link} className="nav-link">
                          {item.title}
                        </a>
                      )}
                      {item.children && (
                        <ul className="dropdown-menu">
                          {item.children.map((child, index) => {
                            return (
                              <li className="nav-item" key={index}>
                                <Link
                                  href={child.link ?? "#"}
                                  className="nav-link"
                                >
                                  {child.title}
                                </Link>
                              </li>
                            );
                          })}
                        </ul>
                      )}
                    </li>
                  );
                })}
                {/*  <li className="nav-item">
                  <a href="#" className="nav-link dropdown-toggle active">
                    Home
                    <IoIosArrowForward />
                  </a>
                  <ul className="dropdown-menu">
                    <li className="nav-item">
                      <a href="index.html" className="nav-link active">
                        Home Page 1
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="index-two.html" className="nav-link">
                        Home Page 2
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="index-three.html" className="nav-link">
                        Home Page 3
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  <a href="about.html" className="nav-link">
                    About
                  </a>
                </li>
                <li className="nav-item">
                  <a href="service.html" className="nav-link dropdown-toggle">
                    Services
                    <i className="icofont-rounded-right"></i>
                  </a>
                  <ul className="dropdown-menu">
                    <li className="nav-item">
                      <a href="service.html" className="nav-link">
                        Service one
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="service-two.html" className="nav-link">
                        Services two
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="service-three.html" className="nav-link">
                        Service three
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="service-details.html" className="nav-link">
                        Service details
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  <a href="blog.html" className="nav-link dropdown-toggle">
                    Blog
                    <i className="icofont-rounded-right"></i>
                  </a>
                  <ul className="dropdown-menu">
                    <li className="nav-item">
                      <a href="blog.html" className="nav-link">
                        Blog
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="blog-right-sidebar.html" className="nav-link">
                        Blog Right sidebar
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="blog-details.html" className="nav-link">
                        Blog details
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  <a href="#" className="nav-link dropdown-toggle">
                    Pages
                    <i className="icofont-rounded-right"></i>
                  </a>
                  <ul className="dropdown-menu">
                    <li className="nav-item">
                      <a href="pricing.html" className="nav-link">
                        Pricing
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="testimonial.html" className="nav-link">
                        Testimonial
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="recent-project.html" className="nav-link">
                        Recent Project
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="404.html" className="nav-link">
                        404 Page
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  <a href="#" className="nav-link dropdown-toggle">
                    Team
                    <i className="icofont-rounded-right"></i>
                  </a>
                  <ul className="dropdown-menu">
                    <li className="nav-item">
                      <a href="team.html" className="nav-link">
                        Team
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="team-two.html" className="nav-link">
                        Team two
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  <a href="contact.html" className="nav-link">
                    Contact
                  </a>
                </li> */}
              </ul>
              <div className="navbar-button">
                <a href="testimonial.html">Get Quote</a>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
}
