import React from 'react';
import SubNavBar from "@/components/SubNavBar/SubNavBar";
import Data from './Data';
import DataCards from "@/app/data/DataCards";
import DataForm from "@/app/data/DataForm";

export default function Page() {
  return (
    <div className="flex flex-col relative">
      <SubNavBar />
      <main>
        <Data />
        <div className="-mt-120">
          <DataCards />
        </div>
        <div>
          <DataForm />
        </div>
      </main>
    </div>
  );
}
