import React from "react";
import Icons from "@/public/svgs/Icons.svg";
import Image from "next/image";
import moment from "moment";

export default function Current(props) {
  return (
    <div class="w-full xl:w-[632px] h-[616px] flex flex-col rounded-lg cardbg sm:cardbg-md">
      <div class="px-[32px] pt-[32px]">
        <div className="flex justify-between">
          <div class="flex-col justify-start items-start gap-2 inline-flex">
            <div class="text-center text-neutral-50 text-[16px] sm:text-[20px] font-[700] leading-[22px] sm:leading-[28px]">
              {props.citySearchData.data.name}
            </div>
            <div class="text-center text-neutral-50 text-[12px] sm:text-[16px] font-[400] leading-[16px] sm:leading-[22px]">
              {moment().format("dddd, MMMM D, YYYY")}
            </div>
          </div>
          <div class="text-center text-neutral-50 text-[12px] sm:text-[20px] font-[700] leading-[16px]">
            {moment().format("h:mm")}
          </div>
        </div>
      </div>
      <div class="pl-[32px] mt-[20%] sm:mt-[45%] flex justify-between mb-5 lg:mb-0">
        <div class="flex-col justify-center items-start gap-3 inline-flex mt-8">
          <div class="text-white text-[48px] sm:text-[96px] font-extrabold leading-[57px] md:leading-[96px]">
            {Math.floor(props.citySearchData.data.main.temp)}&deg;C
          </div>
          <div class="justify-start items-center gap-3 inline-flex flex-col sm:flex-row">
            <div class="text-white text-[16px] font-[700] leading-[22px]">
              {Math.floor(props.citySearchData.data.main.temp_min)}
              &deg;C / {Math.floor(props.citySearchData.data.main.temp_max)}
              &deg;C
            </div>
            <div class="w-2 h-2 opacity-40 bg-white rounded-full hidden sm:block"></div>
            <div class="text-white text-[14px] font-[400] leading-[19px]">
              {props.citySearchData.data.weather[0].main}
            </div>
          </div>
        </div>
        <Image
          unoptimized
          src={`https://openweathermap.org/img/wn/${props.citySearchData.data.weather[0].icon}@2x.png`}
          alt="icon"
          className="w-[160px] sm:w-[248px]"
          width={100}
          height={100}
        />
      </div>
    </div>
  );
}
