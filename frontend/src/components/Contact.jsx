import React, { useState } from "react";
import axios from "axios";
import toast from 'react-hot-toast';
import { FaEnvelope, FaWhatsapp } from "react-icons/fa"; // Import the icons

function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      await axios.post("https://portfolio-main-k24r.onrender.com/send-email", formData);
      toast.success("Your message has been sent!");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("Error sending email:", error);
      toast.error("Failed to send message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 min-h-screen p-6 transition-all duration-300">
      <h1 className="text-4xl font-bold text-center mb-10">
        Get in <span className="text-pink-700">Touch</span>
      </h1>

      {/* Contact Form */}
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Email Section */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold mb-4 text-pink-700 dark:text-pink-400">
            <FaEnvelope className="inline mr-2 text-lg" />
            Send an Email
          </h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="name" className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full p-2 rounded-lg border dark:border-gray-700 dark:bg-gray-700 focus:ring-pink-500 focus:border-pink-500"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
                Your Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full p-2 rounded-lg border dark:border-gray-700 dark:bg-gray-700 focus:ring-pink-500 focus:border-pink-500"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full p-2 rounded-lg border dark:border-gray-700 dark:bg-gray-700 focus:ring-pink-500 focus:border-pink-500"
              ></textarea>
            </div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="bg-pink-700 text-white py-2 px-6 rounded-lg hover:bg-pink-800 transition duration-300"
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>

        {/* WhatsApp Section */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg flex flex-col items-center justify-center text-center">
          <h2 className="text-2xl font-bold mb-4 text-pink-700 dark:text-pink-400">
            <FaWhatsapp className="inline mr-2 text-lg" />
            Contact via WhatsApp
          </h2>
          <p className="mb-6 text-gray-700 dark:text-gray-300">
            Reach out to me on WhatsApp for instant replies.
          </p>
          <a
            href="https://wa.me/9732760714" // Replace with your WhatsApp number
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-green-500 text-white py-2 px-6 rounded-lg hover:bg-green-600 transition duration-300"
          >
            <span className="material-icons mr-2">whatsapp</span>
            Chat on WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}

export default Contact;
