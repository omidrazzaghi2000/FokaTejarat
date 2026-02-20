import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Showcase2Card from "../components/showcase2-components/showcase2Card";
import { animationVariants } from "../constants/animationVariants";
import axios from "axios";
import API_URL from "./config/api";

const Reports = () => {
  const [reports, setReports] = useState([]);

  useEffect(() => {
    document.title = "گزارش‌ها - فوکاتجارت";
    axios
      .get(`${API_URL}/reports`, {
        headers: {
          Accept: "application/json",
        },
      })
      .then((response) => {
        setReports(response.data || []);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="overflow-hidden" dir="rtl">
      <div className="bg-[url(./assets/hero-bg.jpg)] bg-no-repeat bg-center bg-cover pt-44 pb-36 max-md:pt-36 max-md:pb-24 flex justify-center items-center text-white ">
        <motion.h1
          initial="initial"
          whileInView="animate"
          variants={animationVariants.zoomOut}
          viewport={{ once: true, amount: 0.2 }}
          className="text-6xl max-sm:text-5xl text-center font-semibold "
        >
          گزارش‌ها
        </motion.h1>
      </div>
      <div
        style={{ maxWidth: 1200 }}
        className="mx-auto gap-10 grid grid-rows-2 grid-cols-3 max-lg:grid-rows-3 max-lg:grid-cols-2 max-sm:grid-cols-1 max-sm:grid-rows-6 p-10 max-md:px-5 "
      >
        {reports.map((report) => (
          <Showcase2Card
            key={report.id}
            href={`/reports-page/${report.id}`}
            src={report.image}
            title={report.name}
          />
        ))}
      </div>
    </div>
  );
};

export default Reports;

