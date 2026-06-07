"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";


export default function MobileNavDrawer() {
    const [isOpen, setIsOpen] = useState(false);
    const navLinks = [
        { name: 'Home', href: '/' },
        { name: 'About Us', href: '/about' },
        { name: 'News & Events', href: '/news-and-events' },
        { name: 'Contact Us', href: '/contact-us' },
    ];
    return <>
        <button className="text-primary lg:hidden cursor-pointer" onClick={() => setIsOpen(true)}>
            {false ? <X size={28} /> : <Menu size={32} />}
        </button>
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 100 }}
                    className="fixed inset-y-0 right-0 z-50 w-full max-w-xs bg-white p-6 shadow-xl lg:hidden"
                >
                    <div className="flex justify-end">
                        <button className="cursor-pointer" onClick={() => setIsOpen(false)}><X size={28} /></button>
                    </div>
                    <ul className="mt-12 flex flex-col gap-6">
                        {navLinks.map((link) => (
                            <li key={link.name}>
                                <Link
                                    href={link.href}
                                    className="text-lg font-semibold text-gray-800 hover:text-primary"
                                    onClick={() => setIsOpen(false)}
                                >
                                    {link.name}
                                </Link>
                            </li>
                        ))}
                        <a href="https://portal.udumsa.com/signup" className="mt-4 text-center rounded-full bg-primary py-3 font-bold text-white">
                            Membership
                        </a>
                    </ul>
                </motion.div>
            )}
        </AnimatePresence>
    </>
}