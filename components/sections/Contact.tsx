import Container from "@/components/ui/Container";
import ContactInfoCard from "@/components/ui/ContactInfoCard";
import { contactInfo } from "@/data/contact";

export default function Contact() {
    return (
        <section
            id="contact"
            className="bg-[#08120d] py-24 lg:py-40 scroll-mt-28"
        >
            <Container>

                <div className="grid gap-8 lg:grid-cols-2">

                    {/* LEFT */}

                    <div className="rounded-[24px] bg-[#143326] p-5 sm:p-7 lg:rounded-[36px] lg:p-10">

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
                        className="
        rounded-[24px]
        border
        border-white/10
        bg-[#0d1c14]
        p-5
        sm:p-7
        lg:rounded-[36px]
        lg:p-10
    "
                    >

                        <div className="space-y-5 sm:space-y-6">

                            <Input
                                label="Imię"
                                placeholder="Twoje imię"
                            />

                            <Input
                                label="Telefon"
                                placeholder="Numer telefonu"
                            />

                            <Input
                                label="Adres"
                                placeholder="Ulica lub miejscowość"
                            />

                            <Textarea
                                label="Zakres prac"
                                placeholder="Opisz czego potrzebuje Twój ogród..."
                            />

                            <Input
                                label="Preferowany termin"
                                placeholder="Np. przyszły tydzień"
                            />

                        </div>

                        <button
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
        "
                        >
                            Wyślij zapytanie →
                        </button>

                    </form>

                </div>

                {/* MAP */}

                <div className="mt-10 rounded-[36px] border border-white/10 bg-[#0d1c14] p-8 lg:p-10">

                    <div className="text-center">

                        <h3
                            className="
        mt-4
        font-heading
        text-[30px]
        leading-[1.15]
        text-white
        sm:text-[38px]
        lg:text-[56px]
    "
                        >
                            Działamy na terenie
                            województwa
                            <br />

                            <span className="sm:hidden">
                                zachodnio-
                                <br />
                                pomorskiego.
                            </span>

                            <span className="hidden sm:inline">
                                zachodniopomorskiego.
                            </span>
                        </h3>


                    </div>

                    {/* MAP */}

                    <div className="mt-10 overflow-hidden rounded-[28px] border border-white/10">

                        <iframe
                            src="https://www.google.com/maps?q=województwo+zachodniopomorskie&output=embed"
                            width="100%"
                            height="380"
                            loading="lazy"
                            className="border-0"
                        />

                    </div>




                </div>

            </Container>
        </section>
    );
}

function Input({
    label,
    placeholder,
}: {
    label: string;
    placeholder: string;
}) {
    return (
        <div>

            <label className="mb-2 block text-[15px] text-white/75">
                {label}
            </label>

            <input
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
}: {
    label: string;
    placeholder: string;
}) {
    return (
        <div>

            <label className="mb-2 block text-[15px] text-white/75">
                {label}
            </label>

            <textarea
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