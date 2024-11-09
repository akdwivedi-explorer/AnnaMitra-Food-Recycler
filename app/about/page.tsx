"use client";
import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Spotlight } from "../../components/ui/Spotlight";
import { LampContainer } from "../../components/ui/lamp";
import Header from "../../components/header/Header";

const About = () => {
  return (
    <div>
      <Header />
      <div className="h-[40rem] w-full rounded-md flex md:items-center md:justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
        <Spotlight
          className="-top-40 left-0 md:left-60 md:-top-20"
          fill="white"
        />
        <div className=" p-4 max-w-7xl  mx-auto relative z-10  w-full pt-20 md:pt-0">
          <h1 className="text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
            WHO <br /> WE ARE.
          </h1>
          <p className="mt-4 font-normal text-base text-neutral-300 max-w-lg text-center mx-auto">
            Welcome to Anna Mitra, where innovation meets sustainability in the
            fight against food waste. Born from a commitment to redefine the
            hospitality industry, Anna Mitra is dedicated to empowering hotels
            and hostels to reduce food waste, optimize resources, and embrace
            eco-friendly practices. Our platform provides a comprehensive,
            AI-driven approach to managing food resources with precision and
            purpose, helping partners contribute to a greener planet without
            compromising quality or guest experience.
          </p>
        </div>
      </div>
      <div className="h-[500px] pt-16">
        <h1 className="text-4xl md:text-7xl font-bold text-center bg-clip-text text-black bg-opacity-50">
          OUR <br /> MISSION
        </h1>
        <p className="mt-4 font-normal text-base max-w-lg text-center mx-auto">
          Food waste is a global issue, and the hospitality industry plays a
          crucial role in addressing it. At Anna Mitra, our mission is to make
          sustainable dining a norm by providing hospitality businesses with the
          tools they need to manage food waste effectively and responsibly. From
          ingredient tracking to real-time inventory insights, every aspect of
          our platform is designed to streamline operations, reduce costs, and
          protect the environment.
        </p>
      </div>
      <LampContainer>
        <motion.h1
          initial={{ opacity: 0.5, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="mt-8 bg-gradient-to-br from-slate-500 to-slate-900 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
        >
          What Makes Us Different
        </motion.h1>
        <p className="font-medium text-base text-white pt-12 max-w-lg">
          We’re not just a technology provider; we’re partners in
          sustainability. Anna Mitra goes beyond basic food waste management by
          offering unique, actionable insights that empower hotels and hostels
          to make lasting changes.
        </p>
      </LampContainer>

      <div className="h-[500px] pt-16">
        <h1 className="text-4xl md:text-7xl font-bold text-center bg-clip-text text-black bg-opacity-50">
          OUR <br /> IMPACT
        </h1>
        <p className="mt-4 font-normal text-base max-w-lg text-center mx-auto">
        EcoServe’s solutions are designed to make an immediate and measurable impact on food waste reduction. With each partner, we aim to save valuable resources, reduce environmental footprints, and create a positive ripple effect in the community. We believe that by aligning hospitality practices with sustainable goals, we can collectively shape a healthier future
        </p>
      </div>
    </div>
  );
};

export default About;
