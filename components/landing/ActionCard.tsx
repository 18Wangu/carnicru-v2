import * as React from "react";
import { CardProps } from "./types";
import Image from "next/image";

export const ActionCard: React.FC<CardProps> = ({
  title,
  imageSrc,
  bgColor,
  textColor = "text-lime-50",
}) => (
  <div
    className={`flex gap-10 justify-between items-center self-stretch px-12 py-7 my-auto ${bgColor} rounded-2xl min-h-[162px] min-w-[240px] w-[455px] max-md:px-5 max-md:max-w-full`}
  >
    <div className={`self-stretch my-auto ${textColor}`}>{title}</div>
    <Image
      loading="lazy"
      src={imageSrc}
      alt={`Illustration for ${title}`}
      className="object-contain shrink-0 self-stretch my-auto aspect-[1.07]"
      width={113}
      height={113}
    />
  </div>
);
