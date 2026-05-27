import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
} from "@chakra-ui/react";
import "./service.css";
import {
  FaArrowRight,
  FaEnvelope,
  FaMapMarkerAlt,
  FaPhone,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import FreeTrial from "../free-trial-component/freeTrial";
import { motion } from "framer-motion";
import { animationVariants } from "../../constants/animationVariants";
import { scrollToTop } from "../../constants/scrollToTop";

const ServicePage = ({ id, title, breif, descr, imageSrc }) => {
  return (
    <>
      {/* HERO SECTION */}
      <div
        style={{
          backgroundImage: `url(${imageSrc})`,
        }}
        className="relative bg-no-repeat bg-center bg-cover pt-44 pb-36 max-md:pt-36 max-md:pb-24 flex justify-center items-center text-white overflow-hidden"
        dir="rtl"
      >
        <div className="absolute top-0 bottom-0 left-0 right-0 bg-black/60 backdrop-blur-[2px]"></div>

        {/* Animated circles */}
        <div className="absolute w-[500px] h-[500px] bg-green-500/20 blur-3xl rounded-full top-[-120px] right-[-120px] animate-pulse"></div>
        <div className="absolute w-[350px] h-[350px] bg-white/10 blur-3xl rounded-full bottom-[-100px] left-[-100px] animate-pulse"></div>

        <motion.h1
          initial={{ opacity: 0, scale: 0.8, y: 50 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="text-6xl max-md:text-5xl max-sm:text-4xl font-bold z-10 text-center px-4"
        >
          {title}
        </motion.h1>
      </div>

      {/* MAIN CONTENT */}
      <div
        style={{ maxWidth: 1400 }}
        className="mx-auto px-10 py-20 max-md:px-6 max-sm:px-4"
        dir="rtl"
      >
        <div className="flex flex-col gap-10">
          {/* TITLE */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h1 className="text-[52px] leading-tight max-md:text-4xl max-sm:text-3xl font-bold text-gray-900">
              {title}
            </h1>

            <div className="w-32 h-2 bg-green-500 rounded-full mt-5"></div>
          </motion.div>

          {/* PROFESSIONAL DESCRIPTION SECTION */}
          <motion.div
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-[40px] bg-gradient-to-br from-white to-gray-50 shadow-[0_20px_80px_rgba(0,0,0,0.08)] border border-gray-100 p-8 max-md:p-5">
              {/* Glow effect */}
              <div className="absolute top-[-100px] left-[-100px] w-[250px] h-[250px] bg-green-500/10 blur-3xl rounded-full"></div>

              {/* IMAGE + TEXT */}
              <div className="relative z-10">
                <motion.div
                  initial={{ opacity: 0, x: 80 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.9 }}
                  viewport={{ once: true }}
                  className="
                    float-left
                    w-[480px]
                    max-lg:w-[380px]
                    max-md:w-full
                    max-md:float-none
                    ml-10
                    max-md:ml-0
                    mb-8
                    group
                  "
                >
                  <div className="relative overflow-hidden rounded-[32px] mr-10">
                   
                    <img
                      src={imageSrc}
                      alt={title}
                      className="
                        w-full
                        h-[500px]
                        max-lg:h-[420px]
                        max-md:h-[320px]
                        object-contain
                        rounded-[32px]
                        transition-all
                        duration-700
                        group-hover:scale-110
                      "
                    />

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent"></div>

                    {/* Floating badge */}
                    <div className="absolute bottom-6 right-6 bg-white/90 backdrop-blur-md px-5 py-3 rounded-2xl shadow-xl">
                      <p className="text-black font-semibold text-lg">
                        {title}
                      </p>
                    </div>
                  </div>
                </motion.div>

                {/* TEXT CONTENT */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 1.2 }}
                  viewport={{ once: true }}
                  className="
                    text-[20px]
                    max-md:text-[18px]
                    leading-[2.3]
                    text-gray-700
                    text-justify
                    space-y-8
                  "
                >
                  {/* First Paragraph */}
                  <p className="drop-shadow-sm">
                    {descr}
                  </p>

                  

                  
                </motion.div>

                {/* Clear float */}
                <div className="clear-both"></div>
              </div>
            </div>
          </motion.div>

          
        </div>
      </div>

      {/* <FreeTrial /> */}
    </>
  );
};

export default ServicePage;