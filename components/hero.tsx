"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

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

const YT_VIDEO_ID = "0T54OWG7Ds8";
const POSTER = `https://img.youtube.com/vi/${YT_VIDEO_ID}/maxresdefault.jpg`;

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

export default function Hero() {
  const [playing, setPlaying] = useState(false);
  const videoRef = useRef<HTMLIFrameElement | null>(null);

  const { scrollY } = useScroll();
  const zoom = useTransform(scrollY, [0, 400], [1, 1.12]);

  const pauseVideo = () => {
    videoRef.current?.contentWindow?.postMessage(
      JSON.stringify({ event: "command", func: "pauseVideo" }),
      "*"
    );
  };

  // ======================
  // ✅ Clarity Call Dialog State (same)
  // ======================
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
    <section
      className="relative overflow-hidden pt-38 pb-20"
      style={{
        background: "linear-gradient(180deg, #5E936C, #FFFFFF, #FFFFFF)",
      }}
    >
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h1 className="text-[22px] sm:text-[40px] md:text-[54px] lg:text-[52px] font-bold text-black leading-tight">
            Feeling disconnected, overwhelmed, or emotionally exhausted in{" "}
            <span className="text-[#4A6F4F]">your</span>{" "}
            <span className="text-[#4A6F4F]">relationship?</span>
          </h1>

          <p className="mt-4 max-w-xl mx-auto text-gray-600 text-sm sm:text-base">
            You’re not broken — you just need healing, clarity & support.
          </p>

          <div className="mt-6 flex flex-wrap justify-center gap-4">
            {/* ✅ Book a Free Clarity Call -> Dialog */}
            <Dialog open={open} onOpenChange={setOpen}>
              <DialogTrigger asChild>
                <button className="rounded-full bg-black text-white px-6 py-3 shadow text-sm sm:text-base hover:bg-green-400 transition">
                  Book a Free Clarity Call
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

            <a className="rounded-full border bg-gray-100 border-gray-300 px-5 py-3 text-sm sm:text-base hover:bg-green-400 transition">
              Learn More
            </a>
          </div>
        </motion.div>

        {/* TRUST BADGE */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.5 }}
          className="mt-8 flex justify-center"
        >
          <div className="inline-flex items-center gap-2 bg-green-100/80 border border-green-100 text-xs sm:text-sm rounded-full px-4 py-2 shadow-sm">
            <span className="text-yellow-500">★★★★★</span>
            <span className="text-gray-700">
              Trusted By 100+ women To Heal Emotional Wounds And Build Confidence…
            </span>
          </div>
        </motion.div>

        {/* Video box */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="flex justify-center mt-16 md:mt-20"
        >
          <motion.div
            style={{ scale: zoom }}
            className="relative w-full max-w-[1100px] h-[240px] sm:h-[340px] md:h-[440px] lg:h-[540px] rounded-2xl overflow-hidden border border-green-200 bg-white shadow-[0_12px_40px_rgba(94,147,108,0.28)]"
          >
            {!playing && (
              <>
                <img
                  src={POSTER}
                  alt="Video Poster"
                  className="w-full h-full object-cover"
                />

                <motion.button
                  aria-label="Play video"
                  onClick={() => setPlaying(true)}
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  whileHover={{ scale: 1.08 }}
                  whileTap={{ scale: 0.95 }}
                  className="
                    absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2
                    w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20
                    rounded-full flex items-center justify-center
                    bg-white/20 backdrop-blur-md
                    border border-white/70
                    shadow-[0_12px_40px_rgba(0,0,0,0.25)]
                  "
                >
                  <motion.span
                    aria-hidden
                    className="absolute inset-0 rounded-full border-2 border-white/60"
                    animate={{ scale: [1, 1.25, 1], opacity: [0.8, 0, 0.8] }}
                    transition={{
                      duration: 2.2,
                      repeat: Infinity,
                      ease: "easeOut",
                    }}
                  />

                  <svg
                    viewBox="0 0 24 24"
                    className="w-6 h-6 sm:w-7 sm:h-7 md:w-9 md:h-9 text-white drop-shadow"
                    fill="currentColor"
                  >
                    <path d="M8 5.5v13l11-6.5-11-6.5z" />
                  </svg>
                </motion.button>
              </>
            )}

            {playing && (
              <>
                <button
                  onClick={() => {
                    pauseVideo();
                    setPlaying(false);
                  }}
                  className="absolute top-4 right-4 z-50 w-10 h-10 bg-white text-black rounded-full shadow-2xl hover:scale-110 transition"
                >
                  ✕
                </button>

                <iframe
                  ref={videoRef}
                  src={`https://www.youtube.com/embed/${YT_VIDEO_ID}?autoplay=1&enablejsapi=1&controls=1`}
                  allow="autoplay; encrypted-media"
                  className="w-full h-full object-cover"
                ></iframe>
              </>
            )}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
