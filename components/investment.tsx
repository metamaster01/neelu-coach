"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Podcast } from "lucide-react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
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

export default function Investment() {
  const [hearts, setHearts] = useState<{ floating: any[]; explosion: any[] }>({
    floating: [],
    explosion: [],
  });

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
    const f = [...Array(18)].map(() => ({
      top: Math.random() * 100 + "%",
      left: Math.random() * 100 + "%",
      size: Math.random() * 18 + 12 + "px",
      duration: 6 + Math.random() * 4,
    }));

    const e = [...Array(12)].map(() => ({
      fontSize: 10 + Math.random() * 14 + "px",
      x: (Math.random() - 0.5) * 200,
      y: (Math.random() - 0.5) * 200,
    }));
    setHearts({ floating: f, explosion: e });
  }, []);

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
    <section className="bg-[#faf6f3] py-16 px-4 md:px-8 overflow-hidden relative">
      {/* BACKGROUND WAVES */}
      <motion.div
        className="absolute inset-0 -z-30 opacity-40"
        animate={{
          background: [
            "radial-gradient(circle at 20% 30%, #ffdad5, transparent 60%)",
            "radial-gradient(circle at 80% 60%, #ffd2e8, transparent 60%)",
            "radial-gradient(circle at 50% 40%, #ffe5d0, transparent 60%)",
          ],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          repeatType: "mirror",
          type: "keyframes",
        }}
      />

      {/* FLOATING HEARTS */}
      <div className="absolute inset-0 pointer-events-none -z-20">
        {hearts.floating.map((h, i) => (
          <motion.div
            key={i}
            className="absolute text-rose-400/40 select-none"
            style={{
              top: h.top,
              left: h.left,
              fontSize: h.size,
            }}
            animate={{
              y: [0, -25, 0],
              opacity: [0.15, 0.4, 0.15],
              rotate: [0, 8, -8, 0],
            }}
            transition={{
              duration: h.duration,
              repeat: Infinity,
              ease: "easeInOut",
              type: "keyframes",
            }}
          >
            ♥
          </motion.div>
        ))}
      </div>

      {/* SOFT COUPLE SILHOUETTE */}
      <div className="absolute bottom-0 left-0 right-0 mx-auto w-[600px] h-[350px] -z-10 opacity-20 bg-[url('/couple-silhouette.png')] bg-contain bg-no-repeat bg-center blur-xl" />

      {/* AMBIENT ROMANTIC PULSE */}
      <motion.div
        className="absolute w-[600px] h-[600px] bg-rose-300 rounded-full blur-[150px] top-10 left-1/2 -translate-x-1/2 -z-10 opacity-30"
        animate={{ scale: [1, 1.2, 1], opacity: [0.25, 0.45, 0.25] }}
        transition={{ duration: 6, repeat: Infinity, type: "keyframes" }}
      />

      {/* SECTION FADE-IN */}
      <motion.div
        initial={{ filter: "blur(12px)", opacity: 0.6 }}
        whileInView={{ filter: "blur(0px)", opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="max-w-5xl mx-auto">
          {/* HEADING */}
          <div className="text-center mb-12">
            <motion.h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-4 text-balance">
              {"Your Investment in Growth".split(" ").map((word, i) => (
                <motion.span
                  key={i}
                  className="inline-block mr-2"
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.15 }}
                >
                  {word}
                </motion.span>
              ))}
            </motion.h2>

            <motion.div
              className="mx-auto w-32 h-1 bg-rose-300 rounded-full"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 0.8 }}
            />

            <motion.p
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="text-muted-foreground max-w-2xl mx-auto mt-4"
            >
              Every journey begins with one intentional step.
            </motion.p>
          </div>

          {/* MAIN LAYOUT */}
          <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-start">
            {/* IMAGE + EXPLOSION HEARTS */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              className="relative w-full md:w-1/2"
            >
              <motion.div
                style={{ perspective: 1000 }}
                whileHover={{ rotateY: 6, rotateX: -3, scale: 1.06 }}
                transition={{ type: "spring", stiffness: 120 }}
                className="rounded-2xl overflow-hidden relative group"
              >
                {hearts.explosion.map((h, i) => (
                  <motion.div
                    key={i}
                    className="absolute text-rose-500/70 opacity-0 pointer-events-none"
                    style={{
                      top: "50%",
                      left: "50%",
                      fontSize: h.fontSize,
                    }}
                    animate={{
                      x: [0, h.x],
                      y: [0, h.y],
                      opacity: [0, 1, 0],
                    }}
                    transition={{
                      duration: 0.9,
                      repeat: Infinity,
                      repeatDelay: 2,
                      ease: "easeInOut",
                      type: "keyframes",
                    }}
                  >
                    ♥
                  </motion.div>
                ))}

                {/* FLARE */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/25 to-transparent"
                  animate={{ x: ["-100%", "100%"] }}
                  transition={{
                    duration: 2.3,
                    repeat: Infinity,
                    repeatDelay: 2,
                    type: "keyframes",
                  }}
                />

                <Image
                  src="/investment.png"
                  alt="Happy couple embracing"
                  width={500}
                  height={400}
                  className="w-full h-auto object-cover"
                />
              </motion.div>
            </motion.div>

            {/* CONTENT */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="w-full md:w-1/2"
            >
              <h3 className="text-2xl md:text-3xl font-semibold text-foreground mb-4">
                1:1 Relationship Coaching
              </h3>

              <p className="text-muted-foreground mb-6 leading-relaxed">
                When love feels distant, we reconnect the emotional threads that
                matter.
              </p>

              <div className="flex items-center gap-2 mb-6">
                <div className="w-8 h-8 bg-[#f0e6df] rounded-full flex items-center justify-center">
                  <Podcast className="w-4 h-4 text-foreground" />
                </div>
                <span className="text-muted-foreground">4-week package</span>
              </div>

              <div className="mb-6">
                <h4 className="font-semibold text-foreground mb-3">
                  Includes:
                </h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Weekly 1:1 coaching calls (60 min)</li>
                  <li>• Personalized emotional blueprint</li>
                  <li>• Tools for communication &amp; trust rebuilding</li>
                </ul>
              </div>

              {/* CTA + Dialog */}
              <motion.div
                className="relative"
                whileHover={{ scale: 1.06 }}
                animate={{ scale: [1, 1.05, 1] }}
                transition={{
                  duration: 1.4,
                  repeat: Infinity,
                  type: "keyframes",
                }}
              >
                <motion.div
                  className="absolute -top-5 -left-6 text-rose-400/50 text-xl select-none"
                  animate={{ rotate: [-6, 6, -6] }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                    type: "keyframes",
                  }}
                >
                  ✦
                </motion.div>

                <motion.div
                  className="absolute -bottom-5 -right-6 text-rose-400/50 text-xl select-none"
                  animate={{ rotate: [6, -6, 6] }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                    type: "keyframes",
                  }}
                >
                  ✦
                </motion.div>

                <Dialog open={open} onOpenChange={setOpen}>
                  <DialogTrigger asChild>
                    <Button className="bg-foreground hover:bg-rose-600 text-background rounded-full px-8 py-6 text-base shadow-lg">
                      Book a Free Clarity Call
                    </Button>
                  </DialogTrigger>

                  {/* ===== DIALOG (ONLY PLACE WITH #5E936C THEME) ===== */}
                  <DialogContent className="sm:max-w-[580px] overflow-hidden rounded-2xl border border-[#5E936C]/25 bg-[#fbfdfb] p-0 shadow-xl">
                    {/* top accent bar */}
                    <div className="h-1.5 w-full bg-[#5E936C]" />

                    <div className="p-6">
                      <DialogHeader>
                        <DialogTitle className="text-[#1f2a22] text-xl">
                          Book a Free Clarity Call
                        </DialogTitle>
                        <p className="text-[#1f2a22]/70 text-sm mt-1">
                          Fill this out and we’ll reach you in your preferred
                          way.
                        </p>
                      </DialogHeader>

                      <form onSubmit={handleSubmit} className="space-y-4 mt-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
                                setForm({
                                  ...form,
                                  preferred_time_slot: v,
                                })
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

                        <div className="pt-2 flex gap-3">
                          <Button
                            type="submit"
                            disabled={submitting}
                            className="bg-[#5E936C] hover:bg-[#4f7e5e] text-white rounded-full px-6"
                          >
                            {submitting ? "Submitting..." : "Submit Request"}
                          </Button>

                          <Button
                            type="button"
                            variant="outline"
                            onClick={() => setOpen(false)}
                            className="rounded-full border border-[#5E936C]/35 text-[#2b3a30] hover:bg-[#5E936C]/10 bg-white/70"
                          >
                            Close
                          </Button>
                        </div>
                      </form>
                    </div>
                  </DialogContent>
                </Dialog>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
