import React from 'react';
import SubNavBar from "@/components/SubNavBar/SubNavBar";
import Marketing from './Marketing';
import MarketingCards from "@/app/marketing/MarketingCards";
import MarketingForm from "@/app/marketing/MarketingForm";

export default function Page() {
    return (
        <div className="flex flex-col">
            <SubNavBar />
            <main>
                <Marketing />
                <div className="-mt-120">
                    <MarketingCards />
                </div>
                <div>
                    <MarketingForm />
                </div>
            </main>
        </div>
    );
}
