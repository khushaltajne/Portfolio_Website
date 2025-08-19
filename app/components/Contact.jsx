"use client";

import { assets } from "@/assets/assets";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

function Contact() {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);
    formData.append("access_key", "c8c3591b-e82f-4b99-bf17-cba0f23ea29b");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  // Motion variants for form children (stagger)
  const formVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 0.6, 
        staggerChildren: 0.15 
      } 
    }
  };

  const inputVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section
      id="contacts"
      className="relative w-full px-[8%] py-16 scroll-mt-20 bg-[url(/footer-bg-color.png)] bg-no-repeat bg-center bg-[length:90%_auto]"
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-white/70"></div>

      <motion.div
        className="relative z-10"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
       
      >
        {/* Title */}
        <h4 className="text-center mb-2 text-lg font-medium text-purple-700">
          Connect with Me
        </h4>
        <h2 className="text-center text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Get in Touch
        </h2>

        {/* Description */}
        <p className="text-center max-w-2xl mx-auto text-gray-700 mb-12">
          I'm always open to discussing new projects, creative ideas, or
          opportunities to be part of your vision.  
          Whether you have a question, feedback, or just want to say hi — feel free to reach out!
        </p>

        {/* Animated Form Container */}
        <motion.div
          className="max-w-2xl mx-auto bg-white shadow-lg rounded-2xl p-8 md:p-10 border border-gray-100"
          initial="hidden"
          whileInView="visible"
          variants={formVariants}
         
        >
          <form onSubmit={onSubmit} className="space-y-6">
            {/* Name & Email */}
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
              variants={inputVariants}
            >
              <motion.input
                type="text"
                placeholder="Your Name"
                name="name"
                required
                variants={inputVariants}
                whileFocus={{ scale: 1.02, borderColor: "#8b5cf6" }}
                className="w-full p-4 rounded-lg border border-gray-300 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 outline-none transition-all"
              />
              <motion.input
                type="email"
                placeholder="Your Email"
                name="email"
                required
                variants={inputVariants}
                whileFocus={{ scale: 1.02, borderColor: "#8b5cf6" }}
                className="w-full p-4 rounded-lg border border-gray-300 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 outline-none transition-all"
              />
            </motion.div>

            {/* Message */}
            <motion.textarea
              rows="6"
              placeholder="Your Message"
              name="message"
              required
              variants={inputVariants}
              whileFocus={{ scale: 1.01, borderColor: "#8b5cf6" }}
              className="w-full p-4 rounded-lg border border-gray-300 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 outline-none transition-all resize-none"
            ></motion.textarea>

            {/* Button */}
            <motion.button
              type="submit"
              variants={inputVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="py-3 px-8 w-max flex items-center justify-between gap-2 bg-black/80 text-white rounded-full mx-auto hover:bg-black duration-500"
            >
              Submit Now
              <Image src={assets.right_arrow_white} alt="" className="w-4" />
            </motion.button>

            <p className="mt-4 text-center">{result}</p>
          </form>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default Contact;
