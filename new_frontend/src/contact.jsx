import { useEffect } from "react";
import ContactPage from "../components/contact-page-component/contact-page";

const Contact = () => {
  useEffect(() => {
    document.title = "تماس با ما - فوکا";
  }, []);
  return (
    <div className="overflow-hidden">
      <ContactPage />
    </div>
  );
};

export default Contact;
