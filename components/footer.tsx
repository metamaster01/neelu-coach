export default function Footer() {
  return (
    <footer
      className="text-gray-900 py-16 px-8"
      style={{
        background: `linear-gradient(180deg, #D4E8D8 0%, #D4E8D8 30%, #E8F5F0 70%, #FFFFFF 100%)`,
      }}
    >
      {/* Main content */}
      <div className="max-w-7xl mx-auto mb-12">
        {/* Logo */}
        <div className="mb-12">
          <h2
            className="text-3xl font-bold mb-1"
            style={{ fontFamily: "var(--font-caveat)" }}
          >
            <span className="text-black">Neelu </span>
            <span className="font-bold text-[#5E936C]">T.</span>
          </h2>
        </div>

        {/* Three columns */}
        <div className="grid grid-cols-3 gap-12">
          {/* Company Column */}
          <div>
            <h3 className="font-bold text-gray-900 mb-4">Company</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-800 hover:text-[#5E936C] transition">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-800 hover:text-[#5E936C] transition">
                  Podcast
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-800 hover:text-[#5E936C] transition">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-800 hover:text-[#5E936C] transition">
                  Blog & News
                </a>
              </li>
            </ul>
          </div>

          {/* Resources Column */}
          <div>
            <h3 className="font-bold text-gray-900 mb-4">Resources</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-800 hover:text-[#5E936C] transition">
                  Content Creation
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-800 hover:text-[#5E936C] transition">
                  Promotion and Marketing
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-800 hover:text-[#5E936C] transition">
                  Monetization
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-800 hover:text-[#5E936C] transition">
                  Legal and Copyright
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info Column */}
          <div>
            <h3 className="font-bold text-gray-900 mb-4">Contact info</h3>
            <ul className="space-y-3">
              <li>
                <a href="tel:+13330000000" className="text-gray-800 hover:text-[#5E936C] transition">
                  +1 (333) 000-0000
                </a>
              </li>
              <li>
                <a
                  href="mailto:hello@neelutaneja.com"
                  className="text-gray-800 hover:text-[#5E936C] transition underline"
                >
                  hello@neelutaneja.com
                </a>
              </li>
              <li className="text-gray-800 text-sm leading-relaxed">
                Tower-17-002, Orchid Petals, Sohna Road,
                <br />
                Sector 49, Gurugram, Haryana 122018
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom section */}
      <div className="max-w-7xl mx-auto border-t border-gray-300 pt-8 flex justify-between items-center">
        <p className="text-gray-800 text-sm">Copyright © 2023 neelutaneja</p>
        <div className="flex gap-4 text-gray-800 text-sm">
          <a href="#" className="hover:text-[#5E936C] transition">
            Terms of Use
          </a>
          <span className="text-gray-400">|</span>
          <a href="#" className="hover:text-[#5E936C] transition">
            Privacy Policy
          </a>
        </div>
      </div>
    </footer>
  )
}
