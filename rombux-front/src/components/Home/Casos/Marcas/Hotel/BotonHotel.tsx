"use client"

import React, { useState } from 'react'
import PopupModalHotel from './Hotel'

export default function ButtonHotel() {
    const [showPopup, setShowPopup] = useState(false)

    return (
        <div className="p-10">
            <button
                onClick={() => setShowPopup(true)}
                className="bg-white border border-[#D81FB9] text-[#D81FB9] text-[28px] rounded-full w-6 h-6 max-lg:text-[18px] max-lg:w-4 max-lg:h-4 max-xl:w-5 max-xl:h-5 flex items-center justify-center hover:bg-[#D81FB9]/10 transition cursor-pointer"
            >
                +
            </button>

            {showPopup && <PopupModalHotel onClose={() => setShowPopup(false)} />}
        </div>
    )
}
