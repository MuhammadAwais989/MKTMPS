"use client";
import React from "react";
import { motion } from "framer-motion";
import { FiPhoneCall } from "react-icons/fi";

const CallToEnroll = () => {
  return (
    <section
      className="relative py-10 text-white overflow-hidden"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1600&q=80')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Dark Blue Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-900/80 via-blue-700/70 to-blue-900/80"></div>

      {/* Soft Glow Effects */}
      <div className="absolute top-20 left-10 w-52 h-52 bg-blue-400/40 blur-[100px] rounded-full opacity-60"></div>
      <div className="absolute bottom-20 right-20 w-60 h-60 bg-cyan-300/40 blur-[120px] rounded-full opacity-70"></div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">

        {/* Glass Card */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="backdrop-blur-2xl bg-white/10 border border-white/20 shadow-2xl rounded-3xl p-12 md:p-16"
        >
          {/* Heading */}
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-wide drop-shadow-lg">
            Call To Enroll Your Child
          </h2>

          {/* Subtitle */}
          <p className="mt-4 text-lg md:text-xl text-white/90 leading-relaxed max-w-3xl mx-auto">
            We are available to hear your queries <br />
            <strong>Monday to Friday 8:00 a.m. – 2:00 p.m.</strong> <br />
            <strong>Saturday 9:00 a.m. – 12:00 p.m.</strong>
          </p>

          {/* Phone Button */}
          <motion.div
            initial={{ scale: 0.85, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="mt-10 flex justify-center"
          >
            <button className="group flex items-center gap-4 bg-white/20 hover:bg-white/30 px-10 py-4 rounded-full shadow-xl border border-white/30 backdrop-blur-xl transition-all">
              <FiPhoneCall className="text-4xl group-hover:scale-110 transition text-white" />
              <span className="text-3xl font-semibold tracking-wide">
                (021) 34525591
              </span>
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CallToEnroll;
