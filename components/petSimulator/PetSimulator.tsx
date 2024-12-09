import * as React from "react";
import { NavLink } from "../NavLink";
import { QuestionCard } from "./components/QuestionCard";

const navLinks = ["mon compte", "FAQ", "panier"];
const socialLinks = Array(4).fill({ icon: "", href: "#" });

export default function PetSimulator() {
  return (
    <div className="flex overflow-hidden flex-col">
      <div className="px-16 py-2.5 w-full text-xl text-center text-lime-50 bg-teal-600 rounded-[60px] max-md:px-5 max-md:max-w-full">
        CODE PROMO -25% pour la première commande sur le site !
      </div>

      <main className="flex flex-col self-end mt-28 w-full max-w-[1509px] max-md:mt-10 max-md:max-w-full">
        <div className="flex overflow-hidden gap-10 items-start text-2xl font-semibold max-md:max-w-full">
          <QuestionCard
            title="Quelques questions..."
            subtitle="Je souhaite simuler :"
            hasNextButton={true}
          >
            <div className="flex z-0 flex-wrap gap-10 items-start mt-12 text-center max-md:mt-10 max-md:max-w-full">
              <button
                className="px-12 py-4 bg-red-600 min-w-[240px] rounded-[60px] w-[251px] max-md:px-5"
                tabIndex={0}
              >
                Un chien
              </button>
              <button
                className="px-14 py-4 bg-red-600 min-w-[240px] rounded-[60px] w-[251px] max-md:px-5"
                tabIndex={0}
              >
                Un chat
              </button>
            </div>
          </QuestionCard>
        </div>

        <div className="flex flex-col items-center mt-12 ml-16 max-w-full w-[958px] max-md:mt-10">
          <div className="text-xl font-semibold text-center text-teal-600">
            4 questions restantes
          </div>
          <div className="flex flex-col mt-2.5 w-full rounded-[30px]">
            <div className="flex flex-col justify-center items-start px-0.5 py-1 border-teal-600 border-solid border-[3px] rounded-[30px] max-md:pr-5 max-md:max-w-full">
              <div className="flex shrink-0 h-4 bg-emerald-900 border border-emerald-900 border-solid rounded-[30px] w-[159px]" />
            </div>
          </div>
        </div>
      </main>

      
    </div>
  );
}
