import * as React from "react";
import { PortionDetailsProps } from "./types";
import Image from "next/image";

export const PortionDetails: React.FC<PortionDetailsProps> = ({
  companionName,
  portionAmount,
  meatPercentage,
  bonePercentage,
  organsPercentage,
}) => {
  return (
    <div className="flex flex-col items-center font-semibold">
      <div className="flex flex-col items-center max-w-full text-center w-[1418px]">
        <div className="text-2xl text-[#004339] max-md:max-w-full">
          <span className="font-bold text-[#149A77]">{companionName}</span> a
          besoin d&aposune portion quotidienne de {portionAmount} g par jour
        </div>
        <div className="flex flex-col items-center pl-5 mt-16 max-w-full text-4xl text-[#B9110F] w-[530px] max-md:mt-10">
          <Image
            loading="lazy"
            src="/gamelle.svg"
            alt="Daily portion visualization"
            className="object-contain max-w-full aspect-[1.96]"
            width={313}
            height={313}
          />
          <div className="mt-8">{portionAmount}g de BARF/jour</div>
        </div>
      </div>
      <div className="flex flex-wrap gap-10 justify-center items-center p-2.5 max-md:max-w-full mt-24">
        <Image
          loading="lazy"
          src="/forme_abstraite.svg"
          alt="Portion composition illustration"
          className="object-contain self-stretch my-auto aspect-[1.1] min-w-[240px]"
          width={271}
          height={271}
        />
        <div className="flex flex-col justify-center items-start self-stretch my-auto min-w-[240px]">
          <div className="text-2xl text-center text-[#004339]">
            Dans cette portion, il y aura :
          </div>
          <div className="flex flex-col mt-12 text-xl max-md:mt-10">
            <div className="text-[#B9110F]">{meatPercentage}% de viande crue</div>
            <div className="mt-4 text-[#149A77]">
              {bonePercentage}% d&aposos broyés
            </div>
            <div className="mt-4 text-[#004339]">
              {organsPercentage}% d&aposabats
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
