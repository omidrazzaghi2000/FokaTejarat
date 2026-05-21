import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";
import { scrollToTop } from "../../constants/scrollToTop";
import ContactForm from "../contact-form/ContactForm";

const Footer = () => {
  return (
    <div style={{ direction: "rtl" }} className="bg-black">
      <footer
        style={{ maxWidth: 1200 }}
        className="mx-auto flex justify-between gap-16 max-lg:flex-col py-20 px-8 max-sm:px-5"
      >
        <div className="flex flex-col items-start h-auto justify-between gap-12 w-2/5 max-lg:w-full pr-10 max-sm:pr-0">
          <div className="flex flex-col text-lg items-start justify-between gap-8">
            <a href="/">
              <img src="/fokalogo.png" className="w-36" alt="Foka-logo" />
            </a>
            <p style={{ color: "#696969" }}>با ما در ارتباط باشید.</p>
            <div className="flex text-xl justify-start items-center gap-10 text-green-500">
              <Link target="_blank" to={"https://facebook.com"}>
                <FaFacebookF />
              </Link>
              <Link target="_blank" to={"https://instagram.com"}>
                <FaInstagram />
              </Link>
              <Link target="_blank" to={"https://twitter.com"}>
                <FaTwitter />
              </Link>
            </div>
            <ul className="text-white text-lg flex justify-start items-center flex-wrap gap-x-8 gap-y-4">
              <Link
                onClick={scrollToTop}
                className="hover:text-green-500 transition-all"
                to="/"
              >
                خانه
              </Link>
              <Link
                onClick={scrollToTop}
                className="hover:text-green-500 transition-all"
                to="/services"
              >
                خدمات ما
              </Link>
              <Link
                onClick={scrollToTop}
                className="hover:text-green-500 transition-all"
                to="/about"
              >
                درباره ما
              </Link>
              <Link
                onClick={scrollToTop}
                className="hover:text-green-500 transition-all"
                to="/contact"
              >
                تماس با ما
              </Link>
            </ul>
          </div>
          <p style={{ color: "#696969" }}>© Foka. All Rights Reserved 2026.</p>
        </div>

        <div className="w-3/5 max-lg:w-full flex flex-col gap-10">
          <div
            className="rounded-2xl border border-neutral-800 bg-neutral-950/80 p-6 md:p-8 backdrop-blur-sm"
            id="contact"
          >
            <ContactForm variant="footer" />
          </div>

          <div className="flex flex-col gap-4 text-white text-base">
            <h3 className="text-lg font-semibold text-neutral-300">راه‌های ارتباطی</h3>
            <div className="flex flex-wrap gap-x-6 gap-y-2">
              <span className="text-neutral-500">تلفن:</span>
              <p style={{ direction: "ltr" }} className="text-neutral-200">
                ۰۲۱-۲۶۱۲۲۴۶۳
              </p>
            </div>
            <div className="flex flex-wrap gap-x-6 gap-y-2">
              <span className="text-neutral-500">ایمیل:</span>
              <p style={{ direction: "ltr" }} className="text-neutral-200">
                Fokatejarat@hotmail.com
              </p>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-neutral-500">آدرس:</span>
              <p className="text-neutral-200 leading-relaxed">
                اقدسیه - خیابان شهید موحد دانش - مجتمع تجاری اقدسیه - طبقه سوم - واحد ۳۳ و ۳۲
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
