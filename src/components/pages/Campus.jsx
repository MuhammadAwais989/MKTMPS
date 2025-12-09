"use client";
import React from "react";
import HeaderComponent from "../sections/HeaderComponent";
import { FaSchool, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaDirections } from "react-icons/fa";

const Campus = () => {
  // Replace with your campus location
  const destination = "Usman+Public+School+System,+Karachi,+Pakistan";
  const googleMapsDirectionURL = `https://www.google.com/maps/dir/?api=1&destination=${destination}`;

  return (
    <>
      <HeaderComponent title="Our Campus" />

      <div className="relative w-[92%] md:w-[80%] mx-auto -mt-10 pb-20">
        <div className="bg-white p-8 md:p-12 rounded-2xl shadow-xl border border-gray-200">

          {/* Header */}
          <div className="flex items-center mb-6 gap-3">
            <div className="w-1.5 h-10 bg-blue-600 rounded-full"></div>
            <h1 className="text-3xl md:text-4xl font-extrabold text-gray-800 flex items-center gap-3">
              <FaSchool className="text-blue-600" />
              Campus Location
            </h1>
          </div>

          <p className="text-gray-600 mb-10">
            Below is our official campus location. Click on "Get Directions" to open Google Maps and navigate from your current location.
          </p>

          <div className="grid md:grid-cols-2 gap-10">

            {/* Left Campus Info */}
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <FaMapMarkerAlt className="text-blue-600 text-2xl mt-1" />
                <div>
                  <h2 className="text-xl font-semibold text-gray-800">Address</h2>
                  <p className="text-gray-600">
                    Usman Public School System,  
                    Street No. 5, Block A,  
                    Karachi, Pakistan
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <FaPhoneAlt className="text-blue-600 text-xl mt-1" />
                <div>
                  <h2 className="text-xl font-semibold text-gray-800">Phone</h2>
                  <p className="text-gray-600">+92 300 1234567</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <FaEnvelope className="text-blue-600 text-xl mt-1" />
                <div>
                  <h2 className="text-xl font-semibold text-gray-800">Email</h2>
                  <p className="text-gray-600">info@upss.edu.pk</p>
                </div>
              </div>

              <a
                href={googleMapsDirectionURL}
                target="_blank"
                className="inline-flex items-center gap-3 bg-blue-600 text-white px-5 py-3 rounded-lg shadow-md hover:bg-blue-700 transition-all duration-300"
              >
                <FaDirections className="text-xl" />
                Get Directions
              </a>
            </div>

            {/* Google Map Embed */}
            <div className="overflow-hidden rounded-xl shadow-md border border-gray-200">
              <iframe
                title="campus-map"
                src={`https://maps.google.com/maps?q=${destination}&t=&z=15&ie=UTF8&iwloc=&output=embed`}
                width="100%"
                height="350"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-xl"
              ></iframe>
            </div>

          </div>
        </div>
      </div>
    </>
  );
};

export default Campus;
