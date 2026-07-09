import Container from "@/components/ui/Container";
import ReviewCard from "@/components/ui/ReviewCard";
import { reviews } from "@/data/reviews";

export default function Reviews() {
    return (
        <section
            className="py-24 lg:py-40"
            style={{
                background:
                    "radial-gradient(circle at top, #1b3b2b 0%, #173222 45%, #102116 100%)",
            }}
        >
            <Container>

                <div className="mx-auto max-w-[850px] text-center">

                    <span className="text-[16px] font-semibold text-[#9bbd96]">
                        Opinie klientów
                    </span>

                    <h2
                        className="
            mt-6
            font-heading
            text-[44px]
            leading-[1]
            tracking-[-0.04em]
            text-[#f5f4ef]

            lg:text-[72px]
          "
                    >
                        Klienci ze Szczecina
                        <br />
                        polecają Tomek Gardens.
                    </h2>

                    <p
                        className="
            mx-auto
            mt-8
            max-w-[720px]
            text-[18px]
            leading-8
            text-white/70

            lg:text-[22px]
            lg:leading-10
          "
                    >
                        Zadowolenie klientów jest dla nas najważniejsze.
                        Zobacz, co mówią osoby, które skorzystały z naszych usług.
                    </p>

                </div>

                <div
                    className="
          mt-20
          grid
          gap-6

          md:grid-cols-2
          xl:grid-cols-4
        "
                >
                    {reviews.map((review) => (
                        <ReviewCard
                            key={review.name}
                            {...review}
                        />
                    ))}
                </div>

            </Container>
        </section>
    );
}