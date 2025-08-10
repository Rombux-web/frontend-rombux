'use client'

import React, { useEffect, useRef } from 'react'
import { motion, useAnimation } from 'framer-motion'

const images = [
    { src: '/hp.jpg', alt: 'HP' },
    { src: '/equipos.png', alt: 'Equipos' },
    { src: '/superpollos.png', alt: 'Super Pollos' },
    { src: '/natreon.jpg', alt: 'Natreon' },
    { src: '/mandt.png', alt: 'MandT' },
]

const loopedImages = [...images, ...images]

export default function Carousel() {
    const controls = useAnimation()
    const containerRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const animate = async () => {
            if (!containerRef.current) return

            const containerWidth = containerRef.current.scrollWidth / 2

            while (true) {
                await controls.start({
                    x: -containerWidth,
                    transition: { duration: 20, ease: 'linear' },
                })
                await controls.set({ x: 0 })
            }
        }
        animate()
    }, [controls])

    return (
        <div className="overflow-hidden w-full">
            <motion.div
                ref={containerRef}
                className="flex"
                animate={controls}              
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.1}
            >
                {loopedImages.map(({ src, alt }, i) => (
                    <div key={i} className="flex-shrink-0">
                        <img
                            src={src}
                            alt={alt}
                            className="h-[284px] max-xl:h-[160px] w-auto object-contain select-none"
                            draggable={false}
                        />
                    </div>
                ))}
            </motion.div>
        </div>
    )
}
