import Footer from "@/components/footer";

export default function TermsPage() {
  return (
    <main className="w-full bg-white">
      {/* HERO */}
      <section className="w-full bg-[#5E936C] py-24 text-center">
        <h1 className="text-white text-4xl md:text-5xl font-semibold">
          Terms of Use
        </h1>
        <p className="mt-3 text-white/90 text-sm max-w-xl mx-auto">
          These Terms outline the rules, responsibilities, and expectations for using
          our website and coaching services. Please read them carefully.
        </p>
      </section>

      {/* CONTENT */}
      <section className="max-w-4xl mx-auto px-6 py-20 space-y-12 text-gray-700 leading-relaxed">
        
        
        <div>
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">
            1. Acceptance of Terms
          </h2>
          <p>
            By accessing, browsing, or using this website and any services provided by{" "}
            <strong>Neelu Taneja – Relationship Coach</strong>, you acknowledge that you
            have read, understood, and agree to be bound by these Terms of Use.
          </p>
          <p className="mt-2">
            If you do not agree with any part of these terms, you should discontinue
            use of the website and services immediately.
          </p>
        </div>

        
        <div>
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">
            2. Nature of Coaching Services
          </h2>
          <p>
            Coaching services offered on this website are designed to support personal
            growth, emotional clarity, and relationship development.
          </p>
          <p className="mt-2">
            Coaching is not a replacement for professional medical, psychological,
            psychiatric, or legal advice. If you are experiencing severe emotional
            distress, trauma, or mental health challenges, you are encouraged to seek
            support from a licensed healthcare professional.
          </p>
        </div>

       
        <div>
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">
            3. User Responsibilities
          </h2>
          <p>
            By using our website or services, you agree to:
          </p>
          <ul className="list-disc pl-6 space-y-2 mt-3">
            <li>Provide accurate, current, and complete information</li>
            <li>Use the services responsibly and respectfully</li>
            <li>Take full responsibility for your decisions, actions, and results</li>
            <li>Refrain from any misuse, abuse, or unauthorized use of the website</li>
          </ul>
        </div>

        
        <div>
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">
            4. Intellectual Property Rights
          </h2>
          <p>
            All content available on this website — including text, images, videos,
            graphics, branding, layouts, and design elements — is the intellectual
            property of <strong>Neelu Taneja</strong>, unless otherwise stated.
          </p>
          <p className="mt-2">
            You may not copy, reproduce, distribute, modify, or republish any content
            without prior written consent.
          </p>
        </div>

        
        <div>
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">
            5. Payments, Bookings & Cancellations
          </h2>
          <p>
            Any fees for coaching sessions, programs, or services must be paid in
            advance unless otherwise specified.
          </p>
          <p className="mt-2">
            Cancellation, rescheduling, or refund policies (if applicable) will be
            communicated separately at the time of booking or service agreement.
          </p>
        </div>

       
        <div>
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">
            6. Limitation of Liability
          </h2>
          <p>
            To the fullest extent permitted by law, <strong>Neelu Taneja</strong> shall
            not be liable for any direct, indirect, incidental, or consequential damages
            arising from the use or inability to use the website or services.
          </p>
          <p className="mt-2">
            Results from coaching vary for each individual, and no specific outcomes are
            guaranteed.
          </p>
        </div>

       
        <div>
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">
            7. External Links
          </h2>
          <p>
            This website may contain links to third-party websites for additional
            resources or convenience. We are not responsible for the content, accuracy,
            or privacy practices of those external sites.
          </p>
        </div>

        
        <div>
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">
            8. Modifications to Terms
          </h2>
          <p>
            We reserve the right to update or modify these Terms of Use at any time.
            Changes will be effective immediately upon posting on this page.
          </p>
          <p className="mt-2">
            Continued use of the website after changes indicates acceptance of the
            updated terms.
          </p>
        </div>

        
        <div>
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">
            9. Governing Law
          </h2>
          <p>
            These Terms of Use shall be governed and interpreted in accordance with
            applicable laws, without regard to conflict of law principles.
          </p>
        </div>

        
        <p className="text-sm text-gray-500 pt-8 text-center">
          Last updated: {new Date().getFullYear()}
        </p>
      </section>

      <Footer />
    </main>
  );
}
