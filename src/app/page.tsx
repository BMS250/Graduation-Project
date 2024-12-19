'use client'
import Image from "next/image";
import logo from "@/app/images/hero-bg.png"
import styles from "./page.module.css";
import Link from "next/link";
import Description from "./components/description/page";
import WhyUs from "./components/whyUs/page";
import Team from "./components/team/page";
import Header from "./components/header/page";
import Footer from "./components/footer/page";
import React, { useRef, useState } from 'react';


export default function Home() {
  const fileInputRef = useRef(null);
  const [videoSrc, setVideoSrc] = useState(null);

  const handleButtonClick = () => {
    // Programmatically trigger the file input click
    fileInputRef.current.click();
  };

  const handleFileChange = (event) => {
    // Handle the selected file
    const file = event.target.files[0];
    if (file) {
      const videoURL = URL.createObjectURL(file); // Create a temporary URL for the video
      setVideoSrc(videoURL); // Set the video source
    }
  };

  return (
    <>

      <div className="model" style={{ display: "flex", alignItems: "center", gap: "20px" }}>
        <button className="modelBtn" onClick={handleButtonClick}>
          Select a video for analysing
        </button>
        {/* Hidden input */}
        <input
          type="file"
          accept="video/*"
          ref={fileInputRef}
          onChange={handleFileChange}
          style={{ display: "none" }}
        />
        {/* Video preview */}
        {videoSrc && (
          <video
            src={videoSrc}
            controls
            style={{ width: "300px", borderRadius: "10px", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)" }}
          >
            Your browser does not support the video tag.
          </video>
        )}
      </div>
      <html key="1">
        <body>
          <div className="hero_area">
            <Header />
            <section className="slider_section ">
              <div
                className="carousel slide"
                data-ride="carousel"
                id="customCarousel1">
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <div className="container ">
                      <div className="row">
                        <div className="col-md-6 ">
                          <div className="detail-box">
                            <h1>
                              Bein Sports <br />
                            </h1>
                            <span className="description">
                              Football is the world's most popular sport, uniting over 4 billion fans worldwide.
                              Modern football relies heavily on statistics, changing how teams and fans understand the game.<br />
                              One key stat is possession, which shows how much control a team has during a match.
                            </span>
                            <div className="btn-box">
                              <a className="btn1" href="/components/description">
                                Read More
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="img-box">
                            <img alt="" src="/images/background.webp" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <br />
                    <br />
                    <div className="model">
                      <button className="modelBtn" onClick={handleButtonClick}>
                        Select a video for analysing
                      </button>
                      {/* Hidden input */}
                      <input
                        type="file"
                        accept="video/*"
                        ref={fileInputRef}
                        onChange={handleFileChange}
                        style={{ display: "none" }}
                      />
                    </div>
                  </div>
                  {/* <div className="carousel-item ">
                    <div className="container ">
                      <div className="row">
                        <div className="col-md-6 ">
                          <div className="detail-box">
                            <h1>
                              Crypto <br />
                              Currency
                            </h1>
                            <p>
                              Explicabo esse amet tempora quibusdam laudantium,
                              laborum eaque magnam fugiat hic? Esse dicta aliquid
                              error repudiandae earum suscipit fugiat molestias,
                              veniam, vel architecto veritatis delectus repellat modi
                              impedit sequi.
                            </p>
                            <div className="btn-box">
                              <a className="btn1" href="">
                                Read More
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="img-box">
                            <img alt="" src="/images/slider-img.png" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <div className="container ">
                      <div className="row">
                        <div className="col-md-6 ">
                          <div className="detail-box">
                            <h1>
                              Crypto <br />
                              Currency
                            </h1>
                            <p>
                              Explicabo esse amet tempora quibusdam laudantium,
                              laborum eaque magnam fugiat hic? Esse dicta aliquid
                              error repudiandae earum suscipit fugiat molestias,
                              veniam, vel architecto veritatis delectus repellat modi
                              impedit sequi.
                            </p>
                            <div className="btn-box">
                              <a className="btn1" href="">
                                Read More
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="img-box">
                            <img alt="" src="/images/slider-img.png" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div> */}
                </div>
                {/* <ol className="carousel-indicators">
                  <li
                    className="active"
                    data-slide-to="0"
                    data-target="#customCarousel1"
                  />
                  <li data-slide-to="1" data-target="#customCarousel1" />
                  <li data-slide-to="2" data-target="#customCarousel1" />
                </ol> */}
              </div>
            </section>
          </div>
          <section className="service_section layout_padding">
            <div className="service_container">
              <div className="container ">
                <div className="heading_container heading_center">
                  <h2>
                    Our <span>Services</span>
                  </h2>
                  <p>
                    There are many variations of passages of Lorem Ipsum available,
                    but the majority have suffered alteration
                  </p>
                </div>
                <div className="row">
                  <div className="col-md-4 ">
                    <div className="box ">
                      <div className="img-box">
                        <img alt="" src="/images/s1.png" />
                      </div>
                      <div className="detail-box">
                        <h5>Currency Wallet</h5>
                        <p>
                          fact that a reader will be distracted by the readable
                          content of a page when looking at its layout. The point of
                          using
                        </p>
                        <a href="">Read More</a>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4 ">
                    <div className="box ">
                      <div className="img-box">
                        <img alt="" src="/images/s2.png" />
                      </div>
                      <div className="detail-box">
                        <h5>Security Storage</h5>
                        <p>
                          fact that a reader will be distracted by the readable
                          content of a page when looking at its layout. The point of
                          using
                        </p>
                        <a href="">Read More</a>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4 ">
                    <div className="box ">
                      <div className="img-box">
                        <img alt="" src="/images/s3.png" />
                      </div>
                      <div className="detail-box">
                        <h5>Expert Support</h5>
                        <p>
                          fact that a reader will be distracted by the readable
                          content of a page when looking at its layout. The point of
                          using
                        </p>
                        <a href="">Read More</a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="btn-box">
                  <a href="">View All</a>
                </div>
              </div>
            </div>
          </section>
          <section className="about_section layout_padding">
            <div className="container">
              <div className="heading_container heading_center">
                <h2>
                  About Us
                </h2>
                <p>
                  Magni quod blanditiis non minus sed aut voluptatum illum quisquam
                  aspernatur ullam vel beatae rerum ipsum voluptatibus
                </p>
              </div>
              <div className="row">
                <div className="col-md-6 ">
                  <div className="img-box">
                    <img alt="" src="/images/about-img.png" />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="detail-box">
                    <h3>We Are Football Analysers</h3>
                    <p>
                      There are many variations of passages of Lorem Ipsum available,
                      but the majority have suffered alteration in some form, by
                      injected humour, or randomised words which don't look even
                      slightly believable. If you are going to use a passage of Lorem
                      Ipsum, you need to be sure there isn't anything embarrassing
                      hidden in the middle of text. All
                    </p>
                    <p>
                      Molestiae odio earum non qui cumque provident voluptates,
                      repellendus exercitationem, possimus at iste corrupti officiis
                      unde alias eius ducimus reiciendis soluta eveniet. Nobis ullam
                      ab omnis quasi expedita.
                    </p>
                    <a href="">Read More</a>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="why_section layout_padding">
            <div className="container">
              <div className="heading_container heading_center">
                <h2>
                  Why Choose <span>Us</span>
                </h2>
              </div>
              <div className="why_container">
                <div className="box">
                  <div className="img-box">
                    <img alt="" src="/images/w1.png" />
                  </div>
                  <div className="detail-box">
                    <h5>Expert Management</h5>
                    <p>
                      Incidunt odit rerum tenetur alias architecto asperiores omnis
                      cumque doloribus aperiam numquam! Eligendi corrupti, molestias
                      laborum dolores quod nisi vitae voluptate ipsa? In tempore
                      voluptate ducimus officia id, aspernatur nihil. Tempore laborum
                      nesciunt ut veniam, nemo officia ullam repudiandae repellat
                      veritatis unde reiciendis possimus animi autem natus
                    </p>
                  </div>
                </div>
                <div className="box">
                  <div className="img-box">
                    <img alt="" src="/images/w2.png" />
                  </div>
                  <div className="detail-box">
                    <h5>Secure Investment</h5>
                    <p>
                      Incidunt odit rerum tenetur alias architecto asperiores omnis
                      cumque doloribus aperiam numquam! Eligendi corrupti, molestias
                      laborum dolores quod nisi vitae voluptate ipsa? In tempore
                      voluptate ducimus officia id, aspernatur nihil. Tempore laborum
                      nesciunt ut veniam, nemo officia ullam repudiandae repellat
                      veritatis unde reiciendis possimus animi autem natus
                    </p>
                  </div>
                </div>
                <div className="box">
                  <div className="img-box">
                    <img alt="" src="/images/w3.png" />
                  </div>
                  <div className="detail-box">
                    <h5>Instant Trading</h5>
                    <p>
                      Incidunt odit rerum tenetur alias architecto asperiores omnis
                      cumque doloribus aperiam numquam! Eligendi corrupti, molestias
                      laborum dolores quod nisi vitae voluptate ipsa? In tempore
                      voluptate ducimus officia id, aspernatur nihil. Tempore laborum
                      nesciunt ut veniam, nemo officia ullam repudiandae repellat
                      veritatis unde reiciendis possimus animi autem natus
                    </p>
                  </div>
                </div>
                <div className="box">
                  <div className="img-box">
                    <img alt="" src="/images/w4.png" />
                  </div>
                  <div className="detail-box">
                    <h5>Happy Customers</h5>
                    <p>
                      Incidunt odit rerum tenetur alias architecto asperiores omnis
                      cumque doloribus aperiam numquam! Eligendi corrupti, molestias
                      laborum dolores quod nisi vitae voluptate ipsa? In tempore
                      voluptate ducimus officia id, aspernatur nihil. Tempore laborum
                      nesciunt ut veniam, nemo officia ullam repudiandae repellat
                      veritatis unde reiciendis possimus animi autem natus
                    </p>
                  </div>
                </div>
              </div>
              <div className="btn-box">
                <a href="">Read More</a>
              </div>
            </div>
          </section>

          <section className="info_section layout_padding2">
            <div className="container">
              <div className="row">
                <div className="col-md-6 col-lg-3 info_col">
                  <div className="info_contact">
                    <h4>Address</h4>
                    <div className="contact_link_box">
                      <a href="">
                        <i aria-hidden="true" className="fa fa-map-marker" />
                        <span>Location</span>
                      </a>
                      <a href="">
                        <i aria-hidden="true" className="fa fa-phone" />
                        <span>Call +01 1234567890</span>
                      </a>
                      <a href="">
                        <i aria-hidden="true" className="fa fa-envelope" />
                        <span>demo@gmail.com</span>
                      </a>
                    </div>
                  </div>
                  <div className="info_social">
                    <a href="">
                      <i aria-hidden="true" className="fa fa-facebook" />
                    </a>
                    <a href="">
                      <i aria-hidden="true" className="fa fa-twitter" />
                    </a>
                    <a href="">
                      <i aria-hidden="true" className="fa fa-linkedin" />
                    </a>
                    <a href="">
                      <i aria-hidden="true" className="fa fa-instagram" />
                    </a>
                  </div>
                </div>
                <div className="col-md-6 col-lg-3 info_col">
                  <div className="info_detail">
                    <h4>Info</h4>
                    <p>
                      necessary, making this the first true generator on the Internet.
                      It uses a dictionary of over 200 Latin words, combined with a
                      handful
                    </p>
                  </div>
                </div>
                <div className="col-md-6 col-lg-2 mx-auto info_col">
                  <div className="info_link_box">
                    <h4>Links</h4>
                    <div className="info_links">
                      {/* <a className="active" href="index.html">
                        Home
                      </a>
                      <a className="" href="about.html">
                        About
                      </a>
                      <a className="" href="service.html">
                        Services
                      </a>
                      <a className="" href="why.html">
                        Why Us
                      </a>
                      <a className="" href="team.html">
                        Team
                      </a> */}
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-lg-3 info_col ">
                  <h4>Subscribe</h4>
                  <form action="#">
                    <input placeholder="Enter email" type="text" />
                    <button type="submit">Subscribe</button>
                  </form>
                </div>
              </div>
            </div>
          </section>
          <Footer />
        </body>
      </html>

    </>
  );
}
