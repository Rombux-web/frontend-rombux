import React from 'react';
import SubNavBar from '@/components/SubNavbar/SubNavbar';
import Benchmarking from './Benchmarking';
import BenchmarkingCards from "@/app/benchmarking/BenchmarkingCards";
import BenchmarkingForm from "@/app/benchmarking/BenchmarkingForm";

export default function Page() {
    return (
        <div className="flex flex-col">
            <SubNavBar />
            <main>
                <Benchmarking />
                <div className="-mt-120">
                    <BenchmarkingCards />
                </div>
                <div className="-mb-80">
                    <BenchmarkingForm />
                </div>
            </main>
        </div>
    );
}
