import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
} from "@chakra-ui/react";
import "./article.css";
import {
  FaArrowRight,
  FaCalendarAlt,
  FaClock,
  FaEnvelope,
  FaMapMarkerAlt,
  FaPhone,
  FaUser,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import FreeTrial from "../free-trial-component/freeTrial";
import { motion } from "framer-motion";
import { animationVariants } from "../../constants/animationVariants";
import { scrollToTop } from "../../constants/scrollToTop";

const ArticlePage = ({ title, description, imageSrc }) => {
  return (
    <>
      {/* HERO SECTION */}
      <div
        style={{
          backgroundImage: `url(${imageSrc})`,
          direction: "rtl",
        }}
        className="
          relative
          bg-no-repeat
          bg-center
          bg-cover
          pt-44
          pb-36
          max-md:pt-36
          max-md:pb-24
          flex
          justify-center
          items-center
          text-white
          overflow-hidden
        "
      >
        {/* Overlay */}
        <div className="absolute top-0 bottom-0 left-0 right-0 bg-black/60 backdrop-blur-[2px]"></div>

        {/* Decorative Blurs */}
        <div className="absolute top-[-120px] right-[-120px] w-[420px] h-[420px] bg-green-500/20 rounded-full blur-3xl animate-pulse"></div>

        <div className="absolute bottom-[-120px] left-[-120px] w-[320px] h-[320px] bg-white/10 rounded-full blur-3xl animate-pulse"></div>

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center px-6">
          <motion.h1
            initial={{ opacity: 0, scale: 0.8, y: 60 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            className="
              text-6xl
              max-md:text-5xl
              max-sm:text-4xl
              font-bold
              text-center
              leading-tight
            "
          >
            {title}
          </motion.h1>

          {/* Meta Data */}
          {/* <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="
              flex
              items-center
              gap-8
              max-md:flex-wrap
              max-md:justify-center
              mt-8
              text-lg
              text-white/80
            "
          >
            <div className="flex items-center gap-2">
              <FaUser />
              <p>نویسنده مقاله</p>
            </div>

            <div className="flex items-center gap-2">
              <FaCalendarAlt />
              <p>1405/03/06</p>
            </div>

            <div className="flex items-center gap-2">
              <FaClock />
              <p>۵ دقیقه مطالعه</p>
            </div>
          </motion.div> */}
        </div>
      </div>

      {/* MAIN SECTION */}
      <div
        style={{
          maxWidth: 1400,
          direction: "rtl",
        }}
        className="mx-auto px-10 py-20 max-md:px-6 max-sm:px-4"
      >
        <div className="flex flex-col gap-12">
          {/* ARTICLE TITLE */}
          <motion.div
            initial={{ opacity: 0, y: 70 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: true }}
          >
            <h1
              className="
                text-[52px]
                max-md:text-4xl
                max-sm:text-3xl
                font-bold
                leading-tight
                text-gray-900
              "
            >
              {title}
            </h1>

            <div className="w-36 h-2 bg-green-500 rounded-full mt-5"></div>
          </motion.div>

          {/* ARTICLE CONTENT */}
          <motion.div
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div
              className="
                relative
                overflow-hidden
                rounded-[40px]
                bg-gradient-to-br
                from-white
                to-gray-50
                border
                border-gray-100
                shadow-[0_20px_80px_rgba(0,0,0,0.08)]
                p-10
                max-md:p-5
              "
            >
              {/* Glow */}
              <div className="absolute top-[-100px] left-[-100px] w-[250px] h-[250px] bg-green-500/10 rounded-full blur-3xl"></div>

              <div className="relative z-10">
                {/* FLOAT IMAGE */}
                <motion.div
                  initial={{ opacity: 0, x: 80 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.9 }}
                  viewport={{ once: true }}
                  className="
                    float-left
                    w-[500px]
                    max-lg:w-[380px]
                    max-md:w-full
                    max-md:float-none
                    ml-10
                    max-md:ml-0
                    mb-8
                    group
                  "
                >
                  <div className="relative overflow-hidden rounded-[35px] mr-10">
                    <img
                      src={imageSrc}
                      alt={title}
                      className="
                        w-full
                        h-[520px]
                        max-lg:h-[430px]
                        max-md:h-[320px]
                        object-cover
                        rounded-[35px]
                        transition-all
                        duration-700
                        group-hover:scale-110
                      "
                    />

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent"></div>

                    
                  </div>
                </motion.div>

                {/* ARTICLE TEXT */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 1.2 }}
                  viewport={{ once: true }}
                  className="
                    text-[21px]
                    max-md:text-[18px]
                    leading-[2.4]
                    text-gray-700
                    text-justify
                    space-y-8
                  "
                >
                  {/* Paragraph 1 */}
                  <p>{description}</p>

                  
                </motion.div>

                {/* Clear Float */}
                <div className="clear-both"></div>
              </div>
            </div>
          </motion.div>

          

          
        </div>
      </div>

    </>
  );
};

export default ArticlePage;