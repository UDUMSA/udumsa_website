import Image from "next/image";
import MobileNavDrawer from "../MobileNavDrawer";
import NavItem from "../NavItem";
import { X } from "lucide-react";

export default function Navbar() {
    const navLinks = [
        { name: 'Home', href: '/' },
        { name: 'About Us', href: '/about' },
        { name: 'News & Events', href: '/news-and-events' },
        { name: 'Contact Us', href: '/contact-us' },
    ];
    return <header
        className="sticky top-0 z-50 w-full bg-nav-white px-6 py-2.5 shadow-sm md:px-12 animate-fade-down"
    >
        <div className="mx-auto flex max-w-7xl items-center justify-between">
            <div>
                <Image
                    src="/logo.jpeg"
                    alt="UDUMSA Logo"
                    width={237}
                    height={80}
                    className="md:inline hidden w-[218px] h-[64px] lg:w-[237px] lg:h-[80px] object-cover"
                />
                <Image
                    src="/logo2.png"
                    alt="UDUMSA Logo"
                    width={60}
                    height={60}
                    className="md:hidden object-cover"
                />

            </div>
            <nav className="hidden lg:block">
                <ul className="flex items-center text-lg gap-8 font-medium">
                    {navLinks.map((link) => (
                        <li key={link.name}>
                            <NavItem href={link.href} label={link.name} />
                        </li>
                    ))}
                </ul>
            </nav>

            <div className="flex items-center gap-8">
                <a
                    href="https://portal.udumsa.com/signup"
                    className="rounded-2xl bg-primary hidden md:inline lg:px-8 lg:py-4.5 px-6 py-3.5 text-sm lg:text-base font-medium text-white shadow-lg transition-all"
                >
                    Membership
                </a>
                <MobileNavDrawer />
            </div>
        </div>

        <div
            className="fixed inset-y-0 right-0 z-50 w-full max-w-xs bg-white p-6 shadow-xl hidden lg:hidden"
        >
            <div className="flex justify-end">
                <button ><X size={28} /></button>
            </div>
            <div className="mt-12 flex flex-col gap-6">
                {navLinks.map((link) => (
                    <a
                        key={link.name}
                        href={link.href}
                        className="text-lg font-bold text-gray-800 hover:text-primary"
                    >
                        {link.name}
                    </a>
                ))}
                <button className="mt-4 rounded-full bg-primary py-3 font-bold text-white">
                    Membership
                </button>
            </div>
        </div>
    </header>
}