// "use client";

// import { motion } from "framer-motion";
// import Image from "next/image";
// import Footer from "@/components/footer";

// export default function ContactPage() {
//   return (
//     <main className="w-full flex flex-col items-center bg-white overflow-hidden">

//       {/* ---------------- HERO SECTION (UNCHANGED) ---------------- */}
//       <section
//         className="
//           relative w-full h-[340px] sm:h-[400px]
//           flex items-end justify-center text-center
//           pb-12 sm:pb-16
//         "
//       >
//         <div className="absolute inset-0">
//           <Image
//             src="/about/about-bg.jpg"
//             alt=""
//             fill
//             className="object-cover object-center"
//             priority
//           />
//         </div>

//         <div className="absolute inset-0 bg-[#5E936C]/80 backdrop-blur-[1px]" />

//         <motion.h1
//           initial={{ opacity: 0, y: 25 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.7 }}
//           className="relative text-white text-4xl sm:text-6xl font-semibold tracking-tight drop-shadow-md"
//         >
//           Contact Us
//         </motion.h1>
//       </section>

//       {/* ---------------- GET IN TOUCH BLOCK ---------------- */}
//       <section className="w-full py-20 flex justify-center">
//         <motion.div
//           initial={{ opacity: 0, y: 35 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6 }}
//           className="max-w-4xl w-full text-center px-4"
//         >
//           {/* Title */}
//           <h3 className="text-black text-lg font-semibold tracking-wide">
//             Get In Touch
//           </h3>

//           {/* Subtitle */}
//           <p className="text-black font-semibold text-[27px] leading-snug max-w-2xl mx-auto mt-2">
//             We’d love to hear from you — whether you have a question, need
//             guidance, or want to collaborate.
//           </p>

//           {/* CONTACT ROW */}
//           <div className="grid sm:grid-cols-2 gap- pt-12 justify-items-center">

//             {/* PHONE */}
//             <div className="flex items-start gap-4">
//               <span className="text-xl bg-[#E6F2E6] text-[#689F38] p-3 rounded-xl">
//                 📞
//               </span>
//               <div>
//                 <p className="text-gray-900 font-semibold text-[15px]">Phone</p>
//                 <p className="text-[15px] font-medium text-gray-900">
//                   +91 98765 43210
//                 </p>
//                 <p className="text-gray-500 text-sm">
//                   (Monday – Friday | 10 AM – 6 PM IST)
//                 </p>
//               </div>
//             </div>

//             {/* EMAIL */}
//             <div className="flex items-start gap-4">
//               <span className="text-xl bg-[#E6F2E6] text-[#689F38] p-3 rounded-xl">
//                 📧
//               </span>
//               <div>
//                 <p className="text-gray-900 font-semibold text-[15px]">Email</p>
//                 <p className="text-[15px] font-medium text-gray-900">
//                   info@neeltaneja.com
//                 </p>
//                 <p className="text-gray-500 text-sm">
//                   (Typical response time: 24 hours)
//                 </p>
//               </div>
//             </div>

//           </div>
//         </motion.div>
//       </section>

//       {/* ---------------- CONTACT FORM ---------------- */}
//       <section className="w-full pb-24 pt-12 flex justify-center">
//         <motion.div
//           initial={{ opacity: 0, y: 35 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6 }}
//           className="
//             w-[90%] sm:w-[540px] bg-[#ECECEC] rounded-xl 
//             shadow-[0_4px_20px_rgba(0,0,0,0.08)]
//             border border-gray-200 px-6 py-8 space-y-6
//           "
//         >
//           <h3 className="text-gray-900 text-lg font-semibold">Contact Us</h3>
//           <p className="text-gray-600 text-sm">
//             We&apos;re here to help you every step of the way. Contact us for
//             guidance.
//           </p>

//           {/* FORM */}
//           <form className="space-y-5">
//             <input
//               type="text"
//               placeholder="First Name"
//               className="w-full border-b border-gray-400 py-2 outline-none text-sm"
//             />

//             <input
//               type="text"
//               placeholder="Last Name"
//               className="w-full border-b border-gray-400 py-2 outline-none text-sm"
//             />

//             <input
//               type="email"
//               placeholder="Email Address"
//               className="w-full border-b border-gray-400 py-2 outline-none text-sm"
//             />

//             <input
//               type="text"
//               placeholder="Subject"
//               className="w-full border-b border-gray-400 py-2 outline-none text-sm"
//             />

//             <textarea
//               placeholder="Message"
//               className="w-full h-20 border-b border-gray-400 py-2 outline-none text-sm"
//             />

//             <button
//               className="bg-[#5E936C] text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-[#4C7958] transition"
//             >
//               Submit
//             </button>
//           </form>
//         </motion.div>
//       </section>

//       <footer className="w-full">
//         <Footer />
//       </footer>
//     </main>
//   );
// }


"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Footer from "@/components/footer";
import { useState } from "react";

