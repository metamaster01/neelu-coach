import { Button } from "@/components/ui/button"

export const metadata = {
  title: "Clarity Call - Rebuild Love & Feel Understood",
  description: "Start your healing journey with a safe, one-on-one clarity call.",
}

export default function Rebuild() {
  return (
    <div className="min-h-screen flex items-center justify-center p-4" style={{ backgroundColor: "#F5F5F0" }}>
      <div
        className="relative rounded-2xl overflow-hidden shadow-lg w-full max-w-5xl h-80"
        style={{
          backgroundImage: "url(/heart-pattern.png)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundColor: "#5E936C",
        }}
      >
        <div
          className="absolute inset-0 bg-gradient-to-r from-green-600/25 via-green-500/15 to-green-400/25"
          style={{ backgroundColor: "rgba(94, 147, 108, 0.1)" }}
        />

        <div className="relative z-10 text-center px-8 py-12 md:px-16 md:py-16 flex flex-col justify-center items-center h-full">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 text-balance leading-tight">
            Ready to rebuild love and feel truly understood?
          </h1>

          <p className="text-sm md:text-base text-white/95 mb-6 text-balance">
            Start your healing journey with a safe, one-on-one clarity call.
          </p>

          <Button
            size="lg"
            className="rounded-full px-8 py-3 text-base font-semibold hover:shadow-lg transition-all"
            style={{
              backgroundColor: "#FFFEF5",
              color: "#1a1a1a",
            }}
          >
            Book A 1:1 Clarity Call
          </Button>
        </div>
      </div>
    </div>
  )
}
