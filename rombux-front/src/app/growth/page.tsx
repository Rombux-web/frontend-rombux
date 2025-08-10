import React from 'react';
import SubNavBar from "@/components/SubNavBar/SubNavBar";
import Growth from './Growth';
import GrowthCards from "@/app/growth/GrowthCards";
import GrowthForm from "@/app/growth/GrowthForm";

export default function Page() {
    return (
        <div className="flex flex-col relative">
            <SubNavBar />
            <main>
                <Growth />
                <div className="-mt-120">
                    <GrowthCards />
                </div>
                <div>
                    <GrowthForm />
                </div>
            </main>
        </div>
    );
}
