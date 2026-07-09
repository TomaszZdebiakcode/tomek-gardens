import { LucideIcon } from "lucide-react";

type Props = {
    icon: LucideIcon;
    title: string;
};

export default function FeatureCard({
    icon: Icon,
    title,
}: Props) {
    return (
        <article
            className="
        flex
        items-center
        gap-4
        rounded-2xl
        border
        border-white/10
        bg-[#0d1c14]
        px-7
        py-6
        transition-all
        duration-300

        hover:-translate-y-1
        hover:border-[#9bbd96]/30
        hover:bg-[#12251b]
        hover:shadow-[0_0_40px_rgba(184,216,167,0.05)]
    "
        >
            <Icon
                size={22}
                strokeWidth={2}
                className="text-[#b8d8a7]"
            />

            <h3 className="text-[20px] font-semibold text-white">
                {title}
            </h3>
        </article>
    );
}