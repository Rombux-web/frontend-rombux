import React from 'react';
import SubNavBar from "@/components/SubNavBar/SubNavBar";
import DataIA from './DataIA';
import DataCards from "@/app/dataia/DataCards";
import DataForm from "@/app/dataia/DataForm";

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
