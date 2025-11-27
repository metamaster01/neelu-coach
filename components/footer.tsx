export default function Footer() {
  return (
    <footer className="bg-pink-200 text-gray-900 py-16 px-8">
      {/* Main content */}
      <div className="max-w-7xl mx-auto mb-12">
        {/* Logo */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-1">
            <span className="text-black">Neelu </span>
            <span className="text-pink-500 italic font-script">T.</span>
          </h2>
        </div>

        {/* Three columns */}
        <div className="grid grid-cols-3 gap-12">
          {/* Company Column */}
          <div>
            <h3 className="font-bold text-gray-900 mb-4">Company</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-800 hover:text-gray-600 transition">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-800 hover:text-gray-600 transition">
                  Podcast
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-800 hover:text-gray-600 transition">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-800 hover:text-gray-600 transition">
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
                <a href="#" className="text-gray-800 hover:text-gray-600 transition">
                  Content Creation
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-800 hover:text-gray-600 transition">
                  Promotion and Marketing
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-800 hover:text-gray-600 transition">
                  Monetization
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-800 hover:text-gray-600 transition">
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
                <a href="tel:+13330000000" className="text-gray-800 hover:text-gray-600 transition">
                  +1 (333) 000-0000
                </a>
              </li>
              <li>
                <a
                  href="mailto:hello@neelutaneja.com"
                  className="text-gray-800 hover:text-gray-600 transition underline"
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
          <a href="#" className="hover:text-gray-600 transition">
            Terms of Use
          </a>
          <span className="text-gray-400">|</span>
          <a href="#" className="hover:text-gray-600 transition">
            Privacy Policy
          </a>
        </div>
      </div>
    </footer>
  )
}
