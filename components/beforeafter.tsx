"use client"

export default function BeforeAfter() {
  const beforePoints = [
    "Constantly giving without receiving",
    "Silencing your needs to keep the peace",
    "Questioning your worth in love",
    "Feeling emotionally alone, even when partnered",
  ]

  const afterPoints = [
    "Loving without losing yourself",
    "Trusting your needs, voice, and intuition",
    "Setting healthy boundaries without guilt",
    "Feeling whole, grounded, and safe in connection",
  ]

  return (
    <section className="w-full py-16 px-4 md:px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            You <span className="text-red-600">Before</span> & <span className="text-green-600">After</span> Coaching
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
            Healing isn't about becoming someone new — it's about coming home to yourself.
            <br />
            Here's what changes when you start doing the inner work.
          </p>
        </div>

        {/* Before and After Cards */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Before Card */}
          <div className="rounded-2xl p-8 md:p-10 bg-red-50 dark:bg-red-950/30">
            <h3 className="text-2xl font-bold text-red-600 mb-6 flex items-center gap-2">
              <span>❤️</span>
              You Before Sessions
            </h3>
            <ul className="space-y-3">
              {beforePoints.map((point, index) => (
                <li key={index} className="flex items-start gap-3 text-gray-700 dark:text-gray-300">
                  <span className="text-red-600 mt-0.5">♥</span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* After Card */}
          <div className="rounded-2xl p-8 md:p-10 bg-green-50 dark:bg-green-950/30">
            <h3 className="text-2xl font-bold text-green-600 mb-6 flex items-center gap-2">
              <span>💚</span>
              You After Sessions
            </h3>
            <ul className="space-y-3">
              {afterPoints.map((point, index) => (
                <li key={index} className="flex items-start gap-3 text-gray-700 dark:text-gray-300">
                  <span className="text-green-600 mt-0.5">♥</span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
