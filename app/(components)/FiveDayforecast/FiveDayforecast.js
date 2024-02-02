import Image from "next/image";
import React from "react";

export default function FiveDayforecast(props) {
  return (
    <div class="w-full h-[306px] px-6 pt-7 pb-6 bg-_lowDark rounded-xl flex-col justify-end items-start gap-5 inline-flex">
      <div class="text-slate-500 text-base font-normal leading-snug">
        5 day forecast
      </div>
      <div class="self-stretch h-[212px] justify-center items-center inline-flex">
        {props.filteredForecast.map((data, index) => {
          const date = new Date(data.dt_txt);
          const day = date.toLocaleDateString("en-US", {
            weekday: "short",
          });
          return (
            <div
              key={index}
              class="grow shrink basis-0 self-stretch flex-col justify-center items-center gap-3 inline-flex"
            >
              <div class="text-center text-slate-300 text-[14px] font-[700] leading-[19px]">
                {day}
              </div>
              <Image
                unoptimized
                src={`https://openweathermap.org/img/wn/${data.weather[0].icon}.png`}
                alt="icon"
                width={100}
                height={100}
              />{" "}
              <div class="flex-col justify-start items-center gap-1 flex">
                <div class="text-slate-300 text-[13px] xl:text-[14px] font-normal leading-tight hidden sm:block">
                  {data.weather[0].description}
                </div>
                <div class="justify-start items-start gap-2 sm:flex">
                  <div class="text-center text-neutral-50 text-sm font-bold leading-tight">
                    {Math.floor(data.main.temp_max)}&deg;
                  </div>
                  <div class="text-center text-slate-500 text-sm font-bold leading-tight">
                    {Math.floor(data.main.temp_min)}&deg;
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
