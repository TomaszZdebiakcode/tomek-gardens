import {
    Phone,
    ClipboardCheck,
    CalendarDays,
    Truck,
    BadgeCheck,
} from "lucide-react";

export const process = [
    {
        step: "01",
        icon: Phone,
        title: "Kontakt telefoniczny",
        description:
            "Krótko omawiamy lokalizację, potrzeby ogrodu oraz preferowany termin.",
    },
    {
        step: "02",
        icon: ClipboardCheck,
        title: "Bezpłatna wycena",
        description:
            "Ustalamy zakres prac i przedstawiamy przejrzystą wycenę przed realizacją.",
    },
    {
        step: "03",
        icon: CalendarDays,
        title: "Ustalenie terminu",
        description:
            "Dobieramy dogodny termin. W większości przypadków możemy rozpocząć prace w ciągu 7 dni.",
    },
    {
        step: "04",
        icon: Truck,
        title: "Realizacja usługi",
        description:
            "Przyjeżdżamy z własnym sprzętem i wykonujemy wszystkie prace dokładnie oraz sprawnie.",
    },
    {
        step: "05",
        icon: BadgeCheck,
        title: "Zadowolony klient",
        description:
            "Po zakończeniu prac sprzątamy teren i pozostawiamy ogród gotowy do użytkowania.",
        featured: true,
    },
];