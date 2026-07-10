"use client";

import { useState } from "react";
import { Plus } from "lucide-react";

type Props = {
    question: string;
    answer: string;
};

export default function FaqItem({
    question,
    answer,
}: Props) {

    const [open, setOpen] = useState(false);

    return (
        <div
            className="
                overflow-hidden
                rounded-3xl
                border
                border-white/10
                bg-[#09140f]
                transition-all
                duration-300
            "
        >

            <button
                onClick={() => setOpen(!open)}
                className="
                    flex
                    w-full
                    items-center
                    justify-between
                    px-6
                    py-6
                    text-left
                    transition-colors
                    duration-300
                    hover:bg-white/5
                "
            >

                <span
                    className="
    pr-6
    text-[20px]
    font-medium
    leading-7
    tracking-[-0.01em]
    text-white
  "
                >
                    {question}
                </span>

                <Plus
                    className={`transition duration-300 ${open ? "rotate-45 text-[#b8d8a7]" : "text-white/70"
                        }`}
                    size={24}
                />

            </button>

            <div
                className={`
                    grid
                    transition-all
                    duration-300
                    ${open
                        ? "grid-rows-[1fr]"
                        : "grid-rows-[0fr]"
                    }
                `}
            >

                <div className="overflow-hidden">

                    <p className="px-6 pt-4 pb-6 text-[16px] leading-8 text-white/70">
                        {answer}
                    </p>

                </div>

            </div>

        </div>
    );
}