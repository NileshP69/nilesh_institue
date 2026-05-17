import Link from "next/link";
import Image from "next/image";
import { MapPin, Phone, Mail, ArrowRight } from "lucide-react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import logoImg from "@/assets/image/logo.png";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-16 pb-8 border-t border-gray-800">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* About Section */}
          <div className="flex flex-col gap-4">
            <Link href="/" className="flex items-center gap-3 mb-2">
              <div className="relative w-12 h-12 bg-white rounded-full flex items-center justify-center p-1 overflow-hidden">
                <Image 
                  src={logoImg} 
                  alt="Shri Amar Computer Institution Logo" 
                  fill
                  className="object-contain rounded-full"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-lg text-white">Shri Amar</span>
                <span className="text-xs font-semibold tracking-wide text-gray-400">
                  Computer Institution
                </span>
              </div>
            </Link>
            <p className="text-sm leading-relaxed text-gray-400">
              Empowering Rural Education Through Technology. A premier institution running under Shri Amar Shiksha Kalyan Samiti, Lalgaon.
            </p>
            <div className="flex gap-4 mt-2">
              <a href="#" className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center hover:bg-[var(--color-primary)] hover:text-white transition-colors">
                <FaFacebookF size={14} />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center hover:bg-[var(--color-primary)] hover:text-white transition-colors">
                <FaTwitter size={14} />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center hover:bg-[var(--color-primary)] hover:text-white transition-colors">
                <FaInstagram size={14} />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center hover:bg-[var(--color-primary)] hover:text-white transition-colors">
                <FaLinkedinIn size={14} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-6 relative inline-block">
              Quick Links
              <span className="absolute -bottom-2 left-0 w-12 h-1 bg-[var(--color-primary)] rounded-full"></span>
            </h3>
            <ul className="flex flex-col gap-3">
              {[
                { name: "Home", path: "/" },
                { name: "About Institute", path: "/about" },
                { name: "Our Courses", path: "/courses" },
                { name: "Gallery", path: "/gallery" },
                { name: "Contact Us", path: "/contact" },
                { name: "Admission Form", path: "/apply" }
              ].map((link) => (
                <li key={link.name}>
                  <Link href={link.path} className="text-sm hover:text-[var(--color-primary)] transition-colors flex items-center gap-2 group">
                    <ArrowRight size={14} className="text-gray-600 group-hover:text-[var(--color-primary)] transition-colors" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Courses */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-6 relative inline-block">
              Our Courses
              <span className="absolute -bottom-2 left-0 w-12 h-1 bg-[var(--color-primary)] rounded-full"></span>
            </h3>
            <ul className="flex flex-col gap-3">
              <li>
                <Link href="/courses" className="text-sm hover:text-[var(--color-primary)] transition-colors flex items-center gap-2 group">
                  <ArrowRight size={14} className="text-gray-600 group-hover:text-[var(--color-primary)] transition-colors" />
                  PGDCA (1 Year)
                </Link>
              </li>
              <li>
                <Link href="/courses" className="text-sm hover:text-[var(--color-primary)] transition-colors flex items-center gap-2 group">
                  <ArrowRight size={14} className="text-gray-600 group-hover:text-[var(--color-primary)] transition-colors" />
                  DCA (1 Year)
                </Link>
              </li>
              <li>
                <Link href="/courses" className="text-sm hover:text-[var(--color-primary)] transition-colors flex items-center gap-2 group">
                  <ArrowRight size={14} className="text-gray-600 group-hover:text-[var(--color-primary)] transition-colors" />
                  CPCT
                </Link>
              </li>
              <li>
                <Link href="/courses" className="text-sm hover:text-[var(--color-primary)] transition-colors flex items-center gap-2 group">
                  <ArrowRight size={14} className="text-gray-600 group-hover:text-[var(--color-primary)] transition-colors" />
                  Basic Computer
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-6 relative inline-block">
              Contact Info
              <span className="absolute -bottom-2 left-0 w-12 h-1 bg-[var(--color-primary)] rounded-full"></span>
            </h3>
            <ul className="flex flex-col gap-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-[var(--color-primary)] shrink-0 mt-0.5" />
                <span>N.H. 135 B.D. Kyoti Road, New Bus Stand, Lalgaon, Rewa (M.P.)</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-[var(--color-primary)] shrink-0" />
                <span>+91 9424927574, +91 7000685215</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-[var(--color-primary)] shrink-0" />
                <span>info@shriamarcomputer.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
          <p>
            &copy; {new Date().getFullYear()} Shri Amar Computer Institution, Lalgaon. All rights reserved.
          </p>
          <div className="flex gap-4">
            <Link href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms-conditions" className="hover:text-white transition-colors">Terms & Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
