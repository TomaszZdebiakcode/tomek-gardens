import { Star } from "lucide-react";

type Props = {
    name: string;
    city: string;
    review: string;
};

export default function ReviewCard({
    name,
    city,
    review,
}: Props) {
    return (
        <article
            className="
            flex h-full flex-col
      rounded-[28px]
      border
      border-white/10
      bg-gradient-to-b
      from-[#214534]
      to-[#1a392b]
      p-8
      transition-all
      duration-300
      hover:-translate-y-1
      hover:border-[#b8d8a7]/40
    "
        >
            <div className="mb-6 flex gap-1">
                {[...Array(5)].map((_, i) => (
                    <Star
                        key={i}
                        size={15}
                        className="fill-[#d9c27f] text-[#d9c27f]"
                    />
                ))}
            </div>

            <p className="text-[18px] leading-8 text-white/75">
                "{review}"
            </p>

            <div className="mt-auto pt-8">
                <h4 className="text-[18px] font-semibold text-white">
                    {name}
                </h4>

                <p className="mt-1 text-white/55">
                    {city}
                </p>
            </div>
        </article>
    );
}