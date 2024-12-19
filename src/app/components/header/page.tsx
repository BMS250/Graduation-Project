'use client'
import Image from 'next/image';
// import logo from '/images/logo.png';
import Link from "next/link";

function Header() {
    return (
        <div className='header'>
            <div>
                <meta charSet="utf-8" />
                <meta content="IE=edge" httpEquiv="X-UA-Compatible" />
                <meta
                    content="width=device-width, initial-scale=1, shrink-to-fit=no"
                    name="viewport"
                />
                <meta content="" name="keywords" />
                <meta content="" name="description" />
                <meta content="" name="author" />
                <link href="/images/favicon.png" rel="shortcut icon" type="" />
                <title> Football Analyser </title>
                <link href="/css/bootstrap.css" rel="stylesheet" type="text/css" />
                <link
                    href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700;900&display=swap"
                    rel="stylesheet"
                />
                <link
                    href="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.carousel.min.css"
                    rel="stylesheet"
                    type="text/css"
                />
                <link href="/css/font-awesome.min.css" rel="stylesheet" />
                <link href="/css/style.css" rel="stylesheet" />
                <link href="/css/responsive.css" rel="stylesheet" />
            </div>
            <div className="hero_bg_box">
                <div className="bg_img_box">
                </div>
            </div>
            <div className="container-fluid">
                <nav className="navbar navbar-expand-lg custom_nav-container">
                    <Link className="navbar-brand" href={"/"}>
                        <Image src={'/images/logo.png'} alt="Logo" height={60} width={60} />
                        <span>  BEIN Sports</span>
                    </Link>
                    <button
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                        className="navbar-toggler"
                        data-target="#navbarSupportedContent"
                        data-toggle="collapse"
                        type="button">
                        <span className=""> </span>
                    </button>
                    <div
                        className="collapse navbar-collapse"
                        id="navbarSupportedContent">
                        <ul className="navbar-nav  ">
                            <li className="nav-item active">
                                <Link className="nav-link" href={"/"}>
                                    Home <span className="sr-only">(current)</span>
                                </Link>
                            </li>
                            {/* <li className="nav-item">
                                <Link className="nav-link" href={"/components/description"}>
                                    Description
                                </Link>
                            </li> */}
                            {/* <li className="nav-item">
                                <a className="nav-link" href="service.html">
                                    Services
                                </a>
                            </li> */}
                            <li className="nav-item">
                                <Link className="nav-link" href="/components/whyUs">
                                    Why Us
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" href="/components/team">
                                    Team
                                </Link>
                            </li>
                            {/* <li className="nav-item">
                                <a className="nav-link" href="#">
                                    {" "}
                                    <i aria-hidden="true" className="fa fa-user" /> Login
                                </a>
                            </li>
                            <form className="form-inline">
                                <button
                                    className="btn  my-2 my-sm-0 nav_search-btn"
                                    type="submit">
                                    <i aria-hidden="true" className="fa fa-search" />
                                </button>
                            </form> */}
                        </ul>
                    </div>
                </nav>
            </div>
        </div>
    )
}

export default Header;