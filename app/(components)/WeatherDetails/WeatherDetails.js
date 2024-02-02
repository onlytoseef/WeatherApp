import Image from "next/image";
import React from "react";
import icon1 from "@/public/svgs/Icons1.svg";
import icon2 from "@/public/svgs/Icons2.svg";
import icon3 from "@/public/svgs/Icons3.svg";
import icon4 from "@/public/svgs/Icons4.svg";
import icon5 from "@/public/svgs/Icons5.svg";

export default function WeatherDetails(props) {
   return (
      <div class="w-full h-[398px] px-6 pt-7 pb-2 bg-_lowDark rounded-xl flex-col justify-end items-start gap-5 inline-flex mb-4">
         <div class="text-slate-500 text-base font-normal leading-snug">
            Today's weather details
         </div>
         <div class="self-stretch h-80 flex-col justify-start items-start inline-flex">
            <div class="self-stretch py-4 border-b border-gray-900 justify-between items-center inline-flex">
               <div class="justify-start items-center gap-3 flex">
                  <div class="w-8 h-8 relative">
                     <Image alt="Icon 1" src={icon1} />
                  </div>
                  <div class="text-center text-slate-300 text-sm font-bold leading-tight">
                     Feels Like
                  </div>
               </div>
               <div>
                  <span class="text-neutral-50 text-xl font-bold leading-7">
                     {Math.floor(props.citySearchData.data.main.feels_like)}{" "}
                     &deg;C
                  </span>
               </div>
            </div>
            <div class="self-stretch py-4 border-b border-gray-900 justify-between items-center inline-flex">
               <div class="justify-start items-center gap-3 flex">
                  <div class="w-8 h-8 relative">
                     <Image alt="Icon 2" src={icon2} />
                  </div>
                  <div class="text-center text-slate-300 text-sm font-bold leading-tight">
                     Probability of Rain
                  </div>
               </div>
               <div>
                  <span class="text-neutral-50 text-[16px] sm:text-[20px] font-bold leading-7">
                     0
                  </span>
                  <span class="text-neutral-50 text-[16px] sm:text-[20px] font-bold leading-snug">
                     %
                  </span>
               </div>
            </div>
            <div class="self-stretch py-4 border-b border-gray-900 justify-between items-center inline-flex">
               <div class="justify-start items-center gap-3 flex">
                  <div class="w-8 h-8 relative">
                     <Image alt="Icon 3" src={icon3} />
                  </div>
                  <div class="text-center text-slate-300 text-sm font-bold leading-tight">
                     Wind Speed
                  </div>
               </div>
               <div>
                  <span class="text-neutral-50 text-[16px] sm:text-[20px] font-bold leading-7">
                     {props.citySearchData.data.wind.speed} km/h
                  </span>
               </div>
            </div>
            <div class="self-stretch py-4 border-b border-gray-900 justify-between items-center inline-flex">
               <div class="justify-start items-center gap-3 flex">
                  <div class="w-8 h-8 relative">
                     <Image alt="Icon 4" src={icon4} />
                  </div>
                  <div class="text-center text-slate-300 text-sm font-bold leading-tight">
                     Air Humidity
                  </div>
               </div>
               <div>
                  <span class="text-neutral-50 text-xl font-bold leading-7">
                     {props.citySearchData.data.main.humidity}%
                  </span>
               </div>
            </div>
            <div class="self-stretch py-4 justify-between items-center inline-flex">
               <div class="justify-start items-center gap-3 flex">
                  <div class="w-8 h-8 relative">
                     <Image alt="Icon 5" src={icon5} />
                  </div>
                  <div class="text-center text-slate-300 text-sm font-bold leading-tight">
                     UV Index
                  </div>
               </div>
               <div class="text-neutral-50 text-xl font-bold leading-7">5</div>
            </div>
         </div>
      </div>
   );
}
