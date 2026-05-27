import React, { useEffect, useState } from "react";
import { FaPeriscope } from "react-icons/fa";
import WhatWeDoCard from "./whatwedocard";
import ExculusivePropertyCard from "./exculusivePropertyCard";
import Button from "../buttons-component/solidbutton";
import ProjectCard from "./projectCard";
import Carousel from "./carousel";
import ReviewCard from "./reviewCard";
import PartnerBrandCard from "./partnerBrandCard";
import { rentHouses } from "../../constants/data";
import { motion } from "framer-motion";
import { animationVariants } from "../../constants/animationVariants";
import { showCase } from "../../constants/showcase";
import "./homePage.css";
import { Link, useNavigate } from "react-router-dom";
import { scrollToTop } from "../../constants/scrollToTop";
import { partnerBrands } from "../../constants/partnerBrands";
import { useToast } from "@chakra-ui/react";
import Counter from "./Counter";
import axios from "axios";
import API_URL from "../../config/api";


const HomePage = () => {
  const navigate = useNavigate();
  const toast = useToast();
  const [articles, setArticles] = useState([]);
  const [reports, setReports] = useState([]);
  const [products, setProducts] = useState([]);
  const [homeFeature, setHomeFeature] = useState(null);

  const resolveMediaUrl = (url) => {
    if (!url) return "/second-hero.webp";
    if (url.startsWith("http")) return url;
    return `${API_URL}${url.startsWith("/") ? url : `/${url}`}`;
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
  useEffect(() => {
    axios
      .get(`${API_URL}/articles`, {
        headers: {
          Accept: "application/json",
        },
      })
      .then((response) => {
        setArticles(response.data || []);
      })
      .catch((error) => console.log(error));

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

    axios
      .get(`${API_URL}/home-feature/`, {
        headers: {
          Accept: "application/json",
        },
      })
      .then((response) => {
        const items = response.data || [];
        if (items.length > 0) {
          setHomeFeature(items[0]);
        }
      })
      .catch((error) => console.log(error));
  }, []);

  const handleSearch = () => {
    const searchInp = document.getElementById("searchInp");
    if (searchInp.value && searchInp.value.trim()) {
      navigate(`/search?query=${searchInp.value}`);
    } else {
      errorToast("Fill the first first!", "error");
    }
  };
  return (
    <div className=" w-full overflow-hidden" style={{direction:"rtl"}}>
      <div className="  flex bg-[url('./assets/hero-bg.jpg')] pt-36 pb-20 bg-top bg-no-repeat bg-cover  ">
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ staggerChildren: 0.2 }}
          style={{ maxWidth: 1200 }}
          className="mx-auto w-full text-white px-10 max-sm:px-5 flex flex-col max-lg:items-center max-lg:text-center gap-12"
        >
          <motion.h1
            variants={animationVariants.fadeLeft}
            style={{fontFamily:"Koloche"}}
            className="text-center text-6xl max-lg:mx-auto font-semibold max-sm:text-4xl  "
            >
           فوکاتجارت
          </motion.h1>
          <motion.p
            variants={animationVariants.fadeLeft}
            className="text-xl mx-auto"
          >
پیشرو در طراحی و ساخت خط پیرولیز پسماند در ایران

          </motion.p>
          {/* <motion.div
            variants={animationVariants.fadeLeft}
            id="search-inp"
            className="max-w-xl max-lg:mx-auto max-lg:w-full relative"
          >
            <FaPeriscope className="text-green-500 text-2xl absolute left-2 top-5 " />
            <input
              placeholder="Search..."
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  handleSearch();
                }
              }}
              autoComplete="off"
              id="searchInp"
              className="w-full py-5 pl-10 pr-32 text-black rounded-md focus:outline-none"
              type="text"
            />
            <Button
              content={"Search"}
              fontSize={"text-xl"}
              padding={"px-5  py-2"}
              furtherClasses={"absolute right-2"}
              styles={{ top: 9.5 }}
              onClick={handleSearch}
            />
          </motion.div> */}
          <motion.div
            variants={animationVariants.fadeLeft}
            className=" max-lg:flex-col max-lg:items-center gap-10 w-full justify-between items-end mt-4"
          >
            
            <div className="flex gap-12 max-sm:flex-wrap  justify-center">
              <div className="flex justify-start items-center gap-2 bg-green-900 p-4 rounded">
                <img className="w-20 ml-2" src="/1.svg" alt="img" />
                <h2 className="text-lg"><h1 style={{fontFamily:"Koloche"}} className="text-xl">فناوری کاملاً بومی

</h1>
</h2>
              </div>
              <div className="flex justify-start items-center gap-2 bg-green-900 p-4 rounded">
                <img className="w-20 ml-2" style={{filter:"invert(1)"}} src="/2.svg" alt="img" />
                <h2 className="text-lg"><h1 style={{fontFamily:"Koloche"}} className="text-xl"> کیفیت بالا و پشتیبانی فنی مستمر

</h1>
</h2>
              </div>
              <div className="flex justify-start items-center gap-2 bg-green-900 p-4 rounded">
                <img className="w-20 ml-2" style={{filter:"invert(1)"}} src="/3.svg" alt="img" />
                <h2 className="text-lg"><h1 style={{fontFamily:"Koloche"}} className="text-xl">آموزش و خدمات پس از فروش حرفه‌ای

</h1></h2>
              </div>
            </div>

            <div className="flex gap-12 max-sm:flex-wrap  justify-center mt-10">
              <div className="flex justify-start items-center gap-2 bg-green-900 p-4 rounded">
                <img className="w-20 ml-2" style={{filter:"invert(1)"}} src="/4.svg" alt="img" />
                <h2 className="text-lg"><h1 style={{fontFamily:"Koloche"}} className="text-xl">استهلاک کمتر، بهره‌وری بیشتر



</h1>
</h2>
              </div>
              <div className="flex justify-start items-center gap-2 bg-green-900 p-4 rounded">
                <img className="w-20 ml-2" style={{filter:"invert(1)"}} src="/5.svg" alt="img" />
                <h2 className="text-lg"><h1 style={{fontFamily:"Koloche"}} className="text-xl"> صرفه اقتصادی رقابتی



</h1>
</h2>
              </div>
              <div className="flex justify-start items-center gap-2 bg-green-900 p-4 rounded">
                <img className="w-20 ml-2" style={{filter:"invert(1)"}} src="/6.svg" alt="img" />
                <h2 className="text-lg"><h1 style={{fontFamily:"Koloche"}} className="text-xl">سازگارتر با محیط زیست

</h1></h2>
              </div>
            </div>

            {/* <div className="grid grid-cols-2 md:grid-cols-3 gap-8 mt-10 w-full justify-items-center">
              <div className="flex flex-col gap-2 items-center text-center">
                <h2 className="text-4xl title-font font-bold">
                  <Counter to={4} duration={2} />
                </h2>
                <p className="text-lg">سایت فعال یا در حال ساخت</p>
              </div>
              <div className="flex flex-col gap-2 items-center text-center">
                <h2 className="text-4xl title-font font-bold">
                  <Counter to={3000} duration={2}  />
                </h2>
                <p className="text-lg">تن CO2e حذف شده در هر واحد در سال</p>
              </div>
              <div className="flex flex-col gap-2 items-center text-center">
                <h2 className="text-4xl title-font font-bold">
                  <Counter to={750} duration={2}  />
                </h2>
                <p className="text-lg">کیلوگرم در ساعت ورودی هر واحد</p>
              </div>
              <div className="flex flex-col gap-2 items-center text-center">
                <h2 className="text-4xl title-font font-bold">
                  <Counter to={1500} duration={2}  />
                </h2>
                <p className="text-lg">تن بیوچار در هر واحد در سال</p>
              </div>
              <div className="flex flex-col gap-2 items-center text-center">
                <h2 className="text-4xl title-font font-bold">
                  <Counter to={3} duration={2} />
                </h2>
                <p className="text-lg">سال بازگشت سرمایه برای بسیاری از پروژه‌ها</p>
              </div>
              <div className="flex flex-col gap-2 items-center text-center">
                <h2 className="text-4xl title-font font-bold">
                  <Counter to={100} duration={2} suffix="%" />
                </h2>
                <p className="text-lg">انرژی تجدیدپذیر</p>
              </div>
            </div> */}
          </motion.div>
          
        </motion.div>

        {/* </Reveal> */}
      </div>
      {/* about section */}
      <div>
        <div
          style={{ maxWidth: 1200 }}
          className="mx-auto flex justify-between items-start p-10 py-28 max-md:py-16 gap-5 max-md:px-5 max-md:flex-col max-md:items-center max-md:text-center"
        >
          <div className="w-2/4 max-md:w-full ">
            <motion.div
              initial="initial"
              whileInView="animate"
              variants={animationVariants.zoomOut}
              viewport={{ once: true, amount: 0.2 }}
            >
              {/* <h2 className="text-5xl max-md:text-4xl font-bold title-font">
                We build quality real estate projects
                <span className=" text-green-500 title-font "> since 1998</span>
              </h2> */}
              <img
                src={resolveMediaUrl(homeFeature?.image)}
                alt={homeFeature?.title || "دستگاه پیرولیز"}
                style={{ borderRadius: "10%" }}
              />
            </motion.div>
          </div>
          <div className="w-2/4 max-md:w-full">
            <motion.div
              initial="initial"
              whileInView="animate"
              variants={animationVariants.fadeRight}
              viewport={{ once: true, amount: 0.2 }}
            >
              <h2 className="text-5xl max-md:text-4xl font-bold title-font">
                {homeFeature?.title || "دستگاه پیرولیز"}
              </h2>
              <p className="text-xl pt-5" style={{ textAlign: "justify" }}>
                {homeFeature?.description ||
                  "با بهره‌گیری از تجربیات خود به عنوان یک توسعه‌دهنده پروژه، ما تجربه دست اولی از آنچه برای عملی کردن پروژه‌های پیرولیز واقعاً مورد نیاز است، داریم. فناوری پیرولیز این دستگاه ما به گونه‌ای ساخته شده است که مقرون به صرفه، همه‌کاره و با ظرفیت بالا باشد، در حالی که بالاترین استانداردهای بیوچار و بازیابی انرژی را ارائه می‌دهد. توانایی کار با انواع خوراک‌ها، زمان تولید و هزینه تولید، همگی چالش‌هایی هستند که ما در طراحی این دستگاه به آنها پرداخته‌ایم. با فناوری خود، امیدواریم که اجرای پروژه‌هایی را که صنعت پیرولیز زیست‌توده را به پتانسیل کامل خود نزدیک‌تر می‌کنند، تسریع کنیم."}
              </p>
              <Link
                onClick={scrollToTop}
                to={homeFeature?.button_link || "/about"}
              >
                <Button
                  content={homeFeature?.button_text || "درباره ما"}
                  fontSize={"text-xl"}
                  padding={"px-5  py-2"}
                  furtherClasses={"mt-8"}
                />
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
      {/* what we do section start */}
      <div className="bg-gray-100">
        <div
          style={{ maxWidth: 1200 }}
          className=" mx-auto flex gap-5 justify-between items-start p-10 py-28 max-md:py-16 max-md:px-5 max-lg:flex-col max-lg:items-center  max-lg:gap-12"
        >
          <motion.div
            initial="initial"
            whileInView="animate"
            variants={animationVariants.zoomOut}
            viewport={{ once: true, amount: 0.2 }}
            className="w-1/3 max-lg:w-full max-lg:text-center flex flex-col gap-2 items-start max-lg:items-center"
          >
            <h2 className="text-5xl max-md:text-4xl font-bold title-font">
              چرا ما ؟ 
            </h2>
        
            <Link onClick={scrollToTop} to={"/about"}>
              <button
                style={{ borderWidth: 1.5, borderRadius: 4 }}
                className="bg-transparent  text-black border-green-500 text-xl px-5 py-2 duration-300 hover:bg-green-500 hover:text-white transition-all mt-5 max-md:mt-3"
              >
                درباره‌ی ما
              </button>
            </Link>
          </motion.div>

          <motion.div
            initial="initial"
            whileInView="animate"
            variants={animationVariants.fadeUp}
            viewport={{ once: true, amount: 0.2 }}
            className="cards w-2/3 max-lg:w-full flex justify-center max-md:flex-col max-md:items-center gap-7"
          >
            <div className="flex flex-col gap-7 ">
              <WhatWeDoCard
                iconSrc={"/icons/reliable.png"}
                iconAlt={"reliable"}
                title={"قابل اطمینان"}
                desc={
                  "ما با ارائه خدمات با کیفیت بالا، اطمینان حاصل می‌کنیم که مشتریان ما از خدمات ما راضی باشند."
                }
              />
              <WhatWeDoCard
                iconSrc={"/icons/support.png"}
                iconAlt={"support"}
                title={"پشتیبانی حرفه‌ای"}
                desc={
                  "ما تیم پشتیبانی ما با تجربه و دانش متخصص در زمینه‌ی پیرولیز، آماده به ارائه خدمات پشتیبانی حرفه‌ای برای شماست."
                }
              />
            </div>
            <div className="flex flex-col gap-7">
              <div
                style={{ height: 130 }}
                className="max-md:hidden rounded-lg w-80 bg-gradient-to-t from-white to-transparent"
              ></div>
              <WhatWeDoCard
                iconSrc={"/icons/high_quality.png"}
                iconAlt={"quality-first"}
                title={"کیفیت بالا"}
                desc={
                  "ما با ارائه خدمات با کیفیت بالا، اطمینان حاصل می‌کنیم که مشتریان ما از خدمات ما راضی باشند."
                }
              />
              <div
                style={{ height: 130 }}
                className="max-md:hidden rounded-lg w-80 h-36 bg-gradient-to-b from-white to-transparent"
              ></div>
            </div>
          </motion.div>
        </div>

        {/* green process section start */}
        <div style={{ maxWidth: 1200 , display:"none"}} className="p-10 max-md:px-5 mx-auto">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ staggerChildren: 0.1 }}
            className="grid grid-cols-1 lg:grid-cols-3 gap-6"
          >
            {/* Biomass card */}
            <motion.div
              variants={animationVariants.fadeLeft}
              className="bg-green-900 text-white rounded-3xl p-6 flex flex-col justify-between"
              style={{ direction: "rtl" }}
            >
              <div className="flex flex-col gap-6">
                <div className="grid grid-cols-2 gap-6">
                  <div className="flex items-center gap-3">
                    <span className="w-12 h-12 rounded-full border-2 border-green-300 flex items-center justify-center">
                      <img src="/placeholders/forestry.svg" alt="forestry" className="w-7 h-7 opacity-80" />
                    </span>
                    <span className="text-sm">پسماند جنگلی</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="w-12 h-12 rounded-full border-2 border-green-300 flex items-center justify-center">
                      <img src="/placeholders/waste-biomass.svg" alt="waste-biomass" className="w-7 h-7 opacity-80" />
                    </span>
                    <span className="text-sm">زیست‌توده زائد</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="w-12 h-12 rounded-full border-2 border-green-300 flex items-center justify-center">
                      <img src="/placeholders/agri-residue.svg" alt="agri-residue" className="w-7 h-7 opacity-80" />
                    </span>
                    <span className="text-sm">بقایای کشاورزی</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="w-12 h-12 rounded-full border-2 border-green-300 flex items-center justify-center">
                      <img src="/placeholders/ad-digestate.svg" alt="ad-digestate" className="w-7 h-7 opacity-80" />
                    </span>
                    <span className="text-sm">تفاله هضم بی‌هوازی (AD)</span>
                  </div>
                </div>
                <div className="mt-2">
                  <h3 className="text-xl font-semibold">زیست‌توده</h3>
                  <p className="text-sm mt-2 opacity-90">
                    مواد اولیه می‌تواند از منابع آلی گوناگون تأمین شود.
                  </p>
                </div>
              </div>
              <div className="mt-6">
                <Button
                  content={"بیشتر بخوانید"}
                  fontSize={"text-sm"}
                  padding={"px-5 py-2"}
                  furtherClasses={"bg-green-600 hover:bg-green-500"}
                />
              </div>
            </motion.div>

            {/* Center CarboFlow card */}
            <motion.div
              variants={animationVariants.fadeIn}
              className="bg-green-900 text-white rounded-3xl p-6 flex flex-col items-center gap-6"
              style={{ direction: "rtl" }}
            >
              <img
                src="/placeholders/carboflow-machine.svg"
                alt="carboflow"
                className="w-64 h-64 object-contain opacity-90"
              />
              <div className="text-center flex flex-col gap-2">
                <h3 className="text-xl font-semibold">CarboFlow</h3>
                <p className="text-sm opacity-90">
                  مواد اولیه به‌صورت حرارتی به بیوچار و گاز سنتز تجزیه می‌شود؛ گاز سنتز برای تأمین انرژی فرایند و توان خشک‌سازی‌های موردنیاز سوزانده می‌شود.
                </p>
              </div>
              <Button
                content={"بیشتر بخوانید"}
                fontSize={"text-sm"}
                padding={"px-5 py-2"}
                furtherClasses={"bg-green-600 hover:bg-green-500"}
              />
            </motion.div>

            {/* Right column stacked outputs */}
            <div className="flex flex-col gap-6">
              <motion.div
                variants={animationVariants.fadeRight}
                className="bg-green-900 text-white rounded-3xl p-6 flex items-center gap-4"
                style={{ direction: "rtl" }}
              >
                <span className="w-12 h-12 rounded-full border-2 border-green-300 flex items-center justify-center shrink-0">
                  <img src="/placeholders/heat.svg" alt="heat-electricity" className="w-7 h-7 opacity-80" />
                </span>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold">حرارت و برق</h3>
                  <p className="text-sm mt-1 opacity-90">
                    انرژی مازاد می‌تواند به‌صورت هوای گرم، آب یا بخار تحویل شود و هم‌تولیدی برق امکان‌پذیر است.
                  </p>
                </div>
                <Button
                  content={"بیشتر بخوانید"}
                  fontSize={"text-xs"}
                  padding={"px-4 py-2"}
                  furtherClasses={"bg-green-600 hover:bg-green-500 shrink-0"}
                />
              </motion.div>

              <motion.div
                variants={animationVariants.fadeRight}
                className="bg-green-900 text-white rounded-3xl p-6 flex items-center gap-4"
                style={{ direction: "rtl" }}
              >
                <span className="w-12 h-12 rounded-full border-2 border-green-300 flex items-center justify-center shrink-0">
                  <img src="/placeholders/biochar.svg" alt="biochar" className="w-7 h-7 opacity-80" />
                </span>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold">بیوچار، بیوکربن و کربن فعال</h3>
                  <p className="text-sm mt-1 opacity-90">
                    پیرولیز طیفی از محصولات ارزشمند و مثبت برای اقلیم تولید می‌کند.
                  </p>
                </div>
                <Button
                  content={"بیشتر بخوانید"}
                  fontSize={"text-xs"}
                  padding={"px-4 py-2"}
                  furtherClasses={"bg-green-600 hover:bg-green-500 shrink-0"}
                />
              </motion.div>

              <motion.div
                variants={animationVariants.fadeRight}
                className="bg-green-900 text-white rounded-3xl p-6 flex items-center gap-4"
                style={{ direction: "rtl" }}
              >
                <span className="w-12 h-12 rounded-full border-2 border-green-300 flex items-center justify-center shrink-0">
                  <img src="/placeholders/carbon-cgreenits.svg" alt="carbon-cgreenits" className="w-7 h-7 opacity-80" />
                </span>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold">اعتبارات کربنی</h3>
                  <p className="text-sm mt-1 opacity-90">
                    اعتبارات حذف کربن قابل فروش هستند یا می‌توانند برای کاهش انتشار خودتان بازنشسته شوند.
                  </p>
                </div>
                <Button
                  content={"بیشتر بخوانید"}
                  fontSize={"text-xs"}
                  padding={"px-4 py-2"}
                  furtherClasses={"bg-green-600 hover:bg-green-500 shrink-0"}
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
        {/* green process section end */}


        <div style={{ maxWidth: 1200 }} className="p-10 max-md:px-5 mx-auto">
          <motion.h2
            initial="initial"
            whileInView="animate"
            variants={animationVariants.fadeIn}
            viewport={{ once: true, amount: 0.2 }}
            className="text-5xl max-md:text-4xl font-semibold text-center"
          >
            مقالات
          </motion.h2>
          <div className="flex flex-col gap-5 mt-10 max-sm:mt-8">
            <div className=" flex gap-5 max-lg:flex-col">
              {articles[0] && (
                <div className="w-2/4 max-lg:w-full">
                  <ExculusivePropertyCard
                    imgSrc={articles[0].image}
                    titlePart1={""}
                    titlePart2={articles[0].name}
                    pricing={articles[0].description}
                    type={"مقاله"}
                    href={articles[0].id}
                    detailPath={`/articles-page/${articles[0].id}`}
                    typePath={`/articles`}
                  />
                </div>
              )}
              {articles[1] && (
                <div className="w-2/4 max-lg:w-full">
                  <ExculusivePropertyCard
                    imgSrc={articles[1].image}
                    titlePart1={""}
                    titlePart2={articles[1].name}
                    pricing={articles[1].description}
                    type={"مقاله"}
                    href={articles[1].id}
                    detailPath={`/articles-page/${articles[1].id}`}
                    typePath={`/articles`}
                  />
                </div>
              )}
            </div>
          </div>
          <motion.h2
            initial="initial"
            whileInView="animate"
            variants={animationVariants.fadeIn}
            viewport={{ once: true, amount: 0.2 }}
            className="text-5xl max-md:text-4xl font-semibold text-center mt-16"
          >
            گزارش‌ها
          </motion.h2>
          <div className="flex flex-col gap-5 mt-10 max-sm:mt-8">
            <div className="flex gap-5 max-lg:flex-col">
              {reports.slice(0, 2).map((item, index) => (
                <div key={item.id || index} className="w-2/4 max-lg:w-full">
                  <ExculusivePropertyCard
                    imgSrc={item.image}
                    titlePart1={""}
                    titlePart2={item.name}
                    pricing={item.description}
                    type={"گزارش"}
                    href={item.id}
                    detailPath={`/reports-page/${item.id}`}
                    typePath={`/reports`}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* what we do section end */}

      {/* appreciation section start */}
      {/* <div className="bg-white" style={{fontFamily:"Estedad"}}>
        <div
          style={{ maxWidth: 1200 }}
          className="p-10 max-md:px-5 py-28 mx-auto grid grid-cols-2 grid-rows-1 gap-20 max-lg:grid-cols-1 max-lg:grid-rows-2 "
        >
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ staggerChildren: 0.1 }}
            className="w-full max-lg:w-full flex flex-col  items-start max-lg:items-center max-lg:text-center gap-7"
          >
            <motion.h1
              variants={animationVariants.fadeLeft}
              className="text-5xl max-md:text-4xl font-semibold"
            >
              تیتر
            </motion.h1>
            <motion.p
              variants={animationVariants.fadeLeft}
              className="text-2xl"
            >
              توضیحات
            </motion.p>
            <motion.div
              variants={animationVariants.fadeLeft}
              className="grid grid-cols-2 grid-rows-2 gap-10"
            >
              <div className="flex flex-col max-lg:justify-center max-lg:items-center">
                <h2 className="title-font text-green-500 text-5xl max-md:text-4xl font-semibold">
                  80
                </h2>
                <p className="text-xl">
                  سال تجربه
                </p>
              </div>
              <div className="flex flex-col max-lg:justify-center max-lg:items-center">
                <h2 className="title-font text-green-500 text-5xl max-md:text-4xl font-semibold">
                  50
                </h2>
                <p className="text-xl">
                  میلیون تن در سال
                </p>
              </div>
              <div className="flex flex-col max-lg:justify-center max-lg:items-center">
                <h2 className="title-font text-green-500 text-5xl max-md:text-4xl font-semibold">
                  12
                </h2>
                <p className="text-xl">
                  کارمند حرفه‌ای
                </p>
              </div>
              <div className="flex flex-col max-lg:justify-center max-lg:items-center">
                <h2 className="title-font text-green-500 text-5xl max-md:text-4xl font-semibold">
                  8
                </h2>
                <p className="text-xl">
                  میلیارد دلار درآمد سالیانه
                </p>
              </div>
            </motion.div>
            <motion.div variants={animationVariants.fadeLeft}>
              <Link onClick={scrollToTop} to={"/contact"}>
                <Button
                  content={"Get In Touch"}
                  padding={"px-6 py-3"}
                  fontSize={"text-xl"}
                />
              </Link>
            </motion.div>
          </motion.div>
          <div className="w-full max-lg:w-full h-full max-sm:max-h-[500px] ">
            <div className=" h-full w-full relative overflow-hidden rounded-lg">
              <img
                src="/appriciation-section-image.jpg"
                className="absolute w-full h-full object-cover object-center "
                alt=""
              />
              <div className="absolute w-full h-full bg-black/50 "></div>

              <motion.div
                initial="initial"
                whileInView="animate"
                variants={animationVariants.toLeft}
                viewport={{ once: true, amount: 0.2 }}
                className="absolute w-full h-full bg-white origin-left z-20 "
              >
                <div className=""></div>
              </motion.div>
            </div>
          </div>
        </div>
        <div
          style={{ maxWidth: 1200 }}
          className="mx-auto destination-section p-10 max-md:px-5  pb-28"
        >
          <motion.h1
            initial="initial"
            whileInView="animate"
            variants={animationVariants.fadeIn}
            viewport={{ once: true, amount: 0.2 }}
            className="text-5xl max-md:text-4xl font-semibold text-center  px-2"
          >
            Destinations We Love The Most
          </motion.h1>
          <div className="grid grid-cols-4 grid-rows-1 max-lg:grid-cols-2 max-lg:grid-rows-2 max-sm:grid-cols-1 max-sm:grid-rows-4 gap-4 relative mt-10 max-sm:mt-8">
            <img
              src="/cards-corner.png"
              className="absolute -left-10 -bottom-10 max-xl:hidden"
              alt=""
            />
            {showCase.map((e, i) => {
              if (e.id != 5 && e.id != 6) {
                return (
                  <ProjectCard
                    key={i}
                    src={e.coverImage}
                    title={e.city}
                    href={e.id}
                  />
                );
              }
            })}
          </div>
        </div>
      </div> */}
      {/* appreciation section end */}
      {/* review section start */}
      {/* <div className="bg-gray-100">
        <div
          style={{ maxWidth: 1200 }}
          className=" mx-auto flex max-md:flex-col justify-center items-center gap-16 p-10 max-md:px-5 py-28 "
        >
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ staggerChildren: 0.1 }}
            className="w-2/4 max-md:w-full max-md:px-3 items-center flex flex-col gap-5"
          >
            <motion.div
              className="w-full ml-6"
              variants={animationVariants.zoomIn}
            >
              <ReviewCard
                imgSrc={"/reviews/jane-cooper.jpg"}
                title={"Jane Cooper"}
                from={"Real Estate"}
              />
            </motion.div>
            <motion.div
              className="w-full mr-6"
              variants={animationVariants.zoomIn}
            >
              <ReviewCard
                imgSrc={"/reviews/robert-fox.jpg"}
                title={"Robert Fox"}
                from={"Creative Director"}
              />
            </motion.div>
            <motion.div
              className="w-full ml-6"
              variants={animationVariants.zoomIn}
            >
              <ReviewCard
                imgSrc={"/reviews/marvin-mckinney.jpg"}
                title={"Marvin Mckinney"}
                from={"CEO of Bimetrix"}
              />
            </motion.div>
          </motion.div>
          <motion.div
            initial="initial"
            whileInView="animate"
            variants={animationVariants.fadeRight}
            viewport={{ once: true, amount: 0.2 }}
            className="w-2/4 max-md:w-full max-md:text-center flex flex-col gap-8"
          >
            <h1 className="text-5xl max-md:text-4xl font-semibold">
              Why do people love homyz
            </h1>
            <div>
              <Carousel />
            </div>
          </motion.div>
        </div>
      </div> */}
      {/* review section end */}
      {/* partner brand section start */}
      {/* <div className="bg-gray-100 border-t-2 border-black/30  border-dashed">
        <div
          style={{ maxWidth: 1200 }}
          className=" mx-auto flex max-md:flex-col justify-center items-center gap-10 p-10 max-md:px-5  "
        >
          <motion.div
            initial="initial"
            whileInView="animate"
            variants={animationVariants.fadeIn}
            viewport={{ once: true, amount: 0.1 }}
            className="flex gap-8 flex-wrap justify-center items-center"
          >
            {partnerBrands.map((e, i) => {
              return (
                <PartnerBrandCard
                  title={e.title}
                  src={`/partner-brands/${e.src}.png`}
                  alt={e.src}
                  key={i}
                />
              );
            })}
          </motion.div>
        </div>
      </div> */}
      {/* partner brand section end */}
    </div>
  );
};

export default HomePage;
