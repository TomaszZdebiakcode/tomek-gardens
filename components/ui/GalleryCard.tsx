import Image from "next/image";

type Props = {
    image: string;
    title: string;
};

export default function GalleryCard({ image, title }: Props) {
    return (
        <article className="group relative overflow-hidden rounded-[30px]">
            <Image
                src={image}
                alt={title}
                width={650}
                height={500}
                className="h-[360px] w-full object-cover transition duration-700 group-hover:scale-105"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

            <div className="absolute bottom-6 left-6">
                <span className="rounded-full border border-white/10 bg-[#5c8747]/90 px-5 py-2 text-[18px] font-semibold text-white backdrop-blur-md">
                    {title}
                </span>
            </div>
        </article>
    );
}