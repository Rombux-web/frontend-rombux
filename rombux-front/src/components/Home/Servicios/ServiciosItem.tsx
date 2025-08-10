// components/ServicioItem.tsx
"use client";

import Image from "next/image";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface Props {
    title: string;
    description?: string;
    link?: string;
    icon: string;
}

export default function ServicioItem({ icon, title, description, link }: Props) {
    const [open, setOpen] = useState(false);

    return (
        <div className="border-b border-[#D81FB9] mb-5 max-sm:w-[330px]">
            <button
                onClick={() => setOpen(!open)}
                className="w-full flex items-center justify-between px-4 max-sm:px-0"
            >
                <div className="flex items-center gap-3 mt-[27px] ">
                    <Image
                        src={icon}
                        alt={title}
                        width={40}
                        height={40}
                        className="ml-[8px] max-xl:w-[40px] relative -top-[23px] max-sm:ml-0" />
                    <span className="text-[32px] ml-[36px] -mt-[47px] max-2xl:text-[40px] max-xl:text-[36px] max-xl:ml-2 max-lg:text-[30px] max-lg:leading-[36px] max-md:text-[24px] max-md:w-[30px] max-sm:w-full">{title}</span>
                </div>
                <ChevronDown
                    className={`text-[#D81FB9] w-[43px] h-[43px] relative -top-[9px] transform transition-transform duration-600 ${open ? "rotate-180" : "rotate-0"
                        }`}
                />
            </button>

            <AnimatePresence initial={false}>
                {open && description && (
                    <motion.div
                        key="content"
                        initial={{ opacity: 0, scaleY: 0 }}
                        animate={{ opacity: 1, scaleY: 1 }}
                        exit={{ opacity: 0, scaleY: 0 }}
                        transition={{ duration: 0.1, ease: "easeInOut" }}
                        className="overflow-hidden px-[83px] pb-4 mt-[16px] text-[24px] max-2xl:text-[24px] max-xl:text-[20px] text-gray-800 ml-[21px] max-xl:px-6 origin-top max-lg:text-[20px] max-lg:leading-[26px] max-md:text-[18px] max-md:leading-[22px] max-lg:mt-1"
                    >
                        <p className="italic font-light -mt-1 leading-[28px]">{description}</p>
                        {link && (
                            <p className="pt-[6px] font-bold text-[20px] leading-[28px] -mt-[7px] mb-[7px] text-[#D81FB9] max-2xl:text-[20px] max-xl:text-[16px]">
                                <a href={link}>(Leer más)</a>
                            </p>
                        )}
                    </motion.div>
                )}
            </AnimatePresence>

        </div>
    );
}
