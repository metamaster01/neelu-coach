// "use client"

// import { useState } from "react"
// import { Plus } from "lucide-react"
// import Image from "next/image"
// import { useRouter } from "next/navigation"

// export default function RelationshipSection() {
//   const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null)
//   const router = useRouter()

//   const faqs = [
//     {
//       question: "Can I attend alone without my partner?",
//       answer: "Yes, you can attend our sessions alone. We offer individual counseling as well as couples therapy.",
//     },
//     {
//       question: "How long is the session and when does it happen?",
//       answer: "Sessions are typically 60 minutes long. We offer flexible scheduling options throughout the week.",
//     },
//     {
//       question: "Will this actually help me?",
//       answer:
//         "Our approach is evidence-based and designed to address core relationship challenges. Many couples see significant improvements.",
//     },
//   ]

//   return (
//     <div className="w-full">
//       {/* FAQ Section */}
//       <section className="bg-white px-6 py-16 md:px-12 md:py-24">
//         <div className="max-w-4xl mx-auto">
//           <h1 className="text-4xl font-bold text-center mb-12">Frequently asked questions</h1>

//           <div className="space-y-6">
//             {faqs.map((faq, index) => (
//               <div key={index} className="border-b border-gray-200 pb-6">
//                 <button
//                   onClick={() => setOpenFaqIndex(openFaqIndex === index ? null : index)}
//                   className="flex justify-between items-center w-full text-left"
//                 >
//                   <span className="text-lg font-medium text-gray-900">{faq.question}</span>
//                   <Plus size={24} className="flex-shrink-0 text-gray-400" strokeWidth={2} />
//                 </button>

//                 {openFaqIndex === index && <p className="text-gray-600 mt-4">{faq.answer}</p>}
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Promotion Section */}
//       <section className="px-6 py-16 md:px-12 md:py-24" style={{ backgroundColor: "#5E936C" }}>
//         <div className="max-w-6xl mx-auto">
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">

//             {/* Phone Mockup */}
//             <div className="flex justify-center">
//               <div className="relative w-64 h-96 bg-white rounded-3xl border-8 border-black shadow-2xl overflow-hidden">
//                 <Image
//                   src="/revive.png"
//                   alt="mockup"
//                   fill
//                   className="object-cover"
//                 />
//               </div>
//             </div>

//             {/* Content */}
//             <div className="text-white">
//               <h2 className="text-4xl md:text-5xl font-bold mb-4">Ready to Rebuild Your Relationship?</h2>

//               <p className="text-lg mb-8 opacity-95">
//                 Your story deserves a new chapter — one filled with love, trust, and understanding. Let's begin that
//                 journey together.
//               </p>

//               <div className="flex flex-col sm:flex-row gap-4 mb-6">
//                 <button
//                   className="bg-white font-bold px-6 py-3 rounded-full hover:bg-gray-100 transition"
//                   style={{ color: "#5E936C" }}
//                   onClick={() => router.push("/contact")} // Navigate to contact page
//                 >
//                   Book A 1:1 Clarity Call
//                 </button>

//                 <button
//                   className="border-2 border-white text-white font-bold px-6 py-3 rounded-full transition"
//                   onMouseEnter={(e) => {
//                     e.currentTarget.style.backgroundColor = "#ffffff"
//                     e.currentTarget.style.color = "#5E936C"
//                   }}
//                   onMouseLeave={(e) => {
//                     e.currentTarget.style.backgroundColor = "transparent"
//                     e.currentTarget.style.color = "#ffffff"
//                   }}
//                 >
//                   Download the app
//                 </button>
//               </div>

//               <p className="text-sm opacity-90">Confidential • Compassionate • Guided by Experts</p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Contact Section */}
//       <section className="bg-gray-50 px-6 py-16 md:px-12 md:py-24">
//         <div className="max-w-6xl mx-auto">
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

//             {/* Left text */}
//             <div>
//               <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
//                 Begin your journey to <span style={{ color: "#5E936C" }}>deeper love and healing</span>.
//               </h2>

//               <p className="text-gray-600 text-lg leading-relaxed">
//                 Whether you&apos;re struggling with communication, feeling distant, or simply want to strengthen your
//                 connection, we&apos;re here to help guide you toward a healthier, more fulfilling relationship.
//               </p>
//             </div>

//             {/* Form */}
//             <div className="bg-white p-8 rounded-lg shadow-lg">
//               <div className="space-y-4 mb-6">
//                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//                   <input
//                     type="text"
//                     placeholder="Full name"
//                     className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none"
//                   />
//                   <input
//                     type="email"
//                     placeholder="Email"
//                     className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none"
//                   />
//                 </div>

//                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//                   <input
//                     type="tel"
//                     placeholder="Phone number"
//                     className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none"
//                   />
//                   <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none">
//                     <option>Service</option>
//                     <option>Couples Therapy</option>
//                     <option>Individual Counseling</option>
//                     <option>Intensives</option>
//                   </select>
//                 </div>

//                 <textarea
//                   placeholder="Message"
//                   rows={4}
//                   className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none"
//                 />
//               </div>

//               <button
//                 className="w-full text-white font-bold py-3 rounded-full transition"
//                 style={{ backgroundColor: "#5E936C" }}
//               >
//                 Get Started
//               </button>
//             </div>

//           </div>
//         </div>
//       </section>
//     </div>
//   )
// }



"use client"

