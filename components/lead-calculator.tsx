"use client";
import { useState } from "react";

export const LeadCalculator = () => {
 const [leadValue, setLeadValue] = useState(100);
 const [visitors, setVisitors] = useState(1000);
 const monthlyValue = Math.round((visitors * 0.080) * leadValue);
 const yearlyValue = monthlyValue * 12;

 return (
   <div className="w-full bg-charcoal p-6 md:p-12 rounded-xl mb-32">
     <div className="text-center max-w-3xl mx-auto">
       <h2 className="text-3xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-white/80">
         YOU&apos;RE LEAVING SERIOUS MONEY ON THE TABLE
       </h2>
       <p className="text-xl md:text-2xl mb-12 md:mb-16 text-neutral-300">
         See how much you could be earning with LeadTrap
       </p>
     </div>
     
     <div className="space-y-8 md:space-y-12">
       <div>
         <label className="block text-xl font-medium text-white mb-4">
           Average Lead Value
         </label>
         <input
           type="range"
           min="100"
           max="10000"
           step="100"
           value={leadValue}
           onChange={(e) => setLeadValue(Number(e.target.value))}
           className="w-full h-3 bg-neutral-700 rounded-lg appearance-none cursor-pointer"
         />
         <div className="mt-2 text-2xl text-white font-bold">${leadValue.toLocaleString()}</div>
       </div>

       <div>
         <label className="block text-xl font-medium text-white mb-4">
           Monthly Website Visitors
         </label>
         <input
           type="range"
           min="100"
           max="100000"
           step="100"
           value={visitors}
           onChange={(e) => setVisitors(Number(e.target.value))}
           className="w-full h-3 bg-neutral-700 rounded-lg appearance-none cursor-pointer"
         />
         <div className="mt-2 text-2xl text-white font-bold">{visitors.toLocaleString()} visitors</div>
       </div>

       <div className="mt-12 md:mt-16 p-6 md:p-12 bg-black rounded-xl border border-neutral-800">
         <div className="text-center">
           <p className="text-xl md:text-2xl text-white font-medium">Potential Monthly Revenue</p>
           <p className="text-5xl md:text-7xl font-bold mt-4 md:mt-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-white/90">
             ${monthlyValue.toLocaleString()}
           </p>
           <p className="text-2xl md:text-3xl text-white/90 mt-4 md:mt-6">${yearlyValue.toLocaleString()}/year</p>
           <p className="text-xs md:text-sm text-neutral-400 mt-6 md:mt-8">*Measured in total value of leads generated by LeadTrap</p>
         </div>
       </div>
     </div>
   </div>
 );
}