export default function ContactPage() {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    setStatus("");

    const formData = new FormData(e.target);

    const payload = {
      first_name: formData.get("first_name"),
      last_name: formData.get("last_name"),
      email: formData.get("email"),
      phone: formData.get("phone"),     // optional if you add phone input
      subject: formData.get("subject"),
      message: formData.get("message"),
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (!res.ok) {
        setStatus("❌ " + (data.error || "Something went wrong"));
      } else {
        setStatus("✅ Message sent!");
        e.target.reset();
      }
    } catch (err) {
      setStatus("❌ Network error, try again.");
    }

    setLoading(false);
  }

  return (
    <main className="w-full flex flex-col items-center bg-white overflow-hidden">
      {/* ---------------- HERO SECTION (UNCHANGED) ---------------- */}
      <section
        className="
          relative w-full h-[340px] sm:h-[400px]
          flex items-end justify-center text-center
          pb-12 sm:pb-16
        "
      >
        <div className="absolute inset-0">
          <Image
            src="/about/about-bg.jpg"
            alt=""
            fill
            className="object-cover object-center"
            priority
          />
        </div>

        <div className="absolute inset-0 bg-[#5E936C]/80 backdrop-blur-[1px]" />

        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="relative text-white text-4xl sm:text-6xl font-semibold tracking-tight drop-shadow-md"
        >
          Contact Us
        </motion.h1>
      </section>

      {/* ---------------- GET IN TOUCH BLOCK ---------------- */}
      <section className="w-full py-20 flex justify-center">
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl w-full text-center px-4"
        >
          <h3 className="text-black text-lg font-semibold tracking-wide">
            Get In Touch
          </h3>

          <p className="text-black font-semibold text-[27px] leading-snug max-w-2xl mx-auto mt-2">
            We’d love to hear from you — whether you have a question, need
            guidance, or want to collaborate.
          </p>

          <div className="grid sm:grid-cols-2 gap- pt-12 justify-items-center">
            {/* PHONE */}
            <div className="flex items-start gap-4">
              <span className="text-xl bg-[#E6F2E6] text-[#689F38] p-3 rounded-xl">
                📞
              </span>
              <div>
                <p className="text-gray-900 font-semibold text-[15px]">Phone</p>
                <p className="text-[15px] font-medium text-gray-900">
                  +91 98765 43210
                </p>
                <p className="text-gray-500 text-sm">
                  (Monday – Friday | 10 AM – 6 PM IST)
                </p>
              </div>
            </div>

            {/* EMAIL */}
            <div className="flex items-start gap-4">
              <span className="text-xl bg-[#E6F2E6] text-[#689F38] p-3 rounded-xl">
                📧
              </span>
              <div>
                <p className="text-gray-900 font-semibold text-[15px]">Email</p>
                <p className="text-[15px] font-medium text-gray-900">
                  info@neeltaneja.com
                </p>
                <p className="text-gray-500 text-sm">
                  (Typical response time: 24 hours)
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* ---------------- CONTACT FORM ---------------- */}
      <section className="w-full pb-24 pt-12 flex justify-center">
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="
            w-[90%] sm:w-[540px] bg-[#ECECEC] rounded-xl 
            shadow-[0_4px_20px_rgba(0,0,0,0.08)]
            border border-gray-200 px-6 py-8 space-y-6
          "
        >
          <h3 className="text-gray-900 text-lg font-semibold">Contact Us</h3>
          <p className="text-gray-600 text-sm">
            We&apos;re here to help you every step of the way. Contact us for
            guidance.
          </p>

          {/* FORM */}
          <form className="space-y-5" onSubmit={handleSubmit}>
            <input
              name="first_name"
              type="text"
              placeholder="First Name"
              className="w-full border-b border-gray-400 py-2 outline-none text-sm"
            />

            <input
              name="last_name"
              type="text"
              placeholder="Last Name"
              className="w-full border-b border-gray-400 py-2 outline-none text-sm"
            />

            <input
              name="email"
              type="email"
              placeholder="Email Address"
              required
              className="w-full border-b border-gray-400 py-2 outline-none text-sm"
            />

            {/* Optional: add phone if you want to store it */}
            {/* 
            <input
              name="phone"
              type="text"
              placeholder="Phone"
              className="w-full border-b border-gray-400 py-2 outline-none text-sm"
            />
            */}

            <input
              name="subject"
              type="text"
              placeholder="Subject"
              className="w-full border-b border-gray-400 py-2 outline-none text-sm"
            />

            <textarea
              name="message"
              placeholder="Message"
              required
              className="w-full h-20 border-b border-gray-400 py-2 outline-none text-sm"
            />

            <button
              disabled={loading}
              className="bg-[#5E936C] text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-[#4C7958] transition disabled:opacity-60"
            >
              {loading ? "Sending..." : "Submit"}
            </button>

            {status && (
              <p className="text-sm pt-2 text-gray-800">{status}</p>
            )}
          </form>
        </motion.div>
      </section>

      <footer className="w-full">
        <Footer />
      </footer>
    </main>
  );
}
