import { useEffect } from "react";
import ServicesComponent from "../components/services-page-components/services";

const Services = () => {
  useEffect(() => {
    document.title = "خدمات - فوکاتجارت";
  }, []);
  return (
    <div className="overflow-hidden" dir="rtl">
      <ServicesComponent />
    </div>
  );
};

export default Services;
