"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  FaBaby, 
  FaChild, 
  FaUserGraduate, 
  FaBook, 
  FaCalculator, 
  FaFlask, 
  FaGlobeAmericas, 
  FaRocket, 
  FaStar, 
  FaGraduationCap,
  FaCalendarAlt,
  FaSchool,
  FaUsers,
  FaArrowRight,
  FaBirthdayCake,
  FaCheckCircle,
  FaExclamationTriangle,
  FaTimes
} from "react-icons/fa";
import { 
  GiSchoolBag, 
  GiPencil, 
  GiAtomicSlashes 
} from "react-icons/gi";
import HeaderComponent from "../../sections/HeaderComponent";

const ageData = [
  { id: 1, cls: "PRE-NURSERY", minAge: 3, maxAge: 4, age: "3 – 4 years", icon: <FaBaby className="text-pink-500" />, color: "from-pink-50 to-pink-100", accent: "pink" },
  { id: 2, cls: "NURSERY", minAge: 4, maxAge: 5, age: "4 – 5 years", icon: <GiSchoolBag className="text-purple-500" />, color: "from-purple-50 to-purple-100", accent: "purple" },
  { id: 3, cls: "KG", minAge: 5, maxAge: 6, age: "5 – 6 years", icon: <FaBook className="text-blue-500" />, color: "from-blue-50 to-blue-100", accent: "blue" },
  { id: 4, cls: "CLASS I", minAge: 6, maxAge: 7, age: "6 – 7 years", icon: <FaCalculator className="text-green-500" />, color: "from-green-50 to-green-100", accent: "green" },
  { id: 5, cls: "CLASS II", minAge: 7, maxAge: 8, age: "7 – 8 years", icon: <GiPencil className="text-amber-500" />, color: "from-amber-50 to-amber-100", accent: "amber" },
  { id: 6, cls: "CLASS III", minAge: 8, maxAge: 9, age: "8 – 9 years", icon: <FaFlask className="text-red-500" />, color: "from-red-50 to-red-100", accent: "red" },
  { id: 7, cls: "CLASS IV", minAge: 9, maxAge: 10, age: "9 – 10 years", icon: <FaGlobeAmericas className="text-teal-500" />, color: "from-teal-50 to-teal-100", accent: "teal" },
  { id: 8, cls: "CLASS V", minAge: 10, maxAge: 11, age: "10 – 11 years", icon: <FaRocket className="text-indigo-500" />, color: "from-indigo-50 to-indigo-100", accent: "indigo" },
  { id: 9, cls: "CLASS VI", minAge: 11, maxAge: 12, age: "11 – 12 years", icon: <GiAtomicSlashes className="text-cyan-500" />, color: "from-cyan-50 to-cyan-100", accent: "cyan" },
  { id: 10, cls: "CLASS VII", minAge: 12, maxAge: 13, age: "12 – 13 years", icon: <FaStar className="text-yellow-500" />, color: "from-yellow-50 to-yellow-100", accent: "yellow" },
  { id: 11, cls: "CLASS VIII", minAge: 13, maxAge: 14, age: "13 – 14 years", icon: <FaUserGraduate className="text-gray-600" />, color: "from-gray-50 to-gray-100", accent: "gray" },
  { id: 12, cls: "CLASS IX", minAge: 14, maxAge: 15, age: "14 – 15 years", icon: <FaGraduationCap className="text-blue-600" />, color: "from-blue-50 to-blue-100", accent: "blue" },
];

