import { SiTiktok } from "react-icons/si";
import Image from "next/image";
import Link from "next/link";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { Phone, Mail, MapPin } from "lucide-react";

import Container from "@/components/ui/Container";

export default function Footer() {
    return (
        <footer className="border-t border-white/10 bg-[#08120d] pt-12">

            <Container>

                <div className="py-16 lg:py-20">

                    {/* TOP */}

                    <div className="grid gap-12">

                        <div className="grid items-start gap-12 lg:grid-cols-[1.45fr_0.8fr_1fr]">

                            {/* LOGO */}

                            <div>

                                <Link
                                    href="/"
                                    className="inline-block"
                                >
                                    <div
                                        className="
                                            inline-flex
                                            rounded-[28px]
                                            border border-[#d7d1bf]/40
                                            bg-[#f4f1e8]
                                            p-6
                                            shadow-[0_16px_40px_rgba(0,0,0,0.18)]
                                            transition-all
                                            duration-300
                                            hover:-translate-y-1
                                            hover:shadow-[0_22px_50px_rgba(0,0,0,0.24)]
                                        "
                                    >
                                        <Image
                                            src="/images/logo/TomekGardnes_transparentlogo.png"
                                            alt="Tomek Gardens"
                                            width={420}
                                            height={170}
                                            priority
                                            className="h-auto w-[340px] xl:w-[420px]"
                                        />
                                    </div>
                                </Link>

                            </div>

                            {/* NAVIGATION */}

                            <div>

                                <h3 className="text-[18px] font-semibold text-white">
                                    Nawigacja
                                </h3>

                                <div className="mt-6 flex flex-col gap-4">

                                    <Link
                                        href="#services"
                                        className="text-white/75 transition duration-300 hover:text-[#b8d8a7]"
                                    >
                                        Usługi
                                    </Link>

                                    <Link
                                        href="#gallery"
                                        className="text-white/75 transition duration-300 hover:text-[#b8d8a7]"
                                    >
                                        Realizacje
                                    </Link>

                                    <Link
                                        href="#pricing"
                                        className="text-white/75 transition duration-300 hover:text-[#b8d8a7]"
                                    >
                                        Cennik
                                    </Link>

                                    <Link
                                        href="#contact"
                                        className="text-white/75 transition duration-300 hover:text-[#b8d8a7]"
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
                                        href="tel:+48735133563"
                                        className="flex items-center gap-3 text-white/75 transition duration-300 hover:text-[#b8d8a7]"
                                    >
                                        <Phone size={18} />
                                        +48 735 133 563
                                    </a>

                                    <a
                                        href="mailto:kontakt@tomekgardens.pl"
                                        className="flex items-center gap-3 text-white/75 transition duration-300 hover:text-[#b8d8a7]"
                                    >
                                        <Mail size={18} />
                                        kontakt@tomekgardens.pl
                                    </a>

                                    <div className="flex items-center gap-3 text-white/75">
                                        <MapPin size={18} />
                                        Szczecin, Polska
                                    </div>

                                </div>

                                <div className="mt-8 flex gap-4">

                                    <a
                                        href="https://www.instagram.com/tomekgardens/"
                                        className="
                                            flex h-11 w-11 items-center justify-center
                                            rounded-full border border-white/10
                                            transition-all duration-300
                                            hover:scale-105
                                            hover:border-[#b8d8a7]
                                            hover:bg-[#143326]
                                        "
                                    >
                                        <FaInstagram size={18} />
                                    </a>

                                    <a
                                        href="https://www.facebook.com/tomekgardens"
                                        className="
                                            flex h-11 w-11 items-center justify-center
                                            rounded-full border border-white/10
                                            transition-all duration-300
                                            hover:scale-105
                                            hover:border-[#b8d8a7]
                                            hover:bg-[#143326]
                                        "
                                    >
                                        <FaFacebookF size={18} />
                                    </a>
                                    <a
                                        href="https://www.tiktok.com/@tomekgardens?is_from_webapp=1&sender_device=pc"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="
                                            flex h-11 w-11 items-center justify-center
                                            rounded-full border border-white/10
                                            transition-all duration-300
                                            hover:scale-105
                                            hover:border-[#b8d8a7]
                                            hover:bg-[#143326]
                                        "
                                    >
                                        <SiTiktok size={18} />
                                    </a>
                                </div>

                            </div>

                        </div>

                        {/* DESCRIPTION */}

                        <p className="max-w-[820px] text-[18px] leading-8 text-white/80">
                            Profesjonalne usługi ogrodnicze dla klientów prywatnych i firm.
                            Tworzymy zadbane ogrody, które zachwycają przez cały rok.
                        </p>

                    </div>

                    {/* BOTTOM */}

                    <div className="mt-16 border-t border-white/10 pt-8">

                        <div className="flex flex-col items-center justify-between gap-4 text-center text-[15px] text-white/45 lg:flex-row">

                            <p>
                                © 2026 Tomek Gardens. Wszystkie prawa zastrzeżone.
                            </p>

                            <p>
                                Designed & Developed by{" "}
                                <span className="font-medium text-[#b8d8a7]">
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