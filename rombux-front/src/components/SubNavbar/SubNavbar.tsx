'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function SubNavBar() {
    const pathname = usePathname();
    const [isMobile, setIsMobile] = useState(false);

    const items = [
        { label: 'Benchmarking', path: '/benchmarking' },
        { label: 'Branding', path: '/branding' },
        { label: 'Marketing Digital', path: '/marketing' },
        { label: 'Growth', path: '/growth' },
        { label: 'Data+IA', path: '/dataia' },
    ];

    useEffect(() => {
        const checkIsMobile = () => setIsMobile(window.innerWidth < 640);
        checkIsMobile();
        window.addEventListener('resize', checkIsMobile);
        return () => window.removeEventListener('resize', checkIsMobile);
    }, []);

    const visibleItems = isMobile
        ? items.filter(({ path }) => path !== pathname)
        : items;

    return (
        <nav className="fixed top-[94px] w-full bg-[#FDF4FB] z-40 border-b border-black h-[56px]">
            <div className="flex justify-between ml-[69px] px-55 py-4 gap-y-4 mr-[54px] max-2xl:px-10 mt-[2px] max-lg:ml-0 max-lg:mr-0 max-lg:px-9 max-sm:px-5">
                {visibleItems.map(({ label, path }) => {
                    const isActive = pathname === path;
                    return (
                        <Link
                            key={label}
                            href={path}
                            className="text-[#000000] text-[20px] max-2xl:text-[18px] leading-[24px] transition-all max-lg:text-[14px] max-sm:leading-[16px]"
                        >
                            <span className="relative inline-block">
                                <span className={`absolute left-0 top-0 w-full transition-all ${isActive ? 'font-bold' : 'font-normal'} hover:font-bold`}>
                                    {label}
                                </span>
                                <span className="invisible font-bold">{label}</span>
                            </span>
                        </Link>
                    );
                })}
            </div>
        </nav>
    );
}
