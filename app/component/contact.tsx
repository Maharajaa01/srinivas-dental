import React, { useState, ChangeEvent, FormEvent } from "react";

interface FormData {
  name: string;
  phone: string;
  email: string;
  message: string;
}

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const isFormValid =
    formData.name.trim() !== "" &&
    formData.phone.trim() !== "" &&
    formData.email.trim() !== "" &&
    formData.message.trim() !== "";

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    setSubmitted(true);
    setFormData({ name: "", phone: "", email: "", message: "" });

    setTimeout(() => {
      setSubmitted(false);
    }, 4000);
  };

  return (
    <>
      <form
        action="https://formsubmit.co/drkamalavizhi@gmail.com"
        method="POST"
        target="hidden_iframe"
        onSubmit={handleSubmit}
        className="space-y-4 sm:space-y-6"
      >
        {/* Hidden FormSubmit Settings */}
        <input type="hidden" name="_cc" value="prabhuaakashp@gmail.com,thirumalaivasan.subramanian@gmail.com" />
        <input type="hidden" name="_captcha" value="false" />
        <input type="hidden" name="_template" value="box" />
        <input type="hidden" name="_next" value="about:blank" />

        {/* Input Fields */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 sm:px-6 py-3 sm:py-4 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-600 transition text-sm sm:text-base"
          />
          <input
            type="tel"
            name="phone"
            placeholder="Your Phone Number"
            required
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-4 sm:px-6 py-3 sm:py-4 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-600 transition text-sm sm:text-base"
          />
        </div>

        <input
          type="email"
          name="email"
          placeholder="Your Email Address"
          required
          value={formData.email}
          onChange={handleChange}
          className="w-full px-4 sm:px-6 py-3 sm:py-4 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-600 transition text-sm sm:text-base"
        />

        <textarea
          name="message"
          rows={4}
          placeholder="Tell us about your dental concerns or questions..."
          maxLength={500}
          required
          value={formData.message}
          onChange={handleChange}
          className="w-full px-4 sm:px-6 py-3 sm:py-4 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-600 resize-none transition text-sm sm:text-base"
        ></textarea>

        <button
          type="submit"
          disabled={!isFormValid}
          className={`w-full bg-blue-600 hover:bg-blue-700 text-white py-3 sm:py-4 px-6 rounded-xl font-semibold transition transform hover:scale-105 shadow-lg text-sm sm:text-base ${
            !isFormValid ? "opacity-50 cursor-not-allowed" : ""
          }`}
        >
          <i className="ri-send-plane-line mr-2"></i>
          Send Message
        </button>
      </form>

      {/* Success Popup */}
      {submitted && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white text-black p-6 rounded-xl shadow-xl text-center max-w-sm w-full">
            <p className="text-xl font-semibold mb-2">✅ Submitted Successfully</p>
            <p>Your form has been submitted. We’ll get back to you shortly.</p>
          </div>
        </div>
      )}

      {/* Hidden iframe to prevent reload */}
      <iframe name="hidden_iframe" style={{ display: "none" }}></iframe>
    </>
  );
};

export default ContactForm;
