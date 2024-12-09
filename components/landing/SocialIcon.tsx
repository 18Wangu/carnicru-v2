import * as React from "react";
import { SocialIconProps } from "./types";

export const SocialIcon: React.FC<SocialIconProps> = ({ className }) => (
  <div
    className={`flex shrink-0 self-stretch my-auto bg-zinc-300 h-[25px] w-[25px] ${className}`}
  />
);
