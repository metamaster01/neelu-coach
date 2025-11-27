"use client"

import { Button } from "@/components/ui/button"

export default function Rebuild() {
  return (
    <main className="min-h-screen bg-background">
      {/* CTA Section */}
      <section className="flex items-center justify-center px-4 py-20">
        <div className="w-full max-w-2xl rounded-3xl px-8 py-16 text-center" style={{ backgroundColor: "#EC407A" }}>
          <h1 className="text-balance text-4xl font-bold text-white md:text-5xl">
            Ready to rebuild love and feel truly understood?
          </h1>
          <p className="mt-4 text-lg text-white/90">Start your healing journey with a safe, one-on-one clarity call.</p>
          <div className="mt-8 flex justify-center">
            <Button
              size="lg"
              className="rounded-full bg-white px-8 text-base font-semibold hover:bg-white/90"
              style={{ color: "#EC407A" }}
            >
              Book A 1:1 Clarity Call
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}
