import React, { useState } from "react";
import {
  FaCoins,
  FaEnvelope,
  FaMapMarkerAlt,
  FaMobileAlt,
  FaMap,
  FaPhone,
} from "react-icons/fa";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { animationVariants } from "../../constants/animationVariants";
import WhatWeDoCard from "../home-page-components/whatwedocard";
import { Button, Input, Textarea, useToast } from "@chakra-ui/react";
import axios from "axios";
import { Link } from "react-router-dom";
import { scrollToTop } from "../../constants/scrollToTop";

const ContactPage = () => {
  const toast = useToast();
  const [btnLoader, setBtnLoader] = useState(false);

  const showToast = () => {
    toast({
      title: "Message Sent",
      status: "success",
      duration: 2000,
      isClosable: true,
      position: "top",
      containerStyle: {
        zIndex: 9999,
      },
    });
  };
  const errorToast = (res, status) => {
    toast({
      title: res,
      status: status,
      duration: 2000,
      isClosable: true,
      position: "top",
      containerStyle: {
        zIndex: 9999,
      },
    });
  };
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phoneNo: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    const errors = validateForm(formData);

    if (errors === false) {
      setBtnLoader(true);
      axios
        .post("https://homyz-server.vercel.app/contact", formData)
        .then((response) => {
          showToast();
          setFormData({
            firstName: "",
            lastName: "",
            phoneNo: "",
            email: "",
            message: "",
          });
          setBtnLoader(false);
        })
        .catch((error) => {
          setBtnLoader(false);
          errorToast(error.message, "error");
          console.error("Error submitting form:", error);
        });
    }
  };

  const isValidEmail = (email) => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  };

  const validateForm = (data) => {
    let _error;
    if (
      data.firstName &&
      data.firstName.trim() &&
      data.lastName &&
      data.lastName.trim() &&
      data.email &&
      data.email.trim() &&
      isValidEmail(data.email.trim()) &&
      data.phoneNo &&
      data.phoneNo.trim() &&
      data.message &&
      data.message.trim()
    ) {
      _error = false;
    } else {
      if (
        !data.firstName &&
        !data.firstName.trim() &&
        !data.lastName &&
        !data.lastName.trim() &&
        !data.email &&
        !data.email.trim() &&
        !isValidEmail(data.email.trim()) &&
        !data.phoneNo &&
        !data.phoneNo.trim() &&
        !data.message &&
        !data.message.trim()
      ) {
        errorToast("Fill the fields first!", "error");
      } else if (!data.firstName || !data.firstName.trim()) {
        errorToast("Enter the firstName!", "error");
      } else if (!data.lastName || !data.lastName.trim()) {
        errorToast("Enter the lastName!", "error");
      } else if (!data.email || !data.email.trim()) {
        errorToast("Enter the email!", "error");
      } else if (!isValidEmail(data.email.trim())) {
        errorToast("Enter the valid  email!", "error");
      } else if (!data.phoneNo || !data.phoneNo.trim()) {
        errorToast("Enter the phone no!", "error");
      } else if (!data.message || !data.message.trim()) {
        errorToast("Enter the message!", "error");
      }
    }
    return _error;
  };

  return (
    <div className=" w-full overflow-hidden" dir="rtl">
      <div className="  flex bg-[url('./assets/hero-bg.jpg')] pt-44 max-sm:pt-40 pb-32 bg-top bg-no-repeat bg-cover  ">
        <div
          style={{ maxWidth: 1200 }}
          className="mx-auto w-full text-white px-10 max-sm:px-5 flex flex-col max-lg:items-center max-lg:text-center gap-16"
        >
          <motion.h1
            initial="initial"
            whileInView="animate"
            variants={animationVariants.zoomOut}
            viewport={{ once: true, amount: 0.2 }}
            className="text-6xl max-lg:mx-auto font-semibold max-sm:text-5xl max-w-lg "
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
              className="card bg-white text-black rounded-md gap-5  p-6 pb-10 max-lg:p-5 max-lg:pb-8 max-md:p-6 max-md:py-7 max-md:pb-10 flex flex-col gap text-xl "
            >
              <div className="card-header text-2xl flex items-center gap-4">
                <div className="bg-red-500 w-[60px] h-[58px] rounded-md text-xl flex gap-4 justify-center items-center">
                  <FaEnvelope className="text-white" />
                </div>
                <h2 className="title-font font-semibold ">ایمیل</h2>
              </div>
              <p dir="ltr">Fokatejarat@hotmail.com</p>
            </motion.div>
            <motion.div
              variants={animationVariants.fadeUp}
              className="card bg-white text-black rounded-md gap-5  p-6 pb-10 max-lg:p-5 max-lg:pb-8 max-md:p-6 max-md:py-7 max-md:pb-10 flex flex-col gap text-xl "
            >
              <div className="card-header text-2xl flex items-center gap-4">
                <div className="bg-red-500 w-[60px] h-[58px] rounded-md text-xl flex gap-4 justify-center items-center">
                  <FaMap className="text-white" />
                </div>
                <h2 className="title-font font-semibold "></h2>
              </div>
              <p dir="ltr">اقدسیه - خیابان شهید موحد دانش - مجتمع تجاری اقدسیه - طبقه سوم - واحد 33 و 32</p>
            </motion.div>
            <motion.div
              variants={animationVariants.fadeUp}
              className="card bg-white text-black rounded-md gap-5  p-6 pb-10 max-lg:p-5 max-lg:pb-8 max-md:p-6 max-md:py-7 max-md:pb-10 flex flex-col gap text-xl "
            >
              <div className="card-header text-2xl flex items-center gap-4">
                <div className="bg-red-500 w-[60px] h-[58px] rounded-md text-xl flex gap-4 justify-center items-center">
                  <FaMobileAlt className="text-white" />
                </div>
                <h2 className="title-font font-semibold ">تلفن</h2>
              </div>
              <p dir="ltr">۰۲۱-۲۶۱۲۲۴۶۳</p>
            </motion.div>
          </motion.div>
        </div>

        {/* </Reveal> */}
      </div>


    
      
      
    </div>
  );
};

export default ContactPage;
