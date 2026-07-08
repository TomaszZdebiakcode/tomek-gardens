"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import Container from "@/components/ui/Container";

const navigation = [
    { label: "O nas", href: "#about" },
    { label: "Usługi", href: "#services" },
    { label: "Realizacje", href: "#gallery" },
    { label: "Kontakt", href: "#contact" },
];

export default function Navbar() {
    const [open, setOpen] = useState(false);

    return (
        <header className="fixed inset-x-0 top-5 z-50">
            <Container>
                <nav className="rounded-[34px] border border-white/10 bg-[#5b6f57]/80 backdrop-blur-xl">

                    {/* Desktop + Mobile top bar */}
                    <div className="flex h-16 items-center justify-between px-5">

                        {/* Logo */}
                        <Link
                            href="/"
                            className="flex items-center gap-3"
                            onClick={() => setOpen(false)}
                        >
                            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white">
                                🌿
                            </div>

                            <span className="font-heading text-[22px] font-semibold text-white leading-none">
                                Tomek Gardens
                            </span>
                        </Link>

                        {/* Desktop menu */}
                        <ul className="hidden items-center gap-8 lg:flex">
                            {navigation.map((item) => (
                                <li key={item.href}>
                                    <Link
                                        href={item.href}
                                        className="text-[15px] font-semibold text-white transition hover:text-[#d6ebc8]"
                                    >
                                        {item.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>

                        {/* Desktop CTA */}
                        <Link
                            href="#contact"
                            className="hidden rounded-full bg-[#b9d8a7] px-8 py-3 text-[15px] font-semibold text-[#17351f] transition hover:scale-105 lg:inline-flex"
                        >
                            Bezpłatna wycena →
                        </Link>

                        {/* Mobile Hamburger */}
                        <button
                            onClick={() => setOpen(!open)}
                            className="flex h-10 w-10 items-center justify-center rounded-full text-white lg:hidden"
                        >
                            {open ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>

                    {/* Mobile menu */}
                    {open && (
                        <div className="border-t border-white/10 px-5 pb-5 pt-4 lg:hidden">

                            <div className="flex flex-col gap-4">

                                {navigation.map((item) => (
                                    <Link
                                        key={item.href}
                                        href={item.href}
                                        onClick={() => setOpen(false)}
                                        className="text-lg font-semibold text-white"
                                    >
                                        {item.label}
                                    </Link>
                                ))}

                                <Link
                                    href="#contact"
                                    onClick={() => setOpen(false)}
                                    className="mt-2 flex h-12 items-center justify-center rounded-full bg-[#b9d8a7] font-semibold text-[#17351f]"
                                >
                                    Bezpłatna wycena
                                </Link>

                            </div>

                        </div>
                    )}

                </nav>
            </Container>
        </header>
    );
}