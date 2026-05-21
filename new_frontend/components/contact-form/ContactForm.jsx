import React, { useState } from "react";
import axios from "axios";
import { useToast } from "@chakra-ui/react";
import { FaPaperPlane, FaSpinner } from "react-icons/fa";
import API_URL from "../../src/config/api";

const INITIAL_FORM = {
  firstName: "",
  lastName: "",
  phoneNo: "",
  email: "",
  message: "",
};

const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

const ContactForm = ({ variant = "footer" }) => {
  const toast = useToast();
  const [formData, setFormData] = useState(INITIAL_FORM);
  const [loading, setLoading] = useState(false);
  const [focusedField, setFocusedField] = useState(null);

  const isPage = variant === "page";

  const showToast = (title, status) => {
    toast({
      title,
      status,
      duration: 3000,
      isClosable: true,
      position: "top",
      containerStyle: { zIndex: 9999 },
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validate = () => {
    const { firstName, lastName, email, phoneNo, message } = formData;
    if (!firstName?.trim()) {
      showToast("لطفاً نام خود را وارد کنید", "error");
      return false;
    }
    if (!lastName?.trim()) {
      showToast("لطفاً نام خانوادگی خود را وارد کنید", "error");
      return false;
    }
    if (!email?.trim()) {
      showToast("لطفاً ایمیل خود را وارد کنید", "error");
      return false;
    }
    if (!isValidEmail(email.trim())) {
      showToast("لطفاً یک ایمیل معتبر وارد کنید", "error");
      return false;
    }
    if (!phoneNo?.trim()) {
      showToast("لطفاً شماره تماس خود را وارد کنید", "error");
      return false;
    }
    if (!message?.trim()) {
      showToast("لطفاً پیام خود را بنویسید", "error");
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setLoading(true);
    try {
      await axios.post(
        `${API_URL}/contact/messages/`,
        {
          first_name: formData.firstName.trim(),
          last_name: formData.lastName.trim(),
          email: formData.email.trim(),
          phone: formData.phoneNo.trim(),
          message: formData.message.trim(),
        },
        { headers: { Accept: "application/json", "Content-Type": "application/json" } }
      );
      showToast("پیام شما با موفقیت ثبت شد. به زودی با شما تماس می‌گیریم.", "success");
      setFormData(INITIAL_FORM);
    } catch (err) {
      const detail =
        err.response?.data?.detail ||
        Object.values(err.response?.data || {})
          .flat()
          .join(" ") ||
        "خطا در ارسال پیام. لطفاً دوباره تلاش کنید.";
      showToast(detail, "error");
    } finally {
      setLoading(false);
    }
  };

  const inputClass = (name) =>
    `w-full bg-transparent border rounded-lg px-4 py-3 text-white placeholder:text-neutral-500 outline-none transition-all duration-300 ${
      focusedField === name
        ? "border-green-500 shadow-[0_0_0_3px_rgba(239,68,68,0.15)]"
        : "border-neutral-700 hover:border-neutral-500"
    }`;

  const labelClass = "block text-sm font-medium text-neutral-300 mb-2";

  return (
    <form onSubmit={handleSubmit} className="w-full" dir="rtl" noValidate>
      {isPage && (
        <div className="mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
            پیام خود را برای ما بفرستید
          </h2>
          <p className="text-neutral-400 text-sm md:text-base">
            فرم زیر را پر کنید؛ تیم ما در اسرع وقت پاسخگوی شما خواهد بود.
          </p>
        </div>
      )}

      {!isPage && (
        <h3 className="text-xl font-semibold text-white mb-6">ارسال پیام</h3>
      )}

      <div
        className={`grid gap-4 ${
          isPage ? "grid-cols-1 md:grid-cols-2" : "grid-cols-1 sm:grid-cols-2"
        }`}
      >
        <div>
          <label htmlFor={`firstName-${variant}`} className={labelClass}>
            نام
          </label>
          <input
            id={`firstName-${variant}`}
            name="firstName"
            type="text"
            value={formData.firstName}
            onChange={handleChange}
            onFocus={() => setFocusedField("firstName")}
            onBlur={() => setFocusedField(null)}
            placeholder="نام"
            className={inputClass("firstName")}
            autoComplete="given-name"
          />
        </div>
        <div>
          <label htmlFor={`lastName-${variant}`} className={labelClass}>
            نام خانوادگی
          </label>
          <input
            id={`lastName-${variant}`}
            name="lastName"
            type="text"
            value={formData.lastName}
            onChange={handleChange}
            onFocus={() => setFocusedField("lastName")}
            onBlur={() => setFocusedField(null)}
            placeholder="نام خانوادگی"
            className={inputClass("lastName")}
            autoComplete="family-name"
          />
        </div>
        <div>
          <label htmlFor={`email-${variant}`} className={labelClass}>
            ایمیل
          </label>
          <input
            id={`email-${variant}`}
            name="email"
            type="email"
            dir="ltr"
            value={formData.email}
            onChange={handleChange}
            onFocus={() => setFocusedField("email")}
            onBlur={() => setFocusedField(null)}
            placeholder="example@email.com"
            className={`${inputClass("email")} text-left`}
            autoComplete="email"
          />
        </div>
        <div>
          <label htmlFor={`phoneNo-${variant}`} className={labelClass}>
            شماره تماس
          </label>
          <input
            id={`phoneNo-${variant}`}
            name="phoneNo"
            type="tel"
            dir="ltr"
            value={formData.phoneNo}
            onChange={handleChange}
            onFocus={() => setFocusedField("phoneNo")}
            onBlur={() => setFocusedField(null)}
            placeholder="09xx xxx xxxx"
            className={`${inputClass("phoneNo")} text-left`}
            autoComplete="tel"
          />
        </div>
      </div>

      <div className={`mt-4 ${isPage ? "mt-6" : ""}`}>
        <label htmlFor={`message-${variant}`} className={labelClass}>
          پیام
        </label>
        <textarea
          id={`message-${variant}`}
          name="message"
          rows={isPage ? 6 : 4}
          value={formData.message}
          onChange={handleChange}
          onFocus={() => setFocusedField("message")}
          onBlur={() => setFocusedField(null)}
          placeholder="متن پیام خود را اینجا بنویسید..."
          className={`${inputClass("message")} resize-none`}
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        className={`mt-6 w-full flex items-center justify-center gap-3 rounded-lg font-semibold text-white transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed ${
          isPage
            ? "bg-green-600 hover:bg-green-500 py-4 text-lg shadow-lg shadow-green-900/30"
            : "bg-green-600 hover:bg-green-500 py-3"
        }`}
      >
        {loading ? (
          <>
            <FaSpinner className="animate-spin" />
            در حال ارسال...
          </>
        ) : (
          <>
            <FaPaperPlane />
            ارسال پیام
          </>
        )}
      </button>
    </form>
  );
};

export default ContactForm;
