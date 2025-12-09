import React, { useState } from "react";
import HeaderComponent from "../sections/HeaderComponent";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const ContactUs = () => {

  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

 const handleSubmit = (e) => {
  e.preventDefault();

  const whatsappNumber = "923212068909";

  const text = `New Contact Form Submission:

Name: ${form.name}
Email: ${form.email}
Subject: ${form.subject}
Message: ${form.message}
  `;

  const encodedText = encodeURIComponent(text);

  const url = `https://wa.me/${whatsappNumber}?text=${encodedText}`;

  window.location.href = url;
};


  return (
    <>
      <HeaderComponent title="Contact Us" />

      <section className="min-h-screen flex items-center justify-center bg-gray-50 px-4 py-10">
        <div className="w-full max-w-6xl mx-auto">
          <div 
            className="backdrop-blur-xl bg-white/80 shadow-2xl rounded-3xl 
            border border-gray-200 overflow-hidden"
          >
            <div className="grid md:grid-cols-3">
              
              {/* LEFT: FORM */}
              <div className="md:col-span-2 p-10">
                <h2 className="text-3xl font-bold text-gray-800 mb-8">
                  Send Us a Message
                </h2>

                <form className="space-y-6" onSubmit={handleSubmit}>
                  
                  {/* Row 1 */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="text-gray-700 font-medium">Your Name</label>
                      <input
                        type="text"
                        name="name"
                        onChange={handleChange}
                        className="w-full mt-2 p-3 border rounded-xl"
                        placeholder="John Doe"
                        required
                      />
                    </div>

                    <div>
                      <label className="text-gray-700 font-medium">Your Email</label>
                      <input
                        type="email"
                        name="email"
                        onChange={handleChange}
                        className="w-full mt-2 p-3 border rounded-xl"
                        placeholder="example@mail.com"
                        required
                      />
                    </div>
                  </div>

                  {/* Subject */}
                  <div>
                    <label className="text-gray-700 font-medium">Subject</label>
                    <input
                      type="text"
                      name="subject"
                      onChange={handleChange}
                      className="w-full mt-2 p-3 border rounded-xl"
                      placeholder="Write subject here..."
                      required
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label className="text-gray-700 font-medium">Message</label>
                    <textarea
                      rows="5"
                      name="message"
                      onChange={handleChange}
                      className="w-full mt-2 p-3 border rounded-xl resize-none"
                      placeholder="Write your message..."
                      required
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 bg-blue-600 text-white rounded-xl text-lg font-semibold shadow-md hover:bg-blue-700 transition"
                  >
                    Send to WhatsApp
                  </button>
                </form>
              </div>

              {/* RIGHT SIDE INFO */}
              <div className="bg-gradient-to-b from-blue-600 to-indigo-700 text-white p-10">
                <h2 className="text-2xl font-bold mb-8">Contact Information</h2>
                
                <div className="space-y-8">

                  <div className="flex items-start space-x-4">
                    <div className="bg-white/20 p-3 rounded-xl">
                      <FaPhone className="text-xl" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg">Phone Number</h3>
                      <p className="text-blue-100 mt-1">+92 300 1234567</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-white/20 p-3 rounded-xl">
                      <FaEnvelope className="text-xl" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg">Email Address</h3>
                      <p className="text-blue-100 mt-1">info@muslimkhatrischool.edu.pk</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-white/20 p-3 rounded-xl">
                      <FaMapMarkerAlt className="text-xl" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg">School Address</h3>
                      <p className="text-blue-100 mt-1">123 School Street, Karachi</p>
                    </div>
                  </div>

                </div>
              </div>
              
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactUs;
