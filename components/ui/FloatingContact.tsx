"use client";

import { Phone } from "lucide-react";

const phoneNumber = "+48735133563";
const whatsappNumber = "48735133563";

export default function FloatingContact() {
    return (
        <div className="fixed bottom-5 right-5 z-[100] flex items-center gap-2.5 sm:bottom-6 sm:right-6 sm:gap-3">

            {/* Telefon */}
            <a
                href={`tel:${phoneNumber}`}
                aria-label="Zadzwoń do Tomek Gardens"
                className="
                    group
                    flex h-[52px] w-[52px]
                    items-center justify-center
                    rounded-full
                    bg-[#b9d8a7]
                    text-[#17351f]
                    shadow-[0_8px_30px_rgba(0,0,0,0.25)]
                    transition-all duration-300
                    hover:scale-110
                    hover:bg-[#cbe5bb]
                    active:scale-95
                    sm:h-14 sm:w-14
                "
            >
                <Phone
                    size={22}
                    strokeWidth={2.2}
                    className="transition-transform duration-300 group-hover:rotate-[-8deg]"
                />

                {/* Tooltip desktop */}
                <span
                    className="
                        pointer-events-none
                        absolute right-[62px]
                        hidden whitespace-nowrap
                        rounded-full
                        bg-[#17351f]
                        px-4 py-2
                        text-sm font-semibold text-white
                        opacity-0
                        shadow-lg
                        transition-opacity duration-300
                        group-hover:opacity-100
                        sm:right-[68px] sm:block
                    "
                >
                    Zadzwoń do nas
                </span>
            </a>

            {/* WhatsApp */}
            <a
                href={`https://wa.me/${whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Napisz do Tomek Gardens na WhatsApp"
                className="
                    group
                    flex h-[52px] w-[52px]
                    items-center justify-center
                    rounded-full
                    bg-[#0d3b2e]
                    text-white
                    shadow-[0_8px_30px_rgba(0,0,0,0.25)]
                    transition-all duration-300
                    hover:scale-110
                    hover:bg-[#124a3a]
                    active:scale-95
                    sm:h-14 sm:w-14
                "
            >
                <svg
                    viewBox="0 0 32 32"
                    className="h-[25px] w-[25px] fill-current sm:h-7 sm:w-7"
                    aria-hidden="true"
                >
                    <path d="M16.01 3C8.83 3 3 8.82 3 16c0 2.29.6 4.44 1.74 6.34L3.05 29l6.82-1.64A12.92 12.92 0 0 0 16 29c7.18 0 13-5.82 13-13S23.19 3 16.01 3Zm0 23.7c-2.04 0-4.04-.55-5.78-1.6l-.41-.25-4.05.98 1-3.94-.27-.42A10.74 10.74 0 0 1 5.28 16c0-5.92 4.81-10.73 10.73-10.73S26.74 10.08 26.74 16 21.93 26.7 16.01 26.7Zm5.89-8.05c-.32-.16-1.9-.94-2.19-1.05-.29-.11-.51-.16-.73.16-.21.32-.84 1.05-1.03 1.27-.19.22-.38.24-.7.08-.32-.16-1.36-.5-2.59-1.6-.96-.86-1.61-1.92-1.8-2.24-.19-.32-.02-.49.14-.65.15-.15.32-.38.49-.57.16-.19.21-.32.32-.54.11-.22.05-.41-.03-.57-.08-.16-.73-1.75-1-2.4-.26-.63-.53-.55-.73-.56h-.62c-.22 0-.57.08-.86.41-.3.32-1.13 1.1-1.13 2.69s1.16 3.12 1.32 3.34c.16.22 2.28 3.49 5.53 4.89.77.33 1.37.53 1.84.68.77.25 1.47.21 2.02.13.62-.09 1.9-.78 2.17-1.53.27-.75.27-1.39.19-1.53-.08-.14-.29-.22-.62-.38Z" />
                </svg>

                {/* Tooltip desktop */}
                <span
                    className="
                        pointer-events-none
                        absolute right-[62px]
                        hidden whitespace-nowrap
                        rounded-full
                        bg-[#17351f]
                        px-4 py-2
                        text-sm font-semibold text-white
                        opacity-0
                        shadow-lg
                        transition-opacity duration-300
                        group-hover:opacity-100
                        sm:right-[68px] sm:block
                    "
                >
                    Napisz na WhatsApp
                </span>
            </a>
        </div>
    );
}