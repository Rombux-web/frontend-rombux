import React from 'react';
import SubNavbar from '@/components/SubNavBar/SubNavBar';
import Benchmarking from './Benchmarking';
import BenchmarkingCards from "@/app/benchmarking/BenchmarkingCards";
import BenchmarkingForm from './BenchmarkingForm';


export default function Page() {
    return (
        <div className="flex flex-col">
            <SubNavbar />
            <main>
                <Benchmarking />
                <div className="-mt-120">
                    <BenchmarkingCards />
                </div>
                <div>
                    <BenchmarkingForm />
                </div>
            </main>
        </div>
    );
}
