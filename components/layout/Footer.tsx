import Link from "next/link";
import { FaFacebookF, FaInstagram } from "react-icons/fa";

import {
    Phone,
    Mail,
    MapPin,
} from "lucide-react";

import Container from "@/components/ui/Container";

export default function Footer() {
    return (
        <footer className="border-t border-white/10 bg-[#08120d]  pt-12">

            <Container>

                <div className="py-16 lg:py-20">

                    <div className="grid gap-14 lg:grid-cols-3">

                        {/* LEFT */}

                        <div>

                            <Link
                                href="/"
                                className="inline-flex items-center gap-3"
                            >

                                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#b8d8a7] text-2xl">
                                    🌿
                                </div>

                                <span className="font-heading text-[36px] text-white">
                                    Tomek Gardens
                                </span>

                            </Link>

                            <p className="mt-6 max-w-[360px] text-[17px] leading-8 text-white/65">
                                Profesjonalne usługi ogrodnicze
                                w Szczecinie i okolicach.
                                Tworzymy zadbane ogrody,
                                które cieszą przez cały rok.
                            </p>

                        </div>

                        {/* NAVIGATION */}

                        <div>

                            <h3 className="text-[18px] font-semibold text-white">
                                Nawigacja
                            </h3>

                            <div className="mt-6 flex flex-col gap-4">

                                <Link
                                    href="#services"
                                    className="text-white/70 transition hover:text-[#b8d8a7]"
                                >
                                    Usługi
                                </Link>

                                <Link
                                    href="#gallery"
                                    className="text-white/70 transition hover:text-[#b8d8a7]"
                                >
                                    Realizacje
                                </Link>

                                <Link
                                    href="#pricing"
                                    className="text-white/70 transition hover:text-[#b8d8a7]"
                                >
                                    Cennik
                                </Link>

                                <Link
                                    href="#contact"
                                    className="text-white/70 transition hover:text-[#b8d8a7]"
                                >
                                    Kontakt
                                </Link>

                            </div>

                        </div>

                        {/* CONTACT */}

                        <div>

                            <h3 className="text-[18px] font-semibold text-white">
                                Kontakt
                            </h3>

                            <div className="mt-6 space-y-5">

                                <a
                                    href="tel:+48123123123"
                                    className="flex items-center gap-3 text-white/70 transition hover:text-[#b8d8a7]"
                                >
                                    <Phone size={18} />
                                    +48 123 456 789
                                </a>

                                <a
                                    href="mailto:kontakt@tomekgardens.pl"
                                    className="flex items-center gap-3 text-white/70 transition hover:text-[#b8d8a7]"
                                >
                                    <Mail size={18} />
                                    kontakt@tomekgardens.pl
                                </a>

                                <div className="flex items-center gap-3 text-white/70">
                                    <MapPin size={18} />
                                    Szczecin, Polska
                                </div>

                            </div>

                            <div className="mt-8 flex gap-4">

                                <a
                                    href="#"
                                    className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 transition hover:border-[#b8d8a7] hover:bg-[#143326]"
                                >
                                    <FaInstagram size={18} />
                                </a>

                                <a
                                    href="#"
                                    className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 transition hover:border-[#b8d8a7] hover:bg-[#143326]"
                                >
                                    <FaFacebookF size={18} />
                                </a>

                            </div>

                        </div>

                    </div>

                    {/* BOTTOM */}

                    <div className="mt-16 border-t border-white/10 pt-8">

                        <div className="flex flex-col items-center justify-between gap-4 text-center text-[15px] text-white/45 lg:flex-row">

                            <p>
                                © 2026 Tomek Gardens. Wszystkie prawa zastrzeżone.
                            </p>

                            <p>
                                Designed & Developed by{" "}
                                <span className="text-[#b8d8a7]">
                                    Tomasz Zdebiak
                                </span>
                            </p>

                        </div>

                    </div>

                </div>

            </Container>

        </footer>
    );
}