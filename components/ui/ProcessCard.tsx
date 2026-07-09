import { LucideIcon } from "lucide-react";

type Props = {
    step: string;
    icon: LucideIcon;
    title: string;
    description: string;
    featured?: boolean;
};

export default function ProcessCard({
    step,
    icon: Icon,
    title,
    description,
    featured,
}: Props) {
    return (
        <article
            className={`
                flex h-full flex-col rounded-[28px] border p-8 transition-all duration-300
                hover:-translate-y-1
                hover:border-[#9bbd96]/30
                hover:shadow-[0_0_40px_rgba(184,216,167,0.05)]

                ${featured
                    ? "border-[#2f5d47] bg-gradient-to-b from-[#17412f] to-[#123325]"
                    : "border-white/10 bg-[#0d1c14]"
                }
            `}
        >
            <div className="flex items-center justify-between">

                <span className="text-[14px] font-semibold tracking-[0.18em] text-[#9bbd96]/60">
                    {step}
                </span>

                <Icon
                    size={22}
                    strokeWidth={2}
                    className="text-[#b8d8a7]"
                />

            </div>

            <h3 className="mt-8 font-heading text-[34px] leading-[1] tracking-[-0.03em] text-white">
                {title}
            </h3>

            <p className="mt-6 flex-1 text-[18px] leading-8 text-white/70">
                {description}
            </p>
        </article>
    );
}