import { LucideIcon } from "lucide-react";

type Props = {
    icon: LucideIcon;
    title: string;
    description: string;
};

export default function ServiceCard({
    icon: Icon,
    title,
    description,
}: Props) {
    return (
        <article
            className="
                h-full
                rounded-[24px]
                border border-white/10
                bg-[#0e1f16]
                p-6
                shadow-[0_10px_35px_rgba(0,0,0,.18)]
                transition-all
                duration-300

                hover:-translate-y-1
                hover:border-[#8bbd8b]/30
                hover:bg-[#112319]

                sm:p-7
                lg:rounded-[26px]
                lg:p-8
            "
        >
            <Icon
                size={30}
                strokeWidth={1.8}
                className="mb-6 text-[#b7d8a6] lg:mb-7"
            />

            <h3
                className="
                    mb-4
                    font-heading
                    font-medium
                    leading-[1.05]
                    tracking-[-0.02em]
                    text-white

                    text-[28px]
                    sm:text-[30px]
                "
            >
                {title}
            </h3>

            <p
                className="
                    text-white/65

                    text-[16px]
                    leading-7

                    sm:text-[17px]
                    lg:text-[18px]
                "
            >
                {description}
            </p>
        </article>
    );
}