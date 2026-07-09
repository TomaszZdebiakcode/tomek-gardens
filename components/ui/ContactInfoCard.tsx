import Link from "next/link";
import { LucideIcon } from "lucide-react";

type Props = {
    icon: LucideIcon;
    title: string;
    value: string;
    href?: string;
};

export default function ContactInfoCard({
    icon: Icon,
    title,
    value,
    href,
}: Props) {
    const content = (
        <>
            <div
                className="
                    flex
                    h-10
                    w-10
                    items-center
                    justify-center
                    rounded-full
                    bg-[#1a3b2c]
                    sm:h-12
                    sm:w-12
                "
            >
                <Icon
                    size={18}
                    className="text-[#b8d8a7] sm:h-5 sm:w-5"
                />
            </div>

            <div className="min-w-0 flex-1">

                <p className="text-[13px] text-white/50 sm:text-[14px]">
                    {title}
                </p>

                <p
                    className="
                        mt-1
                        text-[15px]
                        font-semibold
                        leading-tight
                        text-white
                        break-words
                        sm:text-[17px]
                    "
                >
                    {value}
                </p>

            </div>
        </>
    );

    const classes = `
        flex
        items-center
        gap-4
        rounded-[18px]
        border
        border-white/10
        bg-[#143326]
        p-4
        transition-all
        duration-300
        hover:-translate-y-1
        hover:border-[#9bbd96]/30
        sm:gap-5
        sm:rounded-2xl
        sm:p-5
    `;

    return href ? (
        <Link
            href={href}
            className={classes}
        >
            {content}
        </Link>
    ) : (
        <div className={classes}>
            {content}
        </div>
    );
}