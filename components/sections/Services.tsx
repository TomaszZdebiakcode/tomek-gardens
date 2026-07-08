import Container from "@/components/ui/Container";
import ServiceCard from "@/components/ui/ServiceCard";
import { services } from "@/data/services";
import { BadgeCheck } from "lucide-react";

export default function Services() {
    return (
        <section
            id="services"
            className="py-24 lg:py-40"
            style={{
                background:
                    "radial-gradient(circle at top, #0b1c14 0%, #08140e 35%, #06100b 100%)",
            }}
        >
            <Container>

                <div className="grid gap-16 lg:grid-cols-2 lg:gap-20">

                    {/* LEFT */}

                    <div>

                        <span className="text-[15px] font-semibold text-[#9bbd96] sm:text-[16px]">
                            Usługi ogrodnicze Szczecin
                        </span>

                        <h2 className="
                            mt-5
                            max-w-[560px]
                            font-heading
                            font-medium
                            leading-[0.94]
                            tracking-[-0.045em]
                            text-[#C2CEC7]

                            text-[46px]
                            sm:text-[56px]
                            lg:text-[68px]
                        ">
                            Profesjonalna pielęgnacja ogrodów z dbałością o każdy detal.
                        </h2>

                        <p className="
                            mt-8
                            max-w-[560px]
                            text-white/70

                            text-[17px]
                            leading-8

                            sm:text-[19px]
                            sm:leading-9

                            lg:text-[22px]
                            lg:leading-10
                        ">
                            Tomek Gardens świadczy kompleksowe usługi
                            ogrodnicze w Szczecinie i okolicach.
                            Pracujemy dokładnie, korzystamy z
                            nowoczesnego sprzętu i dbamy o terminową,
                            rzetelną obsługę — od pierwszego kontaktu
                            po uporządkowanie terenu po zakończeniu prac.
                        </p>

                        <div className="
                            mt-10
                            flex
                            items-start
                            gap-4
                            rounded-[24px]
                            border
                            border-white/10
                            bg-[#0e1f16]
                            p-6

                            lg:mt-12
                            lg:gap-5
                            lg:px-8
                            lg:py-7
                        ">

                            <BadgeCheck
                                className="mt-1 shrink-0 text-[#b7d8a6]"
                                size={24}
                            />

                            <p className="
                                text-white/75

                                text-[16px]
                                leading-7

                                lg:text-[18px]
                                lg:leading-8
                            ">
                                Każda usługa jest wyceniana indywidualnie po
                                obejrzeniu ogrodu, zakresu prac i warunków
                                dojazdu.
                            </p>

                        </div>

                    </div>

                    {/* RIGHT */}

                    <div className="
                        grid
                        grid-cols-1
                        gap-5

                        sm:grid-cols-2
                        lg:gap-6
                    ">

                        {services.map((service) => (
                            <ServiceCard
                                key={service.title}
                                {...service}
                            />
                        ))}

                    </div>

                </div>

            </Container>
        </section>
    );
}