import React from 'react';
import SubNavbar from "@/components/SubNavbar/SubNavbar";
import Growth from './Growth';
import GrowthCards from "@/app/growth/GrowthCards";
import GrowthForm from "@/app/growth/GrowthForm";

export default function Page() {
    return (
        <div className="flex flex-col">
            <SubNavbar />
            <main>
                <Growth />
                <div className="-mt-120">
                    <GrowthCards />
                </div>
                <div className="-mb-80">
                    <GrowthForm />
                </div>
            </main>
        </div>
    );
}
