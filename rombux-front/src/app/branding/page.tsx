import React from 'react';
import SubNavBar from "@/components/SubNavBar/SubNavBar";
import Branding from './Branding';
import BrandingCards from "@/app/branding/BrandingCards";
import BrandingForm from "@/app/branding/BrandingForm";


export default function Page() {
  return (
    <div className="flex flex-col">
      <SubNavBar />
      <main>
        <Branding />
        <div className="-mt-120">
          <BrandingCards />
        </div>
        <div>
          <BrandingForm />
        </div>
      </main>
      
    </div>
  );
}
