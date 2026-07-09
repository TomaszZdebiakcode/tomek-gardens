import Container from "@/components/ui/Container";
import FeatureCard from "@/components/ui/FeatureCard";
import { features } from "@/data/features";

export default function Features() {
    return (
        <section
            className="bg-[#07140d] py-24 lg:py-32"
        >
            <Container>

                <div className="mx-auto max-w-[820px] text-center">

                    <span className="text-[16px] font-semibold text-[#9bbd96]">
                        Dlaczego Tomek Gardens
                    </span>

                    <h2 className="mt-6 font-heading text-[42px] leading-[1] tracking-[-0.03em] text-[#f4f2ea] md:text-[58px] lg:text-[66px]">
                        Usługi ogrodnicze w Szczecinie
                        <br />
                        bez stresu i niedomówień.
                    </h2>

                </div>

                <div className="mt-20 grid gap-5 md:grid-cols-2 xl:grid-cols-3">

                    {features.map((feature) => (
                        <FeatureCard
                            key={feature.title}
                            {...feature}
                        />
                    ))}

                </div>

            </Container>
        </section>
    );
}