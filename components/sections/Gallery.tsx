import Container from "@/components/ui/Container";
import GalleryCard from "@/components/ui/GalleryCard";
import { gallery } from "@/data/gallery";

export default function Gallery() {
    return (
        <section
            id="gallery"
            className="bg-[#050907] py-24 lg:py-40"
        >
            <Container>

                <div className="mx-auto max-w-[820px] text-center">

                    <span className="text-[16px] font-semibold text-[#9bbd96]">
                        Nasze realizacje
                    </span>

                    <h2
                        className="
    mx-auto
    max-w-[900px]
    font-heading
    text-[46px]
    sm:text-[56px]
    md:text-[64px]
    lg:text-[70px]
    leading-[0.92]
    tracking-[-0.045em]
    text-[#c5d2ca]
  "
                    >
                        Zobacz efekty prac
                        <br />
                        ogrodniczych przed i po.
                    </h2>

                    <p className="mx-auto mt-7 max-w-[760px] text-[22px] leading-10 text-white/70">
                        Sprawdź przykłady koszenia trawy, sprzątania ogrodów,
                        sadzenia drzew oraz pielęgnacji roślin u klientów
                        ze Szczecina i okolic.
                    </p>

                </div>

                <div className="mt-24 grid gap-8 lg:grid-cols-3">

                    {gallery.map((item) => (
                        <GalleryCard
                            key={item.title}
                            {...item}
                        />
                    ))}

                </div>

            </Container>
        </section>
    );
}