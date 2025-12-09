"use client";
import React from "react";
import HeaderComponent from "../sections/HeaderComponent";
import { FaCopy, FaUniversity } from "react-icons/fa";
import { notification } from "antd";
import "antd/dist/reset.css"; // Antd reset
import easypaisaLogo from '../../assets/images/easypaisalogo.png';
import jazzCashLogo from '../../assets/images/jazzCashlogo.png';

const Donation = () => {

  const openNotification = (text) => {
    notification.success({
      message: 'Copied!',
      description: `${text} copied to clipboard`,
      placement: 'topRight',
      duration: 2,
    });
  };

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text)
      .then(() => {
        openNotification(text);
      })
      .catch((err) => {
        console.error('Failed to copy: ', err);
      });
  };

  const paymentOptions = [
    {
      icon: <img src={easypaisaLogo} alt="EasyPaisa" className="w-20 h-20 object-contain mb-4" />,
      title: "EasyPaisa",
      details: [
        { label: "Account Number", value: "0300-1234567" },
        { label: "Account Holder", value: "Usman Public School" }
      ]
    },
    {
      icon: <img src={jazzCashLogo} alt="JazzCash" className="w-20 h-20 object-contain mb-4" />,
      title: "JazzCash",
      details: [
        { label: "Account Number", value: "0312-7654321" },
        { label: "Account Holder", value: "Usman Public School" }
      ]
    },
    {
      icon: <FaUniversity className="text-blue-600 text-5xl mb-4" />,
      title: "Bank Transfer",
      details: [
        { label: "Bank", value: "National Bank of Pakistan" },
        { label: "Account Title", value: "Usman Public School" },
        { label: "Account Number", value: "1234567890" },
        { label: "IBAN", value: "PK00NBP12345678901234" }
      ]
    },
  ];

  return (
    <>
      <HeaderComponent title="Donate Now" />

      <section className="section-padding bg-gray-50 pb-10">
        <div className="container-custom">
          <h1 className="text-4xl font-bold text-gray-800 mb-6 text-center">
            Support Our School
          </h1>

          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Your donations help us provide quality education and facilities to our students.
            Choose a payment method below and contribute securely to make a difference.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {paymentOptions.map((option, idx) => (
              <div key={idx} className="bg-white p-8 rounded-3xl shadow-lg border border-gray-200 hover:shadow-2xl transition-all duration-300 flex flex-col items-center text-center">
                
                {/* Icon / Logo */}
                {option.icon}

                <h2 className="text-2xl font-semibold mb-4">{option.title}</h2>

                {/* Payment Details */}
                <div className="space-y-3 w-full">
                  {option.details.map((item, i) => (
                    <div key={i} className="flex justify-between items-center bg-gray-100 p-3 rounded-lg hover:bg-gray-200 transition-colors">
                      <span className="text-gray-700 font-medium">{item.label}</span>
                      <div className="flex items-center gap-2">
                        <span className="text-gray-800 font-semibold">{item.value}</span>
                        <button
                          onClick={() => copyToClipboard(item.value)}
                          className="p-2 rounded-full bg-gray-200 hover:bg-gray-300 transition-colors"
                          title="Copy to clipboard"
                        >
                          <FaCopy className="text-gray-700" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <p className="text-gray-600 text-center mt-12 pt-10">
            Thank you for supporting our mission to provide quality education for every child.
          </p>
        </div>
      </section>
    </>
  );
};

export default Donation;
