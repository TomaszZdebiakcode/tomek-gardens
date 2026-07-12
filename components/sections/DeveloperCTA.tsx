import Link from "next/link";
import Container from "@/components/ui/Container";
import { ArrowRight } from "lucide-react";

export default function DeveloperCTA() {
    return (
        <section className="bg-[#08120d] py-20 lg:py-28">

            <Container>

                <div
                    className="
                        mx-auto
                        max-w-5xl
                        overflow-hidden
                        rounded-[36px]
                        border
                        border-white/10
                        bg-gradient-to-br
                        from-[#143326]
                        via-[#10271d]
                        to-[#0b1711]
                        p-8
                        text-center
                        shadow-2xl
                        sm:p-12
                        lg:p-16
                    "
                >

                    <span className="text-[15px] font-semibold text-[#b8d8a7]">
                        Podoba Ci się ta strona?
                    </span>

                    <h2
                        className="
                            mt-5
                            font-heading
                            text-[42px]
                            leading-[0.95]
                            tracking-[-0.04em]
                            text-white
                            sm:text-[56px]
                            lg:text-[72px]
                        "
                    >
                        Stwórzmy coś równie dobrego dla Twojej firmy.
                    </h2>

                    <p
                        className="
                            mx-auto
                            mt-6
                            max-w-2xl
                            text-[18px]
                            leading-8
                            text-white/70
                        "
                    >
                        Projektuję nowoczesne strony internetowe
                        dla lokalnych firm i przedsiębiorców.
                        Jeśli spodobała Ci się ta realizacja,
                        chętnie stworzę stronę również dla Ciebie.

                    </p>



                    <Link
                        href="https://tomaszzdebiak.dev"
                        className="
                            group
                            mt-10
                            inline-flex
                            h-14
                            items-center
                            gap-3
                            rounded-full
                            bg-[#b8d8a7]
                            px-8
                            font-semibold
                            text-[#17351f]
                            transition-all
                            duration-300
                            hover:-translate-y-1
                            hover:bg-[#c8e8b7]
                        "
                    >
                        Poznaj moją ofertę

                        <ArrowRight
                            size={18}
                            className="transition-transform duration-300 group-hover:translate-x-1"
                        />
                    </Link>

                </div>

            </Container>

        </section>
    );
}