import { useState } from "react"
import { Plus } from "lucide-react"
import Image from "next/image"
import { useRouter } from "next/navigation"

export default function RelationshipSection() {
  const [openFaqIndex, setOpenFaqIndex] = useState(null)
  const router = useRouter()

  // ✅ contact form states
  const [loading, setLoading] = useState(false)
  const [status, setStatus] = useState("")

  const faqs = [
    {
      question: "Can I attend alone without my partner?",
      answer: "Yes, you can attend our sessions alone. We offer individual counseling as well as couples therapy.",
    },
    {
      question: "How long is the session and when does it happen?",
      answer: "Sessions are typically 60 minutes long. We offer flexible scheduling options throughout the week.",
    },
    {
      question: "Will this actually help me?",
      answer:
        "Our approach is evidence-based and designed to address core relationship challenges. Many couples see significant improvements.",
    },
  ]

  // ✅ submit handler for Contact Section
  async function handleContactSubmit(e) {
    e.preventDefault()
    setLoading(true)
    setStatus("")

    const formData = new FormData(e.target)
    const fullName = (formData.get("full_name") || "").toString().trim()

    // split full name into first + last
    const nameParts = fullName.split(" ")
    const first_name = nameParts[0] || null
    const last_name = nameParts.slice(1).join(" ") || null

    const payload = {
      first_name,
      last_name,
      email: formData.get("email"),
      phone: formData.get("phone"),
      subject: formData.get("service"),   // service -> subject
      message: formData.get("message"),
    }

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      })

      const data = await res.json()

      if (!res.ok) {
        setStatus("❌ " + (data.error || "Something went wrong"))
      } else {
        setStatus("✅ Message sent!")
        e.target.reset()
      }
    } catch (err) {
      setStatus("❌ Network error, try again.")
    }

    setLoading(false)
  }

  return (
    <div className="w-full">
      {/* FAQ Section */}
      <section className="bg-white px-6 py-16 md:px-12 md:py-24">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-center mb-12">Frequently asked questions</h1>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="border-b border-gray-200 pb-6">
                <button
                  onClick={() => setOpenFaqIndex(openFaqIndex === index ? null : index)}
                  className="flex justify-between items-center w-full text-left"
                >
                  <span className="text-lg font-medium text-gray-900">{faq.question}</span>
                  <Plus size={24} className="flex-shrink-0 text-gray-400" strokeWidth={2} />
                </button>

                {openFaqIndex === index && <p className="text-gray-600 mt-4">{faq.answer}</p>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Promotion Section */}
      <section className="px-6 py-16 md:px-12 md:py-24" style={{ backgroundColor: "#5E936C" }}>
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">

            {/* Phone Mockup */}
            <div className="flex justify-center">
              <div className="relative w-64 h-96 bg-white rounded-3xl border-8 border-black shadow-2xl overflow-hidden">
                <Image
                  src="/revive.png"
                  alt="mockup"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Content */}
            <div className="text-white">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Ready to Rebuild Your Relationship?</h2>

              <p className="text-lg mb-8 opacity-95">
                Your story deserves a new chapter — one filled with love, trust, and understanding. Let's begin that
                journey together.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-6">
                <button
                  className="bg-white font-bold px-6 py-3 rounded-full hover:bg-gray-100 transition"
                  style={{ color: "#5E936C" }}
                  onClick={() => router.push("/contact")}
                >
                  Book A 1:1 Clarity Call
                </button>

                <button
                  className="border-2 border-white text-white font-bold px-6 py-3 rounded-full transition"
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = "#ffffff"
                    e.currentTarget.style.color = "#5E936C"
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = "transparent"
                    e.currentTarget.style.color = "#ffffff"
                  }}
                >
                  Download the app
                </button>
              </div>

              <p className="text-sm opacity-90">Confidential • Compassionate • Guided by Experts</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-gray-50 px-6 py-16 md:px-12 md:py-24">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

            {/* Left text */}
            <div>
              <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
                Begin your journey to <span style={{ color: "#5E936C" }}>deeper love and healing</span>.
              </h2>

              <p className="text-gray-600 text-lg leading-relaxed">
                Whether you&apos;re struggling with communication, feeling distant, or simply want to strengthen your
                connection, we&apos;re here to help guide you toward a healthier, more fulfilling relationship.
              </p>
            </div>

            {/* ✅ Form connected */}
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <form onSubmit={handleContactSubmit}>
                <div className="space-y-4 mb-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <input
                      name="full_name"
                      type="text"
                      placeholder="Full name"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none"
                    />
                    <input
                      name="email"
                      type="email"
                      placeholder="Email"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <input
                      name="phone"
                      type="tel"
                      placeholder="Phone number"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none"
                    />
                    <select
                      name="service"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none"
                    >
                      <option value="">Service</option>
                      <option value="Couples Therapy">Couples Therapy</option>
                      <option value="Individual Counseling">Individual Counseling</option>
                      <option value="Intensives">Intensives</option>
                    </select>
                  </div>

                  <textarea
                    name="message"
                    placeholder="Message"
                    rows={4}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none"
                  />
                </div>

                <button
                  disabled={loading}
                  className="w-full text-white font-bold py-3 rounded-full transition disabled:opacity-60"
                  style={{ backgroundColor: "#5E936C" }}
                >
                  {loading ? "Sending..." : "Get Started"}
                </button>

                {status && <p className="text-sm mt-3">{status}</p>}
              </form>
            </div>

          </div>
        </div>
      </section>
    </div>
  )
}
