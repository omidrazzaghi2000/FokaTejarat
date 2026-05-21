import React from "react";
import { FaEnvelope, FaMap, FaMobileAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import { animationVariants } from "../../constants/animationVariants";
import ContactForm from "../contact-form/ContactForm";

const ContactPage = () => {
  return (
    <div className="w-full overflow-hidden" dir="rtl">
      <div className="flex bg-[url('./assets/hero-bg.jpg')] pt-44 max-sm:pt-40 pb-32 bg-top bg-no-repeat bg-cover">
        <div
          style={{ maxWidth: 1200 }}
          className="mx-auto w-full text-white px-10 max-sm:px-5 flex flex-col max-lg:items-center max-lg:text-center gap-16"
        >
          <motion.h1
            initial="initial"
            whileInView="animate"
            variants={animationVariants.zoomOut}
            viewport={{ once: true, amount: 0.2 }}
            className="text-6xl max-lg:mx-auto font-semibold max-sm:text-5xl max-w-lg"
          >
            تماس با ما
          </motion.h1>
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ staggerChildren: 0.2 }}
            className="grid gap-4 w-full text-start grid-cols-3 grid-rows-1 max-md:grid-cols-1 max-md:grid-rows-3"
          >
            <motion.div
              variants={animationVariants.fadeUp}
              className="card bg-white text-black rounded-md gap-5 p-6 pb-10 max-lg:p-5 max-lg:pb-8 max-md:p-6 max-md:py-7 max-md:pb-10 flex flex-col text-xl"
            >
              <div className="card-header text-2xl flex items-center gap-4">
                <div className="bg-green-500 w-[60px] h-[58px] rounded-md text-xl flex justify-center items-center">
                  <FaEnvelope className="text-white" />
                </div>
                <h2 className="title-font font-semibold">ایمیل</h2>
              </div>
              <p dir="ltr">Fokatejarat@hotmail.com</p>
            </motion.div>
            <motion.div
              variants={animationVariants.fadeUp}
              className="card bg-white text-black rounded-md gap-5 p-6 pb-10 max-lg:p-5 max-lg:pb-8 max-md:p-6 max-md:py-7 max-md:pb-10 flex flex-col text-xl"
            >
              <div className="card-header text-2xl flex items-center gap-4">
                <div className="bg-green-500 w-[60px] h-[58px] rounded-md text-xl flex justify-center items-center">
                  <FaMap className="text-white" />
                </div>
                <h2 className="title-font font-semibold">آدرس</h2>
              </div>
              <p>
                اقدسیه - خیابان شهید موحد دانش - مجتمع تجاری اقدسیه - طبقه سوم - واحد 33 و 32
              </p>
            </motion.div>
            <motion.div
              variants={animationVariants.fadeUp}
              className="card bg-white text-black rounded-md gap-5 p-6 pb-10 max-lg:p-5 max-lg:pb-8 max-md:p-6 max-md:py-7 max-md:pb-10 flex flex-col text-xl"
            >
              <div className="card-header text-2xl flex items-center gap-4">
                <div className="bg-green-500 w-[60px] h-[58px] rounded-md text-xl flex justify-center items-center">
                  <FaMobileAlt className="text-white" />
                </div>
                <h2 className="title-font font-semibold">تلفن</h2>
              </div>
              <p dir="ltr">۰۲۱-۲۶۱۲۲۴۶۳</p>
            </motion.div>
          </motion.div>
        </div>
      </div>

      <section className="bg-black py-20 px-8 max-sm:px-5">
        <motion.div
          initial="initial"
          whileInView="animate"
          variants={animationVariants.fadeUp}
          viewport={{ once: true, amount: 0.1 }}
          style={{ maxWidth: 1200 }}
          className="mx-auto rounded-2xl border border-neutral-800 bg-gradient-to-br from-neutral-950 via-black to-neutral-900 p-8 md:p-12 shadow-2xl shadow-green-950/20"
        >
          <ContactForm variant="page" />
        </motion.div>
      </section>
    </div>
  );
};

export default ContactPage;
