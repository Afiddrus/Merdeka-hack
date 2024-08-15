"use client";
import React, { useState } from "react";
import { toast, Toaster } from "react-hot-toast";

// Simulasikan fungsi sendEmail jika tidak tersedia
// import { sendEmail } from "@/actions"; // Pastikan fungsi ini tersedia di actions

async function sendEmail(formData) {
  // Simulasi pengiriman email
  // Gantilah dengan logika pengiriman email yang sesuai
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ success: true });
    }, 1000);
  });
}

export default function ContactPage() {
  const [formState, setFormState] = useState({ error: null, success: false });

  const handleSubmit = async (e) => {
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

    // Validasi nomor telepon hanya berisi angka
    const phoneRegex = /^\d+$/; // Hanya digit
    if (!phoneRegex.test(phone)) {
      toast.error("Phone number can only contain digits.");
      return;
    }

    try {
      const result = await sendEmail(formData);
      if (result.success) {
        toast.success("Email sent!");
        setFormState({ error: null, success: true });
      } else {
        throw new Error(result.error || "Unknown error");
      }
    } catch (error) {
      toast.error("Error sending email: " + error.message);
      setFormState({ error: error.message, success: false });
    }
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
                pattern="\d*" // Hanya digit
                title="Please enter a valid phone number with digits only"
                onInput={(e) => {
                  e.target.value = e.target.value.replace(/[^0-9]/g, ''); // Hapus karakter non-digit
                }}
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
          </form>
        </div>
      </div>
    </div>
  );
}
