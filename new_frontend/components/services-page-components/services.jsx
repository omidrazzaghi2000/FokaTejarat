import "./service.css";
import ServiceCard from "./serviceCard";
import { motion } from "framer-motion";
import { animationVariants } from "../../constants/animationVariants";
import { useEffect, useState } from "react";
import axios from "axios";
import API_URL from "../../config/api";
const ServicesComponent = () => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    axios
      .get(`${API_URL}/products`, {
        headers: {
          Accept: "application/json",
        },
      })
      .then((response) => {
        setItems(response.data || []);
      })
      .catch((error) => console.log(error));
  }, []);
  return (
    <>
      <div className="bg-[url(./assets/hero-bg.jpg)] bg-fixed bg-center bg-cover pt-44 pb-36 max-md:pt-36 max-md:pb-24 " dir="rtl">
        <motion.div
          initial="initial"
          whileInView="animate"
          variants={animationVariants.zoomOut}
          viewport={{ once: true, amount: 0.2 }}
          style={{ maxWidth: 1200 }}
          className="flex gap-10 justify-between items-end max-md:items-center px-10 mx-auto max-md:px-5 max-md:flex-col"
        >
          <div className="text-white flex flex-col gap-8 max-md:items-center max-md:text-center">
            <h1 className="text-5xl font-bold">خدمات ما</h1>
            <p className="text-xl max-w-md">
              ارائه راهکارهای تخصصی بر پایه فناوری با تمرکز بر کیفیت و نوآوری
            </p>
          </div>
          {/* <div className="flex gap-12 text-white max-md:text-center">
            <div className="flex max-md:items-center  flex-col gap-4">
              <h2 className="text-4xl title-font font-bold">+۱۹K</h2>
              <p className="text-lg">مشتری راضی</p>
            </div>
            <div className="flex max-md:items-center flex-col gap-4">
              <h2 className="text-4xl  title-font font-bold">+۵۰۰۰</h2>
              <p className="text-lg">پروژه موفق</p>
            </div>
          </div> */}
        </motion.div>
      </div>
      <div
        style={{ maxWidth: 1200 }}
        className="mx-auto grid grid-cols-2 max-md:grid-rows-6 max-md:grid-cols-1 grid-rows-3 p-10 max-lg:px-5 gap-5"
        dir="rtl"
      >
        {items.map((e) => {
          return (
            <ServiceCard
              key={e.id}
              title={e.name}
              brief={e.description}
              imgSrc={e.image}
              id={e.id}
            />
          );
        })}
      </div>
    </>
  );
};

export default ServicesComponent;
{
  /* <div className="it-content text-xl  gap-2 justify-center items-center flex-col max-w-md text-center hidden overflow-hidden scale-y-0  transition-all  ">
    <p>
    We believe that technology design are revolutionizing brand
    experiences.
    </p>
    <a className="font-bold" href="">
    Read More {">"}
          </a> */
}
//   </div>
