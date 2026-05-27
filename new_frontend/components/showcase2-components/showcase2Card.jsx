import React from "react";
import { Link } from "react-router-dom";
import { scrollToTop } from "../../constants/scrollToTop";
import { motion } from "framer-motion";
import { animationVariants } from "../../constants/animationVariants";
const Showcase2Card = ({ src, href, title }) => {
  return (
    <motion.div
      initial="initial"
      whileInView="animate"
      variants={animationVariants.fadeUp}
      viewport={{ once: true, amount: 0.2 }}
      style={{ height: 380 }}
      className="relative w-full"
    >
      <Link
          onClick={scrollToTop}
          to={href}
          style={{direction: 'rtl'}}
          className="text-3xl text-left w-fit text-black hover:text-black transition-all cursor-pointer "
        >
          <div>
            <img className="w-full object-cover  hover:scale-2" src={src} alt="img" style={{height:"300px"}}/>
            <div style={{fontSize:"14pt",direction:"rtl",textAlign:"right"}}>
            {title}
            </div>
           
          </div>
      
         
        
    
      </Link>
    </motion.div>
  );
};

export default Showcase2Card;
