"use client";

import { useState } from "react";

import Container from "@/components/ui/Container";
import ContactInfoCard from "@/components/ui/ContactInfoCard";
import { contactInfo } from "@/data/contact";

export default function Contact() {
    const [loading, setLoading] = useState(false);
    const [status, setStatus] = useState<
        "" | "success" | "error"
    >("");

    async function handleSubmit(
        e: React.FormEvent<HTMLFormElement>
    ) {
        e.preventDefault();

        setLoading(true);
        setStatus("");

        const form = e.currentTarget;

        const formData = new FormData(form);

        formData.append(
            "access_key",
            "9abdcc47-623a-4d46-ae63-1254238bc5e7"
        );

        formData.append(
            "subject",
            "Nowe zapytanie ze strony Tomek Gardens"
        );

        formData.append(
            "from_name",
            "Tomek Gardens"
        );

        try {
            const response = await fetch(
                "https://api.web3forms.com/submit",
                {
                    method: "POST",
                    body: formData,
                }
            );

            const result = await response.json();

            if (result.success) {
                setStatus("success");
                form.reset();
            } else {
                setStatus("error");
            }
        } catch {
            setStatus("error");
        }

        setLoading(false);
    }

    return (
        <section
            id="contact"
            className="bg-[#08120d] py-24 lg:py-40 scroll-mt-28"
        >
            <Container>

                <div className="grid gap-6 lg:grid-cols-2 lg:gap-8">

                    {/* LEFT */}

                    <div
                        className="
        mx-auto
        w-full
        max-w-[280px]
        rounded-[24px]
        bg-[#143326]
        p-4
        sm:max-w-[340px]
        sm:p-7
        lg:mx-0
        lg:max-w-none
        lg:rounded-[36px]
        lg:p-10
    "
                    >

                        <span className="text-[14px] font-semibold text-[#b8d8a7] sm:text-[15px]">
                            Bezpłatna wycena
                        </span>

                        <h2
                            className="
            mt-4
            font-heading
            text-[34px]
            leading-[0.95]
            tracking-[-0.03em]
            text-white
            sm:mt-6
            sm:text-[42px]
            lg:text-[56px]
        "
                        >
                            Opisz swój ogród —
                            <br />
                            przygotujemy wycenę.
                        </h2>

                        <p
                            className="
            mt-5
            max-w-[540px]
            text-[16px]
            leading-7
            text-white/75
            sm:text-[18px]
            sm:leading-8
        "
                        >
                            Napisz jakie usługi Cię interesują,
                            gdzie znajduje się ogród oraz jaki termin
                            byłby dla Ciebie odpowiedni.
                        </p>

                        <div className="mt-8 space-y-3 sm:mt-10 sm:space-y-4">
                            {contactInfo.map((item) => (
                                <ContactInfoCard
                                    key={item.title}
                                    {...item}
                                />
                            ))}
                        </div>

                    </div>

                    {/* RIGHT */}

                    <form
                        onSubmit={handleSubmit}
                        className="
        mx-auto
        w-full
        max-w-[300px]
        rounded-[24px]
        border
        border-white/10
        bg-[#0d1c14]
        p-4
        sm:max-w-[340px]
        sm:p-7
        lg:mx-0
        lg:max-w-none
        lg:rounded-[36px]
        lg:p-10
    "
                    >

                        <div className="space-y-5 sm:space-y-6">

                            <Input
                                name="name"
                                label="Imię"
                                placeholder="Twoje imię"
                                required
                            />

                            <Input
                                name="phone"
                                label="Telefon"
                                placeholder="Numer telefonu"
                                required
                            />

                            <Input
                                name="address"
                                label="Adres"
                                placeholder="Ulica lub miejscowość"
                            />

                            <Textarea
                                name="message"
                                label="Zakres prac"
                                placeholder="Opisz czego potrzebuje Twój ogród..."
                                required
                            />

                            <Input
                                name="date"
                                label="Preferowany termin"
                                placeholder="Np. przyszły tydzień"
                            />

                        </div>

                        {status === "success" && (
                            <div
                                className="
                mt-6
                rounded-2xl
                border
                border-green-500/30
                bg-green-500/10
                p-4
                text-center
                text-sm
                text-green-300
            "
                            >
                                ✅ Dziękujemy! Wiadomość została wysłana.
                                Skontaktujemy się z Tobą najszybciej jak to możliwe.
                            </div>
                        )}

                        {status === "error" && (
                            <div
                                className="
                mt-6
                rounded-2xl
                border
                border-red-500/30
                bg-red-500/10
                p-4
                text-center
                text-sm
                text-red-300
            "
                            >
                                ❌ Nie udało się wysłać formularza.
                                Spróbuj ponownie za chwilę.
                            </div>
                        )}

                        <button
                            type="submit"
                            disabled={loading}
                            className="
            mt-6
            flex
            h-14
            w-full
            items-center
            justify-center
            rounded-full
            bg-[#b8d8a7]
            text-[16px]
            font-semibold
            text-[#17351f]
            transition-all
            duration-300
            hover:-translate-y-1
            hover:bg-[#c7e7b6]
            disabled:cursor-not-allowed
            disabled:opacity-60
        "
                        >
                            {loading
                                ? "Wysyłanie..."
                                : "Wyślij zapytanie →"}
                        </button>

                    </form>
                </div>

                {/* MAP */}

                <div
                    className="
        mx-auto
        mt-10
        w-full
        max-w-[280px]
        overflow-hidden
        rounded-[28px]
        border
        border-white/10
        lg:max-w-full
    "
                >
                    <iframe
                        src="https://www.google.com/maps?q=województwo+zachodniopomorskie&output=embed"
                        width="100%"
                        height="380"
                        loading="lazy"
                        className="border-0"
                    />
                </div>

            </Container>
        </section>
    );
}

function Input({
    label,
    placeholder,
    name,
    required = false,
}: {
    label: string;
    placeholder: string;
    name: string;
    required?: boolean;
}) {
    return (
        <div>

            <label className="mb-2 block text-[15px] text-white/75">
                {label}
            </label>

            <input
                type="text"
                name={name}
                required={required}
                placeholder={placeholder}
                className="
                    h-14
                    w-full
                    rounded-2xl
                    border
                    border-white/10
                    bg-[#0b1711]
                    px-5
                    text-white
                    outline-none
                    transition-all
                    duration-300
                    placeholder:text-white/25
                    focus:border-[#b8d8a7]
                    focus:ring-2
                    focus:ring-[#b8d8a7]/20
                "
            />

        </div>
    );
}

function Textarea({
    label,
    placeholder,
    name,
    required = false,
}: {
    label: string;
    placeholder: string;
    name: string;
    required?: boolean;
}) {
    return (
        <div>

            <label className="mb-2 block text-[15px] text-white/75">
                {label}
            </label>

            <textarea
                name={name}
                required={required}
                rows={5}
                placeholder={placeholder}
                className="
                    w-full
                    rounded-2xl
                    border
                    border-white/10
                    bg-[#0b1711]
                    p-5
                    text-white
                    outline-none
                    transition-all
                    duration-300
                    placeholder:text-white/25
                    focus:border-[#b8d8a7]
                    focus:ring-2
                    focus:ring-[#b8d8a7]/20
                "
            />

        </div>
    );
}