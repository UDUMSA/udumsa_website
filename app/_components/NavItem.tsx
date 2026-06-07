// NavItem.tsx (client component)
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavItem({ href, label }: { href: string; label: string }) {
    const pathname = usePathname();
    const isActive = pathname === href;

    return (
        <Link
            href={href}
            className={`relative transition-colors duration-300 hover:text-primary ${isActive ? "font-semibold text-primary after:content-[''] after:absolute after:h-0.5 after:w-3/4 after:bg-primary after:-bottom-1 after:-translate-1/2 after:left-1/2" : 'text-gray-800'}`}
        >
            {label}
        </Link>
    );
}