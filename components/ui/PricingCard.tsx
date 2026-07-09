import { ArrowRight, LucideIcon } from "lucide-react";

type Props = {
    icon: LucideIcon;
    title: string;
    price: string;
    description: string;
};

export default function PricingCard({
    icon: Icon,
    title,
    price,
    description,
}: Props) {
    return (
        <article className="group flex h-full flex-col rounded-[30px] border border-white/10 bg-[#08120d] p-8 transition-all duration-300 hover:border-[#9bc48d]/30 hover:bg-[#0b1811]">

            <Icon
                size={28}
                strokeWidth={1.8}
                className="mb-7 text-[#b8d8a7]"
            />
            <h3
                className="
        min-h-[72px]
        font-heading
        text-[32px]
        font-semibold
        leading-[1.15]
        text-white
    "
            >
                {title}
            </h3>

            <div className="mt-7 font-heading text-[52px] leading-none text-[#dfe8dc]">
                {price}
            </div>

            <p className="min-h-[130px] mt-7 flex-1 text-[18px] leading-8 text-white/65">
                {description}
            </p>

            <div className="mt-10 flex items-center justify-between border-t border-white/10 pt-6 text-[#b8d8a7]">

                <span className="font-semibold">
                    Zamów usługę
                </span>

                <ArrowRight
                    size={18}
                    className="transition group-hover:translate-x-1"
                />

            </div>

        </article>
    );
}