const AboutAgeCriteria = () => {
  const [showAgeCalculator, setShowAgeCalculator] = useState(false);
  const [birthDate, setBirthDate] = useState("");
  const [calculatedAge, setCalculatedAge] = useState(null);
  const [eligibleClass, setEligibleClass] = useState(null);
  const [showResult, setShowResult] = useState(false);

  const calculateAge = () => {
    if (!birthDate) return;

    const today = new Date();
    const birth = new Date(birthDate);
    
    // Calculate age as of March 31st, 2026
    const cutoffDate = new Date(2026, 2, 31); // March 31, 2026
    
    let age = cutoffDate.getFullYear() - birth.getFullYear();
    const monthDiff = cutoffDate.getMonth() - birth.getMonth();
    
    if (monthDiff < 0 || (monthDiff === 0 && cutoffDate.getDate() < birth.getDate())) {
      age--;
    }

    setCalculatedAge(age);
    
    // Find eligible class
    const eligible = ageData.find(item => age >= item.minAge && age <= item.maxAge);
    setEligibleClass(eligible || null);
    setShowResult(true);
  };

  const resetCalculator = () => {
    setBirthDate("");
    setCalculatedAge(null);
    setEligibleClass(null);
    setShowResult(false);
  };

  const openAgeCalculator = () => {
    setShowAgeCalculator(true);
    resetCalculator();
  };

  const closeAgeCalculator = () => {
    setShowAgeCalculator(false);
    resetCalculator();
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.9 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: { 
        type: "spring", 
        stiffness: 100,
        damping: 15
      }
    }
  };

  const modalVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { 
        type: "spring", 
        stiffness: 300,
        damping: 30
      }
    },
    exit: { 
      opacity: 0, 
      scale: 0.8,
      transition: { 
        duration: 0.2 
      }
    }
  };

  return (
    <>
      <HeaderComponent title="Age Criteria" />

      {/* White Theme Design */}
      <section className="min-h-screen bg-linear-to-br -translate-y-28 from-white to-gray-50  pt-5 relative overflow-hidden">
        {/* Subtle Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 right-0 w-72 h-72 bg-blue-50 rounded-full blur-3xl opacity-50"></div>
          <div className="absolute bottom-0 left-0 w-72 h-72 bg-purple-50 rounded-full blur-3xl opacity-50"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Clean Header */}
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.3, type: "spring" }}
              className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-blue-50 rounded-full border border-blue-100"
            >
              <FaCalendarAlt className="text-blue-600 text-sm" />
              <span className="text-blue-600 font-medium text-sm">Academic Year 2026-2027</span>
            </motion.div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Age <span className="bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Criteria</span>
            </h1>
            
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Find the perfect class for your child based on age-appropriate learning stages
            </p>

            {/* Age Calculator Button */}
            <motion.button
              onClick={openAgeCalculator}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-8 px-8 py-4 bg-linear-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center gap-3 mx-auto"
            >
              <FaBirthdayCake className="text-lg" />
              Check Age Eligibility
              <FaArrowRight className="text-sm" />
            </motion.button>

            {/* Decorative Dots */}
            <div className="flex justify-center gap-2 mt-6">
              {[1, 2, 3].map((item) => (
                <motion.div
                  key={item}
                  animate={{ 
                    y: [0, -5, 0],
                  }}
                  transition={{ 
                    duration: 2, 
                    repeat: Infinity, 
                    delay: item * 0.3 
                  }}
                  className="w-1.5 h-1.5 bg-blue-300 rounded-full"
                />
              ))}
            </div>
          </motion.div>

          {/* Age Criteria Cards - Clean White Design */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 mb-16"
          >
            {ageData.map((item) => (
              <motion.div
                key={item.id}
                variants={cardVariants}
                whileHover={{ 
                  y: -5, 
                  scale: 1.02,
                  transition: { type: "spring", stiffness: 300 }
                }}
                className={`group relative bg-white rounded-2xl border border-gray-100 hover:border-${item.accent}-200 overflow-hidden cursor-pointer transition-all duration-300 shadow-sm hover:shadow-lg ${
                  eligibleClass?.id === item.id ? `ring-2 ring-${item.accent}-500 ring-opacity-50` : ''
                }`}
              >
                {/* Gradient Background on Hover */}
                <div className={`absolute inset-0 bg-linear-to-br ${item.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                
                <div className="relative p-5 z-10">
                  {/* Icon */}
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className={`w-12 h-12 mb-3 bg-${item.accent}-50 rounded-xl flex items-center justify-center group-hover:bg-${item.accent}-100 transition-colors duration-300 border border-${item.accent}-100`}
                  >
                    <div className="text-lg">
                      {item.icon}
                    </div>
                  </motion.div>
                  
                  {/* Class Name */}
                  <h3 className="text-lg font-semibold text-gray-800 mb-1 group-hover:text-gray-900 transition-colors duration-300">
                    {item.cls}
                  </h3>
                  
                  {/* Age */}
                  <p className={`text-base font-medium text-${item.accent}-600`}>
                    {item.age}
                  </p>
                  
                  {/* Progress Line */}
                  <div className="flex items-center gap-2 mt-3">
                    <div className="flex-1 h-1 bg-gray-100 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: "0%" }}
                        whileInView={{ width: `${(item.id / ageData.length) * 100}%` }}
                        transition={{ duration: 1, delay: item.id * 0.1 }}
                        className={`h-full bg-${item.accent}-500 rounded-full`}
                      />
                    </div>
                    <FaArrowRight className={`text-${item.accent}-500 text-xs opacity-0 group-hover:opacity-100 transform -translate-x-2 group-hover:translate-x-0 transition-all duration-300`} />
                  </div>
                </div>

                {/* Subtle Hover Effect */}
                <div className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 w-2/3 h-0.5 bg-${item.accent}-200 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
              </motion.div>
            ))}
          </motion.div>

          {/* Additional Info */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="mt-8 text-center"
          >
            <p className="text-sm text-gray-500">
              For detailed admission procedures and documentation, please visit our admissions office.
            </p>
          </motion.div>
        </div>

        {/* Age Calculator Modal */}
        <AnimatePresence>
          {showAgeCalculator && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0  bg-black/60 bg-opacity-50 flex  p-4 z-50"
              onClick={closeAgeCalculator}
            >
              <motion.div
                variants={modalVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="bg-white rounded-2xl p-6 w-full h-fit max-w-md mx-auto shadow-2xl"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Modal Header */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-blue-50 rounded-lg">
                      <FaBirthdayCake className="text-blue-600 text-xl" />
                    </div>
                    <h2 className="text-xl font-bold text-gray-900">Age Calculator</h2>
                  </div>
                  <button
                    onClick={closeAgeCalculator}
                    className="p-2 hover:bg-gray-100 rounded-lg transition-colors duration-200"
                  >
                    <FaTimes className="text-gray-500 text-lg" />
                  </button>
                </div>

                {/* Calculator Content */}
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Child's Date of Birth *
                    </label>
                    <input
                      type="date"
                      value={birthDate}
                      onChange={(e) => setBirthDate(e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300"
                      max="2026-03-31"
                    />
                    <p className="text-xs text-gray-500 mt-2">
                      Age will be calculated as of March 31st, 2026
                    </p>
                  </div>

                  <button
                    onClick={calculateAge}
                    disabled={!birthDate}
                    className="w-full px-6 py-3 bg-linear-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-purple-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 shadow-sm hover:shadow-md flex items-center justify-center gap-2"
                  >
                    <FaCalculator className="text-sm" />
                    Calculate Eligibility
                  </button>

                  {/* Results Section */}
                  {showResult && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      className="mt-4 p-4 rounded-xl border-2 bg-linear-to-r from-blue-50 to-purple-50 border-blue-200"
                    >
                      <div className="text-center">
                        {eligibleClass ? (
                          <>
                            <div className="inline-flex items-center gap-2 mb-3">
                              <FaCheckCircle className="text-green-500 text-lg" />
                              <h3 className="text-lg font-bold text-gray-900">Eligible!</h3>
                            </div>
                            
                            <div className="bg-white rounded-lg p-3 shadow-sm mb-3">
                              <p className="text-gray-600 text-sm mb-1">Age as of March 31st, 2026:</p>
                              <p className="text-2xl font-bold text-blue-600">{calculatedAge} years</p>
                            </div>

                            <div className="bg-white rounded-lg p-4 shadow-sm border-2 border-green-200">
                              <h4 className="font-semibold text-gray-900 mb-2">Recommended Class:</h4>
                              <div className="flex items-center justify-center gap-3">
                                <div className={`p-2 bg-${eligibleClass.accent}-50 rounded-lg`}>
                                  {eligibleClass.icon}
                                </div>
                                <div>
                                  <p className="text-lg font-bold text-gray-900">{eligibleClass.cls}</p>
                                  <p className="text-gray-600 text-sm">{eligibleClass.age}</p>
                                </div>
                              </div>
                            </div>
                          </>
                        ) : (
                          <>
                            <div className="inline-flex items-center gap-2 mb-3">
                              <FaExclamationTriangle className="text-amber-500 text-lg" />
                              <h3 className="text-lg font-bold text-gray-900">Not Eligible</h3>
                            </div>
                            
                            <div className="bg-white rounded-lg p-3 shadow-sm mb-3">
                              <p className="text-gray-600 text-sm mb-1">Age as of March 31st, 2026:</p>
                              <p className="text-2xl font-bold text-amber-600">{calculatedAge} years</p>
                            </div>

                            <div className="bg-amber-50 rounded-lg p-3 border border-amber-200">
                              <p className="text-amber-800 text-sm font-medium">
                                {calculatedAge < 3 
                                  ? "Minimum age for Pre-Nursery is 3 years."
                                  : "Beyond current age range. Contact admissions office."
                                }
                              </p>
                            </div>
                          </>
                        )}
                      </div>
                    </motion.div>
                  )}

                  {/* Reset Button */}
                  {showResult && (
                    <button
                      onClick={resetCalculator}
                      className="w-full px-6 py-3 border border-gray-300 text-gray-700 font-medium rounded-xl hover:bg-gray-50 transition-all duration-300"
                    >
                      Calculate Again
                    </button>
                  )}
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </section>
    </>
  );
};

export default AboutAgeCriteria;