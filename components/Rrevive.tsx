"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import phoneImg from "@/public/about/revive.png";
import { useEffect, useState } from "react";

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
  preferred_contact: "WhatsApp Voice Call" | "Video Call" | "In Person";
  service_type: string;
  preferred_date: string; // YYYY-MM-DD
  preferred_time_slot: string;
  timezone: string;
  language: string;
  consent: boolean;
};

export default function Revive() {
  // ✅ dialog + form state (same as before)
  const [open, setOpen] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [successMsg, setSuccessMsg] = useState<string | null>(null);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    phone: "",
    preferred_contact: "WhatsApp Voice Call",
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
      if (!form.consent)
        throw new Error("Consent is required to submit the request.");

      const res = await fetch("/api/counseling-request", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...form,
          email: form.email?.trim() ? form.email.trim() : null,
        }),
      });

      const contentType = res.headers.get("content-type") || "";
      const raw = await res.text();

      let data: any = null;
      if (contentType.includes("application/json"))
        data = raw ? JSON.parse(raw) : null;

      if (!res.ok) {
        throw new Error(
          data?.error || `Request failed (${res.status}). ${raw.slice(0, 200)}`
        );
      }

      setSuccessMsg("✅ Request submitted! We’ll contact you shortly.");
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
    <section className="w-full flex justify-center bg-white py-16 px-6">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-6xl w-full grid md:grid-cols-2 gap-12 items-stretch"
      >
        {/* LEFT BLOCK */}
        <div className="w-full bg-[#5E936C] rounded-2xl flex justify-center items-center shadow-[0_8px_30px_rgba(0,0,0,0.15)] py-6 md:py-8">
          <div className="w-[160px] sm:w-[200px] md:w-[240px]">
            <Image
              src={phoneImg}
              alt="Relationship Revive App"
              className="w-full h-auto object-contain"
              priority
            />
          </div>
        </div>

        {/* RIGHT BLOCK */}
        <div className="space-y-6 flex flex-col justify-center">
          <h2 className="text-black text-5xl sm:text-4xl font-semibold leading-snug">
            💚 Relationship Revive – A Safe Space for Healing
          </h2>

          <p className="text-black text-[21px] leading-relaxed">
            Neelu Taneja created Relationship Revive so people can reflect, heal,
            and grow — anytime, anywhere.
          </p>

          <h3 className="text-black text-[15px] font-medium">
            Inside the app, you will find:
          </h3>
          <ul className="list-disc pl-5 text-black text-[15px] space-y-4">
            <li>Daily healing lessons</li>
            <li>Guided emotional exercises</li>
            <li>Practical tools for communication</li>
            <li>Awareness-based relationship insights</li>
            <li>Safe conversations to understand yourself better</li>
          </ul>

          <p className="text-black text-[15px] leading-relaxed pt-1">
            Her goal is to make emotional healing accessible to everyone.
          </p>

          {/* BUTTONS */}
          <div className="flex flex-wrap gap-4 pt-4">
            {/* ✅ Start your journey -> opens Dialog */}
            <Dialog open={open} onOpenChange={setOpen}>
              <DialogTrigger asChild>
                <button className="bg-[#5E936C] text-black px-6 py-2 rounded-full text-sm hover:bg-green-300 transition">
                  Start your journey
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
                            <SelectItem value="WhatsApp Voice Call">
                              WhatsApp Voice Call
                            </SelectItem>
                            <SelectItem value="Video Call">Video Call</SelectItem>
                            <SelectItem value="In Person">In Person</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="space-y-2">
                        <Label className="text-[#1f2a22]">Service Type *</Label>
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
                            <SelectItem value="Couples Communication Program">
                              Couples Communication Program
                            </SelectItem>
                            <SelectItem value="Emotional Resilience Sessions">
                              Emotional Resilience Sessions
                            </SelectItem>
                            <SelectItem value="Breakup Recovery Support">
                              Breakup Recovery Support
                            </SelectItem>
                            <SelectItem value="Trauma Recovery & Emotional Healing">
                              Trauma Recovery & Emotional Healing
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
                        <Label className="text-[#1f2a22]">Preferred Date *</Label>
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

            <button className="border border-gray-400 text-black px-6 py-2 rounded-full text-sm hover:bg-green-300 transition">
              Download the App
            </button>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
