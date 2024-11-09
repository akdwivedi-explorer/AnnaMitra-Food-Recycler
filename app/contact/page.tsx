"use client";
import React from "react";
import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import { Manrope, Playfair } from "next/font/google";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";

const playfair = Playfair({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const Contact = () => {
  return (
    <div>
      <Header />
      <div className="container mx-auto">
        <h1
          className={`${playfair.className} text-6xl font-semibold text-center text-black pt-12`}
        >
          Contact us
        </h1>
        <p className="text-center text-black mt-2">
          Do you have any questions? Don&apos;t hesitate to contact us
        </p>

        <div className={`${playfair.className} grid grid-cols-1 md:grid-cols-2 gap-8 mt-12`}>
          {/* Contact Info Section */}
          <div className="space-y-6">
            <h2 className={`${playfair.className} text-4xl`}>Get in Touch</h2>

            {/* Address Section */}
            <div className="text-gray-700">
              <div className="flex items-center text-light-blue">
                <FaMapMarkerAlt className="mr-2" size={20} />
                <h3 className={`${manrope.className} text-l font-medium`}>
                  Address
                </h3>
              </div>
              <p className={`${manrope.className} ml-8 text-gray-800 mt-2`}>
                Anna Mitra, Bhopal
              </p>
            </div>

            {/* Email Section */}
            <div className="text-gray-700">
              <div className="flex items-center text-black">
                <FaEnvelope className="mr-2" size={20} />
                <h3 className={`${manrope.className} text-l font-medium`}>
                  Email
                </h3>
              </div>
              <p className={`${manrope.className} ml-8 text-gray-800 mt-2`}>
                contactiet@annamitra.org
              </p>
            </div>

            {/* Phone Section */}
            <div className="text-gray-700">
              <div className="flex items-center text-black">
                <FaPhoneAlt className="mr-2" size={20} />
                <h3 className={`${manrope.className} text-l font-medium`}>
                  Call Us
                </h3>
              </div>
              <p className={`${manrope.className} ml-8 text-gray-800 mt-2`}>
                0731-2352678
              </p>
            </div>
          </div>

          {/* Send Message Section */}
          <div className="space-y-6 pb-12">
            <h2 className={`${playfair.className} text-4xl`}>
              Send us a message
            </h2>
            <form className="space-y-4">
              <div>
                <input
                  type="text"
                  placeholder="Full Name"
                  className="w-full border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-sky-600"
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-sky-600"
                />
              </div>
              <div>
                <textarea
                  placeholder="Type your message here"
                  rows={13}
                  className="w-full border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-sky-600"
                ></textarea>
              </div>
              <div>
                <button
                  type="submit"
                  className="bg-black text-white w-full text-xl px-4 py-3 rounded-md hover:bg-sky-700"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
