import Container from "@/components/ui/Container";
import FaqItem from "@/components/ui/FaqItem";
import { faq } from "@/data/faq";

export default function FAQ() {
    return (
        <section
            id="faq"
            className="bg-[#1d3929] py-24 lg:py-40"
        >

            <Container>

                <div className="mx-auto max-w-[900px] text-center">

                    <span className="text-[15px] font-semibold text-[#b8d8a7]">
                        FAQ
                    </span>

                    <h2
                        className="
                            mt-6
                            font-heading
                            text-[42px]
                            leading-[0.95]
                            tracking-[-0.04em]
                            text-white
                            sm:text-[54px]
                            lg:text-[72px]
                        "
                    >
                        Najczęstsze pytania
                        <br />
                        o usługi ogrodnicze.
                    </h2>

                </div>

                <div
                    className="
                        mx-auto
                        mt-16
                        flex
                        max-w-[900px]
                        flex-col
                        gap-4
                    "
                >

                    {faq.map((item) => (
                        <FaqItem
                            key={item.question}
                            {...item}
                        />
                    ))}

                </div>

            </Container>

        </section>
    );
}