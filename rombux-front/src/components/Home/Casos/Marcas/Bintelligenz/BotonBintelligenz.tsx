"use client"

import React, { useState } from 'react'
import PopupModalBintelligenz from './Bintelligenz'

export default function ButtonBintelligenz() {
    const [showPopup, setShowPopup] = useState(false)

    return (
        <div className="pl-10 pt-10">
            <button
                onClick={() => setShowPopup(true)}
                className="bg-white border border-[#D81FB9] text-[#D81FB9] text-[28px] rounded-full w-6 h-6 max-xl:w-5 max-xl:h-5 flex max-lg:text-[18px] max-lg:w-4 max-lg:h-4 items-center justify-center hover:bg-[#D81FB9]/10 transition cursor-pointer"
            >
                +
            </button>

            {showPopup && <PopupModalBintelligenz onClose={() => setShowPopup(false)} />}
        </div>
    )
}
