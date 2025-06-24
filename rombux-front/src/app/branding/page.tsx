import React from 'react';
import SubNavbar from '@/components/SubNavbar/SubNavbar';
import Branding from './Branding';
import BrandingCards from "@/app/branding/BrandingCards";
import BrandingForm from "@/app/branding/BrandingForm";

export default function Page() {
    return (
        <div className="flex flex-col">
            <SubNavbar />
            <main>
                <Branding />
                <div className="-mt-120">
                    <BrandingCards />
                </div>
                <div className="-mb-80">
                    <BrandingForm />
                </div>
            </main>
        </div>
    );
}
