import React, { useEffect } from "react";
import { Logo } from "../assets";
import { FaFacebook } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { SiTiktok } from "react-icons/si";
import { FooterLinks } from "../constants/constants";
import AOS from "aos";
import "aos/dist/aos.css";

const Footer = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <div className="py-12 w-full flex flex-col md:flex-row justify-between">
      <div className="flex flex-col gap-6 justify-start">
        <img data-aos="fade-left" src={Logo} className="w-[130px]" />
        <p
          data-aos="fade-right"
          className="font-lexend text-sm text-fadeblue w-[60%]"
        >
          We provide information about properties such as houses, villas and
          apartments to help people find their dream home
        </p>
        <div className="flex gap-6 text-2xl text-fadeblue items-center">
          <FaFacebook className="hover:text-primary" />
          <RiInstagramFill className="hover:text-primary text-3xl" />
          <SiTiktok className="hover:text-primary" />
        </div>
      </div>
      <div className="flex flex-col  w-[60%] md:flex-row justify-between">
        {FooterLinks.map((footerlink) => (
          <div className="flex flex-col gap-4 items-start">
            <p
              data-aos="zoom-in"
              className="font-lexend text-primary font-semibold"
            >
              {footerlink.title}
            </p>
            <ul data-aos="fade-left" className="list-none flex flex-col gap-6">
              {footerlink.sublinks.map((sublink) => (
                <li
                  key={sublink.id}
                  className="font-lexend font-light cursor-pointer hover:text-green text-fadeblue text-sm"
                >
                  {sublink.title}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Footer;
