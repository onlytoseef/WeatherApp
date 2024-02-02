"use client";
import React, { useEffect, useState } from "react";
// import logo from "@/public/svgs/Logo.svg";
import Image from "next/image";
import Detail from "../(components)/WeatherDetails/WeatherDetails";
import FiveDaysUpdate from "../(components)/FiveDayforecast/FiveDayforecast";
import Current from "../(components)/Current/Current";

import { useSelector } from "react-redux";
import Link from "next/link";
import SearchInput from "../(components)/SearchInput/SearchInput";

export default function Page() {
   const {
      citySearchLoading,
      citySearchData,
      forecastLoading,
      forecastData,
      forecastError,
   } = useSelector((state) => state.weather);

   console.log("fetchCity", citySearchData);
   // main loadings state
   const [loadings, setLoadings] = useState(true);

   // check if any of redux loading state is still true
   const allLoadings = [citySearchLoading, forecastLoading];
   useEffect(() => {
      const isAnyChildLoading = allLoadings.some((state) => state);
      setLoadings(isAnyChildLoading);
   }, [allLoadings]);

   // function to filter forecast data based on the time of the first object
   const filterForecastByFirstObjTime = (forecastData) => {
      if (!forecastData) {
         return [];
      }

      const firstObjTime = forecastData[0].dt_txt.split(" ")[1];
      return forecastData.filter((data) => data.dt_txt.endsWith(firstObjTime));
   };

   const filteredForecast = filterForecastByFirstObjTime(forecastData?.list);

   return (
      <div className="max-w-[1366px] mx-auto bg-_dark p-2 sm:p-6 lg:flex gap-4">
         <div className="bg-_lowDark p-4 w-full xl:w-[664px] rounded-xl mb-2">
            <div className="flex flex-col gap-4">
               <div className="flex flex-row gap-4">
                  <Link
                     href="/"
                     class="w-14 h-14 p-2 bg-neutral-800 rounded-lg justify-center items-center inline-flex">
                     <div class="grow shrink basis-0 self-stretch px-[5px] pt-2.5 pb-[10.22px] opacity-80 justify-center items-center inline-flex">
                        <svg
                           width="24"
                           height="16"
                           viewBox="0 0 24 16"
                           fill="none"
                           xmlns="http://www.w3.org/2000/svg">
                           <path
                              d="M18.132 15.8243C17.2752 15.8243 16.7473 15.4286 15.8847 14.9627C15.0221 14.4968 12.5275 12.6209 12.5275 10.2858C12.5275 8.70168 12.1191 7.42044 11.4237 6.39938C10.7335 5.38615 9.79838 4.68416 8.82561 4.18863C8.35684 3.94989 7.86903 3.75465 7.38328 3.59329C7.10011 3.4993 6.93577 3.19523 7.05865 2.9234C7.83736 1.19945 9.57162 0 11.5862 0C14.3285 0 16.5518 2.2231 16.5518 4.96554C16.5518 5.55225 16.45 6.11528 16.2632 6.63775C17.0547 6.10434 18.0083 5.79307 19.0345 5.79307C21.7769 5.79307 23.9999 8.01617 23.9999 10.7586C23.9999 14.0601 21.0988 15.8243 18.132 15.8243Z"
                              fill="#8FB2F5"
                           />
                           <path
                              d="M0 10.3449C0 12.9623 1.72564 15.1432 4.01169 15.6251C4.36454 15.754 4.74548 15.8243 5.14288 15.8243H12.8578C13.1166 15.8243 13.2292 15.4783 13.0317 15.3111C11.6834 14.1703 10.6814 12.5625 10.6814 10.2858C10.6814 9.03484 10.3646 8.12373 9.89789 7.43878C9.4259 6.74594 8.76207 6.22811 7.98771 5.83356C7.20615 5.4355 6.35766 5.18192 5.54738 5.00216C5.35654 4.97808 5.16232 4.96558 4.96555 4.96558C2.2231 4.96558 0 7.374 0 10.3449Z"
                              fill="#8FB2F5"
                           />
                        </svg>
                     </div>
                  </Link>
                  <SearchInput />
               </div>
               {loadings ? null : (
                  <>
                     {citySearchData && citySearchData.error ? (
                        <div>{citySearchData.error}</div>
                     ) : (
                        <>
                           {forecastError ? (
                              <div>{forecastError}</div>
                           ) : (
                              <>
                                 {citySearchData && citySearchData.data ? (
                                    <>
                                       <Current
                                          citySearchData={citySearchData}
                                       />
                                    </>
                                 ) : (
                                    <div className="error-msg">
                                       No Data Found
                                    </div>
                                 )}
                              </>
                           )}
                        </>
                     )}
                  </>
               )}
            </div>
         </div>
         <div>
            <>
               {citySearchData && citySearchData.data ? (
                  <>
                     <Detail citySearchData={citySearchData} />
                  </>
               ) : null}
            </>
            {filteredForecast.length > 0 ? (
               <FiveDaysUpdate filteredForecast={filteredForecast} />
            ) : null}
         </div>
      </div>
   );
}
