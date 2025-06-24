'use client'

import { useKeenSlider, KeenSliderInstance } from 'keen-slider/react'
import 'keen-slider/keen-slider.min.css'
import { useRef, useEffect } from 'react'


const images = [
    { src: '/hp.jpg', alt: 'HP' },
    { src: '/equipos.png', alt: 'Equipos' },
    { src: '/superpollos.png', alt: 'Super Pollos' },
    { src: '/natreon.jpg', alt: 'Natreon' },
    { src: '/mandt.png', alt: 'MandT' },
]

const loopedImages = [...images, ...images]

export default function Carousel() {
    const sliderInstance = useRef<KeenSliderInstance | null>(null)

    const [sliderContainerRef] = useKeenSlider<HTMLDivElement>({
        loop: true,
        slides: {
            perView: 'auto',
            spacing: 0,
        },
        created(s) {
            sliderInstance.current = s
            startAnimation()
        },
        destroyed() {
            stopAnimation()
        },
        animationEnded() {
            startAnimation()
        },
    })

    const speed = 0.0001

    function startAnimation() {
        if (!sliderInstance.current) return
        sliderInstance.current.animator.start([
            {
                distance: speed * 200,
                duration: 1000,
                easing: (t) => t,
            },
        ])
    }

    function stopAnimation() {
        sliderInstance.current?.animator.stop()
    }

    useEffect(() => {
        return () => {
            stopAnimation()
        }
    }, [])

    return (
        <div ref={sliderContainerRef} className="keen-slider w-full overflow-hidden">
            {loopedImages.map((image, i) => (
                <div
                    key={i}
                    className="keen-slider__slide shrink-0 flex items-center justify-center"
                    style={{
                        width: 'auto',
                        padding: '0px',
                    }}
                >
                    <img
                        src={image.src}
                        alt={image.alt}
                        style={{
                            height: '284px',
                            width: 'auto',
                            objectFit: 'contain',
                        }}
                    />
                </div>
            ))}
        </div>
    )
}
