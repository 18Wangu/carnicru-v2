import * as React from "react";
import { QuestionCardProps } from "../types/types";

export const QuestionCard: React.FC<QuestionCardProps> = ({
  title,
  subtitle,
  children,
  hasNextButton,
}) => (
  <div className="flex overflow-hidden relative flex-col justify-center items-center px-8 py-40 text-3xl text-lime-50 bg-teal-600 rounded-2xl min-h-[563px] min-w-[240px] w-[1097px] max-md:px-5 max-md:py-24 max-md:max-w-full">
    <div className="z-0 text-5xl max-md:max-w-full max-md:text-4xl">
      {title}
    </div>
    {subtitle && (
      <div className="z-0 mt-12 text-2xl font-semibold max-md:mt-10">
        {subtitle}
      </div>
    )}
    <div className="z-0 mt-12 max-md:mt-10">{children}</div>
    {hasNextButton && (
      <button
        className="absolute bottom-6 self-start px-16 py-4 max-w-full text-center text-emerald-900 whitespace-nowrap bg-emerald-200 h-[73px] right-[21px] rotate-[1.7066994928427445e-8rad] rounded-[60px] w-[251px] max-md:px-5"
        tabIndex={0}
      >
        suivant
      </button>
    )}
  </div>
);
