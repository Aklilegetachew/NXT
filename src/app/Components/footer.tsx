import Link from "next/link";
import { Facebook, Instagram, Linkedin, Send } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#010145] text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and Contact Info */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center gap-2">
              <div className="h-12 w-12 bg-white rounded"></div>
              <span className="text-xl font-semibold">NXT</span>
            </Link>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="mt-1">📞</div>
                <div>
                  <p className="font-semibold">+251 11 557 4409</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="mt-1">✉️</div>
                <div>
                  <p>info@versavvymedia.com</p>
                  <p>sales@versavvymedia.com</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="mt-1">📍</div>
                <div>
                  <p>Sterling Bldg. | First</p>
                  <p>Floor Olympia, Gazebo</p>
                  <p>Roundabout Addis</p>
                  <p>Ababa, Ethiopia</p>
                </div>
              </div>
            </div>
          </div>

          {/* Our Mission */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold">Our Mission</h3>
            <p className="leading-relaxed">
              To Design, Integrate And Support Cutting Edge Media And
              Communication Technologies For A Connected World.
            </p>
            <div className="flex gap-4">
              <Link href="#" className="hover:text-gray-300 transition-colors">
                <Instagram className="h-6 w-6" />
              </Link>
              <Link href="#" className="hover:text-gray-300 transition-colors">
                <Send className="h-6 w-6" />
              </Link>
              <Link href="#" className="hover:text-gray-300 transition-colors">
                <Facebook className="h-6 w-6" />
              </Link>
              <Link href="#" className="hover:text-gray-300 transition-colors">
                <Linkedin className="h-6 w-6" />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold">Quick Links</h3>
            <nav className="space-y-3">
              <Link
                href="/"
                className="block hover:text-gray-300 transition-colors"
              >
                HOME
              </Link>
              <Link
                href="/services"
                className="block hover:text-gray-300 transition-colors"
              >
                SERVICES
              </Link>
              <Link
                href="/contact"
                className="block hover:text-gray-300 transition-colors"
              >
                CONTACT
              </Link>
              <Link
                href="/about"
                className="block hover:text-gray-300 transition-colors"
              >
                ABOUT
              </Link>
            </nav>
          </div>

          {/* Solutions */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold">Solutions</h3>
            <nav className="space-y-3">
              <Link
                href="/solutions/digital-signage"
                className="block hover:text-gray-300 transition-colors"
              >
                DIGITAL SIGNAGE
              </Link>
              <Link
                href="/solutions/digital-marketing"
                className="block hover:text-gray-300 transition-colors"
              >
                DIGITAL MARKETING
              </Link>
              <Link
                href="/solutions/broadcast"
                className="block hover:text-gray-300 transition-colors"
              >
                BROADCAST
              </Link>
              <Link
                href="/solutions/storage"
                className="block hover:text-gray-300 transition-colors"
              >
                STORAGE
              </Link>
              <Link
                href="/solutions/ott"
                className="block hover:text-gray-300 transition-colors"
              >
                OTT
              </Link>
            </nav>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-white/10 text-center">
          <p>
            &copy; {new Date().getFullYear()} Your Company. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
