import Container from "@/components/ui/Container";
import ProcessCard from "@/components/ui/ProcessCard";
import { process } from "@/data/process";

export default function Process() {
    return (
        <section
            className="bg-[#1a3224] py-24 lg:py-40"
        >
            <Container>

                <div className="mx-auto max-w-[840px] text-center">

                    <span className="text-[16px] font-semibold text-[#9bbd96]">
                        Jak wygląda współpraca?
                    </span>

                    <h2 className="mt-6 font-heading text-[42px] leading-[0.95] tracking-[-0.04em] text-[#f4f2ea] md:text-[58px] lg:text-[72px]">
                        Od pierwszego kontaktu
                        <br />
                        do zadbanego ogrodu.
                    </h2>

                    <p className="mx-auto mt-8 max-w-[720px] text-[20px] leading-9 text-white/70">
                        Wszystko przebiega szybko i przejrzyście.
                        Dzięki temu od początku wiesz, jaki będzie
                        zakres prac, termin realizacji i koszt usługi.
                    </p>

                </div>

                <div className="mt-24 grid gap-6 md:grid-cols-2 xl:grid-cols-5">

                    {process.map((item) => (
                        <ProcessCard
                            key={item.step}
                            {...item}
                        />
                    ))}

                </div>

            </Container>
        </section>
    );
}