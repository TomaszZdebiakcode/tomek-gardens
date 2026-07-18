import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Sprout } from "lucide-react";
import Container from "@/components/ui/Container";

export default function Hero() {
    return (
        <section className="relative min-h-screen overflow-hidden">

            {/* Background */}

            <Image
                src="/images/hero/IMG_2730.webp"
                alt="Nowoczesny ogród z trawnikiem wykonany przez TomekGardens"
                fill
                priority
                className="object-cover"
            />

            {/* Overlay */}

            <div className="absolute inset-0 bg-black/60" />

            <Container>

                <div className="relative z-10 flex min-h-screen max-w-[930px] flex-col justify-center py-28 lg:py-0">

                    {/* Badge */}

                    <div className="mb-6 w-fit rounded-full border border-white/10 bg-white/10 px-4 py-2 backdrop-blur-xl sm:px-5">

                        <span className="flex items-center gap-2 text-[13px] font-semibold text-white sm:text-[15px]">
                            <Sprout className="h-4 w-4 text-[#b8d8a7]" />
                            Darmowa wycena • Szczecin i okolice
                        </span>

                    </div>

                    {/* Heading */}

                    <h1 className="
                        max-w-[930px]
                        font-heading
                        font-medium
                        leading-[0.9]
                        tracking-[-0.045em]
                        text-[#f8f8f5]

                        text-[52px]
                        sm:text-[68px]
                        lg:text-[86px]
                    ">

                        Profesjonalne usługi
                        <br />
                        ogrodnicze w Szczecinie

                    </h1>

                    {/* Description */}

                    <p className="mt-6 max-w-[620px] text-[16px] leading-[1.7] text-white/90 sm:text-[17px] lg:text-[18px]">

                        Kompleksowa pielęgnacja ogrodów, koszenie trawy,
                        przycinanie żywopłotów, sadzenie drzew i sezonowe
                        prace ogrodowe na terenie Szczecina i okolic.

                    </p>

                    {/* Buttons */}

                    <div className="mt-9 flex flex-col gap-4 sm:flex-row">

                        <Link
                            href="#contact"
                            className="inline-flex h-[56px] items-center justify-center gap-3 rounded-full bg-[#b8d8a7] px-9 text-[16px] font-semibold text-[#17351f] transition-all duration-300 hover:bg-[#c8e5ba]"
                        >
                            Bezpłatna wycena
                            <ArrowRight size={16} strokeWidth={2.4} />
                        </Link>

                        <Link
                            href="#gallery"
                            className="inline-flex h-[56px] items-center justify-center gap-3 rounded-full bg-[#123326] px-9 text-[16px] font-semibold text-white transition-all duration-300 hover:bg-[#1b4535]"
                        >
                            Nasze realizacje
                            <ArrowRight size={16} strokeWidth={2.4} />
                        </Link>

                    </div>

                    {/* Stats */}

                    <div className="mt-10 grid grid-cols-2 gap-4 sm:flex">

                        <div className="flex h-[88px] w-full sm:w-[195px] flex-col justify-center rounded-[22px] border border-white/10 bg-white/10 px-6 backdrop-blur-xl">

                            <h3 className="font-heading text-[28px] font-semibold leading-[0.9] tracking-[-0.04em] text-white">

                                Nawet{" "}
                                <span className="relative -top-[6px]">7</span>{" "}
                                dni

                            </h3>

                            <p className="mt-1 text-[13px] font-semibold text-white/70">
                                szybki termin
                            </p>

                        </div>

                        <div className="flex h-[88px] w-full sm:w-[175px] flex-col justify-center rounded-[22px] border border-white/10 bg-white/10 px-6 backdrop-blur-xl">

                            <h3 className="font-heading text-[28px] font-semibold leading-[0.9] tracking-[-0.04em] text-white">
                                Darmowa
                            </h3>

                            <p className="mt-1 text-[13px] font-semibold text-white/70">
                                wycena
                            </p>

                        </div>

                    </div>

                </div>

            </Container>

        </section>
    );
}