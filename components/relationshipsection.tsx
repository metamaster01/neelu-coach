"use client";

import { useState, useEffect } from "react";
import { Plus } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";

type FormState = {
  name: string;
  email: string;
  phone: string;
  preferred_contact: "WhatsApp" | "Phone" | "Email";
  service_type: string;
  preferred_date: string; // YYYY-MM-DD
  preferred_time_slot: string;
  timezone: string;
  language: string;
  consent: boolean;
};

export default function RelationshipSection() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);
  const router = useRouter();

  // ✅ contact form states (your existing section form)
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  const faqs = [
    {
      question: "Can I attend alone without my partner?",
      answer:
        "Yes, you can attend our sessions alone. We offer individual counseling as well as couples therapy.",
    },
    {
      question: "How long is the session and when does it happen?",
      answer:
        "Sessions are typically 60 minutes long. We offer flexible scheduling options throughout the week.",
    },
    {
      question: "Will this actually help me?",
      answer:
        "Our approach is evidence-based and designed to address core relationship challenges. Many couples see significant improvements.",
    },
  ];

  // ✅ submit handler for Contact Section (unchanged)
  async function handleContactSubmit(e: any) {
    e.preventDefault();
    setLoading(true);
    setStatus("");

    const formData = new FormData(e.target);
    const fullName = (formData.get("full_name") || "").toString().trim();

    const nameParts = fullName.split(" ");
    const first_name = nameParts[0] || null;
    const last_name = nameParts.slice(1).join(" ") || null;

    const payload = {
      first_name,
      last_name,
      email: formData.get("email"),
      phone: formData.get("phone"),
      subject: formData.get("service"),
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

  // ======================
  // ✅ Clarity Call Dialog State (same as earlier)
  // ======================
  const [open, setOpen] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [successMsg, setSuccessMsg] = useState<string | null>(null);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    phone: "",
    preferred_contact: "WhatsApp",
    service_type: "1:1 Relationship Coaching",
    preferred_date: "",
    preferred_time_slot: "10:00 AM - 11:00 AM",
    timezone: "Asia/Kolkata",
    language: "Hindi",
    consent: false,
  });

  useEffect(() => {
    if (!open) {
      setSuccessMsg(null);
      setErrorMsg(null);
      setSubmitting(false);
    }
  }, [open]);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitting(true);
    setSuccessMsg(null);
    setErrorMsg(null);

    try {
      if (!form.consent) {
        throw new Error("Consent is required to submit the request.");
      }

      const res = await fetch("/api/counseling-request", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...form,
          email: form.email?.trim() ? form.email.trim() : null,
        }),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data?.error || "Failed to submit request.");

      setSuccessMsg("✅ Request submitted! We’ll contact you shortly.");
      setErrorMsg(null);

      setForm((p) => ({
        ...p,
        name: "",
        email: "",
        phone: "",
        preferred_date: "",
        consent: false,
      }));
    } catch (err: any) {
      setErrorMsg(err?.message || "Something went wrong.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <div className="w-full">
      {/* FAQ Section */}
      <section className="bg-white px-6 py-16 md:px-12 md:py-24">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-center mb-12">
            Frequently asked questions
          </h1>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="border-b border-gray-200 pb-6">
                <button
                  onClick={() =>
                    setOpenFaqIndex(openFaqIndex === index ? null : index)
                  }
                  className="flex justify-between items-center w-full text-left"
                >
                  <span className="text-lg font-medium text-gray-900">
                    {faq.question}
                  </span>
                  <Plus
                    size={24}
                    className="flex-shrink-0 text-gray-400"
                    strokeWidth={2}
                  />
                </button>

                {openFaqIndex === index && (
                  <p className="text-gray-600 mt-4">{faq.answer}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Promotion Section */}
      <section
        className="px-6 py-16 md:px-12 md:py-24"
        style={{ backgroundColor: "#5E936C" }}
      >
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* Phone Mockup */}
            <div className="flex justify-center">
              <div className="relative w-64 h-96 bg-white rounded-3xl border-8 border-black shadow-2xl overflow-hidden">
                <Image src="/revive.png" alt="mockup" fill className="object-cover" />
              </div>
            </div>

            {/* Content */}
            <div className="text-white">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Ready to Rebuild Your Relationship?
              </h2>

              <p className="text-lg mb-8 opacity-95">
                Your story deserves a new chapter — one filled with love, trust,
                and understanding. Let's begin that journey together.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-6">
                {/* ✅ CLARITY CALL BUTTON -> DIALOG POPUP */}
                <Dialog open={open} onOpenChange={setOpen}>
                  <DialogTrigger asChild>
                    <button
                      className="bg-white font-bold px-6 py-3 rounded-full hover:bg-gray-100 transition"
                      style={{ color: "#5E936C" }}
                      type="button"
                    >
                      Book A 1:1 Clarity Call
                    </button>
                  </DialogTrigger>

                  {/* ===== Responsive #5E936C Dialog ===== */}
                  <DialogContent
                    className="
                      w-[95vw] sm:w-full
                      max-w-[580px]
                      max-h-[90vh]
                      overflow-hidden
                      rounded-2xl
                      border border-[#5E936C]/25
                      bg-[#fbfdfb]
                      p-0
                      shadow-xl
                    "
                  >
                    <div className="h-1.5 w-full bg-[#5E936C]" />

                    <div className="p-4 sm:p-6 overflow-y-auto max-h-[calc(90vh-10px)]">
                      <DialogHeader>
                        <DialogTitle className="text-[#1f2a22] text-xl">
                          Book a Free Clarity Call
                        </DialogTitle>
                        <p className="text-[#1f2a22]/70 text-sm mt-1">
                          Fill this out and we’ll reach you in your preferred way.
                        </p>
                      </DialogHeader>

                      <form onSubmit={handleSubmit} className="space-y-4 mt-4">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                          <div className="space-y-2">
                            <Label className="text-[#1f2a22]">Name *</Label>
                            <Input
                              value={form.name}
                              onChange={(e) =>
                                setForm({ ...form, name: e.target.value })
                              }
                              placeholder="Your full name"
                              className="bg-white border-[#5E936C]/25 focus-visible:ring-[#5E936C]/30"
                              required
                            />
                          </div>

                          <div className="space-y-2">
                            <Label className="text-[#1f2a22]">Phone *</Label>
                            <Input
                              value={form.phone}
                              onChange={(e) =>
                                setForm({ ...form, phone: e.target.value })
                              }
                              placeholder="WhatsApp/Phone number"
                              className="bg-white border-[#5E936C]/25 focus-visible:ring-[#5E936C]/30"
                              required
                            />
                          </div>

                          <div className="space-y-2">
                            <Label className="text-[#1f2a22]">Email</Label>
                            <Input
                              value={form.email}
                              onChange={(e) =>
                                setForm({ ...form, email: e.target.value })
                              }
                              placeholder="you@example.com"
                              className="bg-white border-[#5E936C]/25 focus-visible:ring-[#5E936C]/30"
                              type="email"
                            />
                          </div>

                          <div className="space-y-2">
                            <Label className="text-[#1f2a22]">
                              Preferred Contact *
                            </Label>
                            <Select
                              value={form.preferred_contact}
                              onValueChange={(v) =>
                                setForm({
                                  ...form,
                                  preferred_contact:
                                    v as FormState["preferred_contact"],
                                })
                              }
                            >
                              <SelectTrigger className="bg-white border-[#5E936C]/25 focus:ring-[#5E936C]/30">
                                <SelectValue placeholder="Choose..." />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="WhatsApp">WhatsApp</SelectItem>
                                <SelectItem value="Phone">Phone</SelectItem>
                                <SelectItem value="Email">Email</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>

                          <div className="space-y-2">
                            <Label className="text-[#1f2a22]">
                              Service Type *
                            </Label>
                            <Select
                              value={form.service_type}
                              onValueChange={(v) =>
                                setForm({ ...form, service_type: v })
                              }
                            >
                              <SelectTrigger className="bg-white border-[#5E936C]/25 focus:ring-[#5E936C]/30">
                                <SelectValue />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="1:1 Relationship Coaching">
                                  1:1 Relationship Coaching
                                </SelectItem>
                              </SelectContent>
                            </Select>
                          </div>

                          <div className="space-y-2">
                            <Label className="text-[#1f2a22]">Language</Label>
                            <Select
                              value={form.language}
                              onValueChange={(v) =>
                                setForm({ ...form, language: v })
                              }
                            >
                              <SelectTrigger className="bg-white border-[#5E936C]/25 focus:ring-[#5E936C]/30">
                                <SelectValue />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="Hindi">Hindi</SelectItem>
                                <SelectItem value="English">English</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>

                          <div className="space-y-2">
                            <Label className="text-[#1f2a22]">
                              Preferred Date *
                            </Label>
                            <Input
                              value={form.preferred_date}
                              onChange={(e) =>
                                setForm({
                                  ...form,
                                  preferred_date: e.target.value,
                                })
                              }
                              className="bg-white border-[#5E936C]/25 focus-visible:ring-[#5E936C]/30"
                              type="date"
                              required
                            />
                          </div>

                          <div className="space-y-2">
                            <Label className="text-[#1f2a22]">
                              Preferred Time Slot *
                            </Label>
                            <Select
                              value={form.preferred_time_slot}
                              onValueChange={(v) =>
                                setForm({ ...form, preferred_time_slot: v })
                              }
                            >
                              <SelectTrigger className="bg-white border-[#5E936C]/25 focus:ring-[#5E936C]/30">
                                <SelectValue />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="10:00 AM - 11:00 AM">
                                  10:00 AM - 11:00 AM
                                </SelectItem>
                                <SelectItem value="12:00 PM - 01:00 PM">
                                  12:00 PM - 01:00 PM
                                </SelectItem>
                                <SelectItem value="04:00 PM - 05:00 PM">
                                  04:00 PM - 05:00 PM
                                </SelectItem>
                                <SelectItem value="07:00 PM - 08:00 PM">
                                  07:00 PM - 08:00 PM
                                </SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                        </div>

                        <div className="flex items-start gap-3 pt-2">
                          <Checkbox
                            className="data-[state=checked]:bg-[#5E936C] data-[state=checked]:border-[#5E936C]"
                            checked={form.consent}
                            onCheckedChange={(v) =>
                              setForm({ ...form, consent: Boolean(v) })
                            }
                          />
                          <p className="text-xs text-[#1f2a22]/70 leading-relaxed">
                            I consent to be contacted about this request. *
                          </p>
                        </div>

                        {errorMsg && (
                          <div className="text-sm text-[#7a1f1f] bg-red-50 border border-red-200 rounded-xl p-3">
                            {errorMsg}
                          </div>
                        )}
                        {successMsg && (
                          <div className="text-sm text-[#1f2a22] bg-[#5E936C]/10 border border-[#5E936C]/25 rounded-xl p-3">
                            {successMsg}
                          </div>
                        )}

                        <div className="pt-2 flex flex-col sm:flex-row gap-3">
                          <Button
                            type="submit"
                            disabled={submitting}
                            className="w-full sm:w-auto bg-[#5E936C] hover:bg-[#4f7e5e] text-white rounded-full px-6"
                          >
                            {submitting ? "Submitting..." : "Submit Request"}
                          </Button>

                          <Button
                            type="button"
                            variant="outline"
                            onClick={() => setOpen(false)}
                            className="w-full sm:w-auto rounded-full border border-[#5E936C]/35 text-[#2b3a30] hover:bg-[#5E936C]/10 bg-white/70"
                          >
                            Close
                          </Button>
                        </div>
                      </form>
                    </div>
                  </DialogContent>
                </Dialog>

                {/* Download app button (unchanged) */}
                <button
                  className="border-2 border-white text-white font-bold px-6 py-3 rounded-full transition"
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = "#ffffff";
                    e.currentTarget.style.color = "#5E936C";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = "transparent";
                    e.currentTarget.style.color = "#ffffff";
                  }}
                  type="button"
                >
                  Download the app
                </button>
              </div>

              <p className="text-sm opacity-90">
                Confidential • Compassionate • Guided by Experts
              </p>
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
                Begin your journey to{" "}
                <span style={{ color: "#5E936C" }}>deeper love and healing</span>.
              </h2>

              <p className="text-gray-600 text-lg leading-relaxed">
                Whether you&apos;re struggling with communication, feeling
                distant, or simply want to strengthen your connection, we&apos;re
                here to help guide you toward a healthier, more fulfilling
                relationship.
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
                      <option value="Individual Counseling">
                        Individual Counseling
                      </option>
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
  );
}
