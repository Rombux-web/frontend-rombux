import React from 'react';
import SubNavbar from "@/components/SubNavbar/SubNavbar";
import Marketing from './Marketing';
import MarketingCards from "@/app/marketing/MarketingCards";
import MarketingForm from "@/app/marketing/MarketingForm";

export default function Page() {
    return (
        <div className="flex flex-col">
            <SubNavbar />
            <main>
                <Marketing />
                <div className="-mt-120">
                    <MarketingCards />
                </div>
                <div className="-mb-80">
                    <MarketingForm />
                </div>
            </main>
        </div>
    );
}
