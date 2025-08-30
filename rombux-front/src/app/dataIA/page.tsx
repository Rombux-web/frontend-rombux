import React from 'react';
import SubNavBar from "@/components/SubNavbar/SubNavbar";
import DataIA from './DataIA';
import DataCards from "@/app/dataIA/DataCards";
import DataForm from "@/app/dataIA/DataForm";

export default function Page() {
    return (
        <div className="flex flex-col relative">
            <SubNavBar />
            <main>
                <DataIA />
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
