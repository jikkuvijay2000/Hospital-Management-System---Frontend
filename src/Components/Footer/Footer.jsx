import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import { RiLinkedinFill } from "react-icons/ri";
import { AiFillGithub, AiFillInstagram } from "react-icons/ai";

const socialLinks = [
  {
    path: "https://github.com/jikkuvijay2000",
    icon: <AiFillGithub className="group-hover:text-white w-4 h-5" />,
    label: "GitHub",
  },
  {
    path: "https://www.instagram.com/_mr.un.known.__/",
    icon: <AiFillInstagram className="group-hover:text-white w-4 h-5" />,
    label: "Instagram",
  },
  {
    path: "https://www.linkedin.com/in/jikkuvijay",
    icon: <RiLinkedinFill className="group-hover:text-white w-4 h-5" />,
    label: "LinkedIn",
  },
];

const quickLinks = [
  {
    path: "/home",
    display: "Home",
  },
  {
    path: "/",
    display: "About Us",
  },
  {
    path: "/services",
    display: "Services",
  },
  {
    path: "/",
    display: "Blog",
  },
];

const quickLinks01 = [
  {
    path: "/find-a-doctor",
    display: "Find a Doctor",
  },
  {
    path: "/",
    display: "Request an Appointment",
  },
  {
    path: "/",
    display: "Find a Location",
  },
  {
    path: "/",
    display: "Get an opinion",
  },
];

const quickLinks02 = [
  {
    path: "/",
    display: "Donate",
  },
  {
    path: "/contact",
    display: "Contact Us",
  },
];

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="pb-16 pt-10">
      <div className="container  ">
        <div className="flex justify-between flex-col md:flex-row flex-wrap gap-5">
          <div>
            <img src={logo} alt="Logo" />
            <p className="text-[16px] leading-7 mt-5 font-[400] text-textColor">
              Copyright © {year} developed by Jikku Vijay. All rights reserved.
            </p>

            <div className="flex items-center gap-5 mt-2">
              {socialLinks.map((link, index) => (
                <a
                  href={link.path}
                  key={index}
                  className="w-9 h-9 border border-solid border-[#181A1E] rounded-full flex items-center justify-center group hover:bg-primaryColor hover:border-none"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-[20px] leading-[30px] font-[700] mb-4 text-headingColor">
              Quick Links
            </h2>
            <ul>
              {quickLinks.map((item, index) => (
                <li key={index} className="mb-2">
                  <Link
                    to={item.path}
                    className="text-[16px] leading-7 font-[400] text-textColor hover:text-primaryColor"
                  >
                    {item.display}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-[20px] leading-[30px] font-[700] mb-4 text-headingColor">
              I want to :
            </h2>
            <ul>
              {quickLinks01.map((item, index) => (
                <li key={index} className="mb-2">
                  <Link
                    to={item.path}
                    className="text-[16px] leading-7 font-[400] text-textColor hover:text-primaryColor"
                  >
                    {item.display}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-[20px] leading-[30px] font-[700] mb-4 text-headingColor">
              Support:
            </h2>
            <ul>
              {quickLinks02.map((item, index) => (
                <li key={index} className="mb-2">
                  <Link
                    to={item.path}
                    className="text-[16px] leading-7 font-[400] text-textColor hover:text-primaryColor"
                  >
                    {item.display}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
