import { Mail, Phone } from "lucide-react";
import Image from "next/image";
import { FaFacebook, FaInstagramSquare, FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

export default function Footer() {
  const quickLinks = [
    { name: "About Us", href: "#" },
    { name: "News and events", href: "#" },
    { name: "Contact Us", href: "#" },
    { name: "Testimonials", href: "#" },
    { name: "FAQs", href: "#" },
  ];

  const socialLinks = [
    {
      name: "Instagram",
      icon: FaInstagramSquare,
      href: "https://www.instagram.com/official_udumsa?igsh=OGoxdHZtY2s0dTI5",
    },
    {
      name: "Facebook",
      icon: FaFacebook,
      href: "https://www.facebook.com/share/18QegNF1mS/?mibextid=wwXIfr",
    },
    {
      name: "LinkedIn",
      icon: FaLinkedin,
      href: "https://www.linkedin.com/company/we-are-udumsa/",
    },
    {
      name: "X (Twitter)",
      icon: FaSquareXTwitter,
      href: "https://x.com/official_udumsa",
    },
  ];
  return (
    <footer className="bg-primary text-white font-montserrat px-6 md:px-12 lg:px-24 py-16 mt-20 animate-[fade-up_0.6s_ease-out_0.3s_forwards]">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-2 pr-0 lg:pr-10">
            <div className="flex items-center gap-3 mb-8">
              <Image
                width={50}
                height={50}
                src={"/logo2.jpg"}
                alt="UDUMSA Logo"
                className="h-[50px] w-[50px] rounded-lg object-cover"
              />
              <h1 className="font-montserrat text-[48px] font-bold leading-[100%]">
                UDUMSA
              </h1>
            </div>
            <p className="text-base text-white max-w-[400px] mb-8">
              Committed to academic excellence, community service, leadership
              development, and advancing the future of healthcare.
            </p>
            {/* Social Media Links */}
            <div className="flex items-center gap-5">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <social.icon
                    className="transition-all duration-200 ease-out hover:scale-[1.15] hover:translate-y-[-3px] rounded-full text-white hover:text-white"
                    size={30}
                    strokeWidth={1.5}
                  />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold">Quick Links</h3>
            <ul className="mt-4 space-y-4">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-base text-white hover:underline leading-[100%] transition-colors w-fit"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold">Contact UDUMSA</h3>
            <ul className="mt-4 space-y-4">
              <li className="flex items-center gap-4">
                <div className="text-white shrink-0">
                  <Phone size={20} />
                </div>
                <p className="text-base text-white">08088888888</p>
              </li>
              <li className="flex items-center gap-4">
                <div className="text-white shrink-0">
                  <Mail size={20} />
                </div>
                <p className="text-base text-white">support@udumsa.com</p>
              </li>
            </ul>
          </div>
        </div>

        <hr className="my-12 border-white" />

        <div className="text-center md:text-left">
          <p className="text-lg text-white">
            @UDUMSA, {new Date().getFullYear()}. All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
}
