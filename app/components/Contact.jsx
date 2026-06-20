"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiSend, FiCheckCircle } from "react-icons/fi";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate submission delay
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormData({ name: "", email: "", message: "" });

      // Reset success state after a few seconds
      setTimeout(() => setIsSuccess(false), 5000);
    }, 1500);
  };

  return (
    <section id="contacts" className="w-full px-[8%] py-24 scroll-mt-20 relative">
      {/* Background glow node */}
      <div className="absolute right-1/4 top-1/3 w-80 h-80 rounded-full bg-emerald-500/5 blur-3xl pointer-events-none" />

      {/* Heading */}
      <div className="text-center mb-16 relative z-10">
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-xs uppercase tracking-[0.2em] text-[#00f5a0] mb-2 font-mono"
        >
          Get in Touch
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-4xl md:text-5xl font-semibold text-white tracking-tight"
        >
          Contact Me
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-sm text-[#c5c6c7]/60 max-w-md mx-auto mt-4"
        >
          Have a question or want to work together? Drop a message below.
        </motion.p>
      </div>

      {/* Form Container */}
      <div className="max-w-2xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="glass-panel rounded-2xl p-8 md:p-10 border border-emerald-500/20"
        >
          <AnimatePresence mode="wait">
            {!isSuccess ? (
              <motion.form
                key="contact-form"
                onSubmit={handleSubmit}
                className="space-y-6"
                initial={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                {/* Name */}
                <div>
                  <label htmlFor="name" className="block text-xs uppercase tracking-wider text-[#c5c6c7] mb-2 font-mono">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-[#161920]/60 border border-[#1f2833] focus:border-[#00f5a0] focus:shadow-lg focus:shadow-emerald-500/5 focus:-translate-y-0.5 rounded-lg px-4 py-3 text-white text-sm outline-none transition-all duration-300"
                    placeholder="Enter your name"
                  />
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-xs uppercase tracking-wider text-[#c5c6c7] mb-2 font-mono">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-[#161920]/60 border border-[#1f2833] focus:border-[#00f5a0] focus:shadow-lg focus:shadow-emerald-500/5 focus:-translate-y-0.5 rounded-lg px-4 py-3 text-white text-sm outline-none transition-all duration-300"
                    placeholder="Enter your email address"
                  />
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-xs uppercase tracking-wider text-[#c5c6c7] mb-2 font-mono">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full bg-[#161920]/60 border border-[#1f2833] focus:border-[#00f5a0] focus:shadow-lg focus:shadow-emerald-500/5 focus:-translate-y-0.5 rounded-lg px-4 py-3 text-white text-sm outline-none transition-all duration-300 resize-none"
                    placeholder="Type your message here..."
                  />
                </div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-3.5 px-6 rounded-lg bg-[#00f5a0] hover:bg-[#00d9f5] text-[#0b0c10] font-semibold text-sm transition duration-300 flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-emerald-500/10 disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <span className="w-5 h-5 border-2 border-[#0b0c10] border-t-transparent rounded-full animate-spin" />
                  ) : (
                    <>
                      Send Message <FiSend className="text-base" />
                    </>
                  )}
                </motion.button>
              </motion.form>
            ) : (
              <motion.div
                key="success-message"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                className="text-center py-12 space-y-4"
              >
                <div className="flex justify-center text-5xl text-[#00f5a0]">
                  <FiCheckCircle className="animate-bounce" />
                </div>
                <h3 className="text-xl font-semibold text-white">Message Sent Successfully!</h3>
                <p className="text-sm text-[#c5c6c7]/70 max-w-sm mx-auto">
                  Thank you for reaching out. I have received your message and will get back to you shortly.
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
