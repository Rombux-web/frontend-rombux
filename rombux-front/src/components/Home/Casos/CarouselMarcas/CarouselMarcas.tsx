'use client';

import { useRouter } from 'next/navigation';

const images = [
    { id: 1, src: '/hpcarousel.jpg', href: '/hp' },
    { id: 2, src: '/chilecarousel.png', href: '/chile' },
    { id: 3, src: '/cliniccarousel.jpg', href: '/clinic' },
    { id: 4, src: '/natreoncarousel.jpg', href: '/natreon' },
    { id: 5, src: '/hotel.png', href: '/hotel' },
    { id: 6, src: '/bincarousel.png', href: '/bintelligenz' },
];

export default function CarouselMarcas() {
    const router = useRouter();

    return (
        <div className="overflow-x-auto scroll-smooth snap-x snap-mandatory ">
            <div className="flex gap-1">
                {images.map((img) => (
                    <div
                        key={img.id}
                        className="snap-center  h-[190px] relative rounded-xl overflow-hidden flex-shrink-0 bg-gray-100 cursor-pointer"
                        onClick={() => router.push(img.href)}
                    >
                        <img
                            src={img.src}
                            alt={`Imagen ${img.id}`}
                            className="w-[330px] h-full object-cover aspect-video"
                            draggable={false}
                        />
                        <div
                            className="absolute bottom-2 left-2 w-8 h-8 bg-white rounded-full shadow border border-[#D81FB9] text-[#D81FB9] flex items-center justify-center text-[28px] font-medium z-10"
                            onClick={(e) => {
                                e.stopPropagation();
                                router.push(img.href);
                            }}
                        >
                            +
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
