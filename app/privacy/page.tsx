import Footer from "@/components/footer";

export default function PrivacyPage() {
  return (
    <main className="w-full bg-white">
      {/* HERO */}
      <section className="w-full bg-[#5E936C] py-32 text-center">
        <h1 className="text-white text-4xl md:text-5xl  font-semibold">
          Privacy Policy
        </h1>
        <p className="mt-4 text-white/90 text-sm md:text-base max-w-xl mx-auto">
          Your privacy, trust, and emotional safety matter deeply to us.
        </p>
      </section>

      {/* CONTENT */}
      <section className="max-w-4xl mx-auto px-6 py-20 space-y-14 text-gray-700 leading-relaxed text-[15px]">
        
        {/* INTRO */}
        <div className="space-y-4">
          <p>
            At <strong>Neelu Taneja – Relationship & Emotional Healing Coach</strong>,
            we are committed to protecting your privacy and maintaining the
            confidentiality of all personal and emotional information you share
            with us. This Privacy Policy explains how we collect, use, protect,
            and respect your data when you interact with our website, services,
            or coaching programs.
          </p>
          <p>
            By using this website or submitting your information, you agree to
            the practices described in this policy.
          </p>
        </div>

        
        <div>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            1. Information We Collect
          </h2>
          <p className="mb-3">
            We may collect personal and contact information when you:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Fill out contact or inquiry forms</li>
            <li>Book a clarity call or coaching session</li>
            <li>Subscribe to newsletters or updates</li>
            <li>Communicate with us via email or phone</li>
          </ul>
          <p className="mt-3">
            This information may include your name, email address, phone number,
            and any message or details you choose to share.
          </p>
        </div>

      
        <div>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            2. How We Use Your Information
          </h2>
          <p className="mb-3">
            Your information is used only for purposes aligned with emotional
            support, communication, and service improvement, including:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Responding to your inquiries or requests</li>
            <li>Scheduling and delivering coaching sessions</li>
            <li>Providing personalized guidance and resources</li>
            <li>Improving our website, services, and user experience</li>
            <li>Sending relevant updates (only if you opt-in)</li>
          </ul>
        </div>

        
        <div>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            3. Emotional & Session Confidentiality
          </h2>
          <p>
            We deeply respect the sensitive nature of emotional and relationship
            work. All personal information and discussions shared during coaching
            sessions are treated with strict confidentiality.
          </p>
          <p className="mt-3">
            We do not share, sell, or disclose your personal or emotional data to
            third parties without your consent, except where required by law.
          </p>
        </div>

        
        <div>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            4. Data Protection & Security
          </h2>
          <p>
            We take reasonable technical and organizational measures to protect
            your personal information from unauthorized access, misuse, loss,
            or disclosure.
          </p>
          <p className="mt-3">
            While we strive to safeguard your data, please note that no method of
            online transmission or electronic storage is completely secure.
          </p>
        </div>

        
        <div>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            5. Cookies & Website Analytics
          </h2>
          <p>
            This website may use cookies or basic analytics tools to understand
            visitor behavior, improve performance, and enhance user experience.
          </p>
          <p className="mt-3">
            These tools do not collect personally identifiable information unless
            you voluntarily provide it.
          </p>
        </div>

       
        <div>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            6. Your Rights & Choices
          </h2>
          <p className="mb-3">
            You have the right to:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Request access to your personal data</li>
            <li>Request correction of inaccurate information</li>
            <li>Request deletion of your data</li>
            <li>Withdraw consent for communications at any time</li>
          </ul>
          <p className="mt-3">
            To exercise any of these rights, you may contact us directly through
            the contact details provided on this website.
          </p>
        </div>

        
        <div>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            7. Policy Updates
          </h2>
          <p>
            This Privacy Policy may be updated from time to time to reflect
            changes in services, legal requirements, or best practices. Any
            updates will be posted on this page.
          </p>
        </div>

        <p className="text-sm text-gray-500 pt-8 border-t">
          Last updated: {new Date().getFullYear()}
        </p>
      </section>

      <Footer />
    </main>
  );
}
