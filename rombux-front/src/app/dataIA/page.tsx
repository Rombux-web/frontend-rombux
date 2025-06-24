import React from 'react';
import SubNavbar from "@/components/SubNavbar/SubNavbar";
import DataIA from './DataIA';
import DataCards from "@/app/dataIA/DataCards";
import DataForm from "@/app/dataIA/DataForm";

export default function Page() {
    return (
        <div className="flex flex-col">
            <SubNavbar />
            <main>
                <DataIA />
                <div className="-mt-120">
                    <DataCards />
                </div>
                <div className="-mb-80">
                    <DataForm />
                </div>
            </main>
        </div>
    );
}
