"use client";
import { motion } from "framer-motion";

export default function ContactPage() {
  return (
    <main className="pt-[140px]">
      {/* PAGE HEADER */}
      <section className="text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-pink-600"
        >
          Contact us
        </motion.h1>
      </section>

      {/* GET IN TOUCH SECTION */}
      <section className="mt-10 text-center px-4">
        <h2 className="text-xl font-semibold">Get In Touch</h2>

        <p className="mt-2 text-gray-700 max-w-xl mx-auto">
          We’d love to hear from you — whether you have a question, need guidance, or want to collaborate.
        </p>

        <div className="flex justify-center gap-12 mt-10 flex-wrap">
          <div className="flex flex-col items-center text-gray-700">
            <span className="text-2xl">📞</span>
            <p className="mt-2 font-semibold text-pink-600 text-sm">+91 98765 43210</p>
            <span className="text-xs text-gray-500">Monday - Friday (10 AM - 5 PM)</span>
          </div>

          <div className="flex flex-col items-center text-gray-700">
            <span className="text-2xl">📧</span>
            <p className="mt-2 font-semibold text-pink-600 text-sm">info@neelucoach.com</p>
            <span className="text-xs text-gray-500">Please allow 24 hours response time</span>
          </div>
        </div>
      </section>

      {/* CONTACT FORM */}
      <section className="mt-16 px-4 flex justify-center">
        <div className="w-full max-w-lg bg-white p-8 rounded-2xl shadow-md border border-pink-100">
          <h3 className="text-xl font-semibold text-gray-800">Contact Us</h3>
          <p className="text-sm text-gray-600 mt-1">
            We're here to help you every step of the way. Contact us for guidance.
          </p>

          <form className="mt-6 space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <input type="text" placeholder="First Name" className="inputBox" />
              <input type="text" placeholder="Last Name" className="inputBox" />
            </div>

            <input type="email" placeholder="Email Address" className="inputBox" />

            <select className="inputBox">
              <option>Select Subject</option>
              <option>Book a Session</option>
              <option>Query</option>
              <option>Collaboration</option>
            </select>

            <textarea rows={4} placeholder="Message" className="inputBox resize-none"></textarea>

            <button
              type="submit"
              className="bg-pink-600 text-white px-6 py-2 rounded-md w-full hover:bg-pink-700 transition"
            >
              Submit
            </button>
          </form>
        </div>
      </section>

      <div className="h-20" />

      <style jsx>{`
        .inputBox {
          border: 1.6px solid #d1d5db;
          border-radius: 0.375rem;
          padding: 0.5rem 0.75rem;
          width: 100%;
        }
      `}</style>
    </main>
  );
}
