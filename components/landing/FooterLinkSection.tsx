import * as React from "react";
import { FooterLinkSectionProps } from "./types";

export const FooterLinkSection: React.FC<FooterLinkSectionProps> = ({
  title,
  content,
}) => (
  <div className="flex flex-col justify-between self-stretch my-auto text-xl text-lime-50 min-h-[98px]">
    <div>{title}</div>
    <div className="mt-6 font-semibold">{content}</div>
  </div>
);
