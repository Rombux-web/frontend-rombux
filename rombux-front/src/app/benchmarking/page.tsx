import React from 'react';
import SubNavBar from "@/components/SubNavbar/SubNavbar";
import Benchmarking from './Benchmarking';
import BenchmarkingCards from "@/app/benchmarking/BenchmarkingCards";
import BenchmarkingForm from './BenchmarkingForm';


export default function Page() {
  return (
    <div className="flex flex-col">
      <SubNavBar />
      <main>
        <Benchmarking />
        <div className="-mt-120">
          <BenchmarkingCards />
        </div> 
        <div>
          <BenchmarkingForm/>
        </div>
      </main>   
    </div>
  );
}
