"use client";
import React, { useState, useEffect } from "react";
import { sendEmail } from "@/actions";
import { useFormState } from "react-dom";
import { toast, Toaster } from "react-hot-toast";

export default function ContactPage() {
  const [formState, setFormState] = useState({ error: null, success: false });
  const [sendEmailState, sendEmailAction] = useFormState(sendEmail, formState);

  useEffect(() => {
    if (sendEmailState.success) {
      toast.success("Email sent!");
      setFormState({ error: null, success: true });
    }
    if (sendEmailState.error) {
      toast.error("Error sending email: " + sendEmailState.error);
      setFormState({ error: sendEmailState.error, success: false });
    }
  }, [sendEmailState]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    const name = formData.get("name");
    const email = formData.get("email");
    const phone = formData.get("phone");
    const message = formData.get("message");

    if (!name || !email || !phone || !message) {
      toast.error("Please fill in all fields.");
      return;
    }

    // Simple phone number validation (adjust regex as needed)
    const phoneRegex = /^[0-9]{10}$/; 
    if (!phoneRegex.test(phone)) {
      toast.error("Please enter a valid phone number (10 digits).");
      return;
    }

    sendEmailAction(e);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <Toaster position="top-center" reverseOrder={false} />
      <div className="flex flex-col md:flex-row md:items-start max-w-6xl w-full p-8">
        {/* Bagian Tengah - Kiri dari Teks Contact dan Form */}
        <div className="md:w-1/3 flex items-center justify-center md:justify-start">
          {/* Anda dapat menambahkan gambar, ikon, atau elemen lainnya di sini */}
        </div>

        {/* Pembatas Tengah */}
        <div className="hidden md:flex md:w-1 bg-[#CF2C27] h-full mx-4"></div>

        {/* Bagian Kanan */}
        <div className="md:w-2/3 mt-10 md:mt-0 md:ml-auto">
          {/* Teks Judul */}
          <h1 className="text-left text-4xl font-extrabold text-[#011334] mb-6">
            Contact Us
          </h1>

          {/* Form Input */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="Your name"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="you@example.com"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Phone</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="Your phone number"
                pattern="[0-9]{10}"
                title="Please enter a 10-digit phone number"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Message</label>
              <textarea
                name="message"
                id="message"
                rows="4"
                className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="Your message"
              ></textarea>
            </div>

            <div className="flex justify-end">
              <button
                type="submit"
                className="py-3 px-5 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Send
              </button>
            </div>

            {sendEmailState.success && <p className="text-green-500">Email sent successfully!</p>}
            {sendEmailState.error && <p className="text-red-500">Error: {sendEmailState.error}</p>}
          </form>
        </div>
      </div>
    </div>
  );
}
