"use client"

import React, { useState } from 'react'
import PopupModalHotel from './Hotel'

export default function ButtonHotel() {
    const [showPopup, setShowPopup] = useState(false)

    return (
        <div className="p-10">
            <button
                onClick={() => setShowPopup(true)}
                className="bg-white border border-[#D81FB9] text-[#D81FB9] text-[50px] font-light rounded-full w-10 h-10 flex items-center justify-center hover:bg-[#D81FB9]/10 transition"
            >
                +
            </button>

            {showPopup && <PopupModalHotel onClose={() => setShowPopup(false)} />}
        </div>
    )
}
