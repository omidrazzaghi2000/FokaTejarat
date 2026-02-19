import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import ExculusivePropertyCard from "../home-page-components/exculusivePropertyCard";
import { animationVariants } from "../../constants/animationVariants";
import axios from "axios";
import API_URL from "../../config/api";

const Popular = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    document.title = "Popular - Homyz";
    axios
      .get(`${API_URL}/products`, {
        headers: {
          Accept: "application/json",
        },
      })
      .then((response) => {
        setProducts(response.data || []);
      })
      .catch((error) => console.log(error));
  }, []);
  return (
    <div className="overflow-hidden">
      <div className="bg-[url(/showcase2-page-images/showcase2-hero-bg.jpg)] bg-no-repeat bg-center bg-cover pt-44 pb-36 max-md:pt-36 max-md:pb-24 flex justify-center items-center text-white ">
        <motion.h1
          initial="initial"
          whileInView="animate"
          variants={animationVariants.zoomOut}
          viewport={{ once: true, amount: 0.2 }}
          className="text-6xl max-md:text-5xl font-semibold"
        >
          Popular
        </motion.h1>
      </div>
      <div
        style={{ maxWidth: 1200 }}
        className="mx-auto gap-10 grid grid-rows-2 grid-cols-2  max-sm:grid-cols-1 max-sm:grid-rows-3 p-10 max-md:px-5 "
      >
        {products.map((item, index) => (
          <ExculusivePropertyCard
            key={item.id || index}
            href={item.id}
            imgSrc={item.image}
            pricing={item.description}
            titlePart1={""}
            titlePart2={item.name}
            type={"پروژه"}
            cardHeight={"h-80"}
            bgColor={"bg-white"}
            detailPath={`${API_URL}/products/${item.id}`}
            typePath={`${API_URL}/products`}
          />
        ))}
      </div>
    </div>
  );
};

export default Popular;
