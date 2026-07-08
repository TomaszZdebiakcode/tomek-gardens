import Container from "@/components/ui/Container";
import PricingCard from "@/components/ui/PricingCard";
import { pricing } from "@/data/pricing";

export default function Pricing() {
    return (
        <section
            id="pricing"
            className="py-24 lg:py-40 bg-[#07140d]"
        >
            <Container>

                <div className="mx-auto max-w-[820px] text-center">

                    <span className="text-[16px] font-semibold text-[#9bbd96]">
                        Cennik orientacyjny
                    </span>

                    <h2 className="mx-auto
max-w-[900px]
font-heading
text-[48px]
sm:text-[60px]
lg:text-[72px]
leading-[0.92]
tracking-[-0.04em]
text-[#f4f2ea]">

                        Przejrzyste ceny usług
                        <br />
                        ogrodniczych w Szczecinie.

                    </h2>

                    <p className="mx-auto mt-8 max-w-[700px] text-[22px] leading-10 text-white/75">
                        Cena ustalana indywidualnie po bezpłatnej wycenie.
                    </p>

                </div>

                <div className="mt-24 grid gap-7 lg:grid-cols-4">

                    {pricing.map((item) => (
                        <PricingCard
                            key={item.title}
                            {...item}
                        />
                    ))}

                </div>

                <p className="mt-16 text-center text-[18px] text-white/60">
                    * Każda wycena wykonywana jest bezpłatnie i niezobowiązująco.
                </p>

            </Container>
        </section>
    );
}