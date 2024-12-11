"use client";

import * as React from "react";
import { PlanCardProps } from "./types";
import Image from "next/image";

export const PlanCard: React.FC<PlanCardProps> = ({
  title,
  price,
  imageSrc,
  onChoose,
}) => {
  return (
    <div className="flex gap-10 items-start self-stretch my-auto min-w-[240px] w-[351px]">
      <div className="flex flex-col items-center h-[420px] min-w-[240px] w-[351px]">
        <div className="gap-10 text-[#004339]">{title}</div>
        <div className="flex overflow-hidden flex-col mt-5 max-w-full text-right whitespace-nowrap rounded-2xl w-[351px]">
          <div className="flex relative flex-col items-start pt-40 w-full rounded-2xl aspect-[1.245] max-md:pt-24 max-md:pr-5">
            <Image
              loading="lazy"
              src={imageSrc}
              alt={`${title} subscription plan`}
              className="object-cover absolute inset-0 size-full"
            />
            <div className="flex overflow-hidden relative gap-4 items-center p-5 bg-[#149A77] rounded-2xl">
              <div className="gap-10 self-stretch my-auto">{price}</div>
            </div>
          </div>
        </div>
        <button
          onClick={onChoose}
          className="gap-2.5 self-stretch p-5 mt-5 max-w-full text-center text-white whitespace-nowrap bg-[#B9110F] rounded-2xl w-[351px] hover:bg-[#E30613] focus:outline-none focus:ring-2 focus:ring-[#E30613] focus:ring-offset-2"
          aria-label={`Choisir ${title}`}
        >
          Choisir
        </button>
        <div className="flex gap-10 mt-5 min-h-[24px]" />
      </div>
    </div>
  );
};
