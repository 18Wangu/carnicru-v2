"use client";

import * as React from "react";
import { PlanCard } from "../../../components/subscriptionPlans/PlanCard";
import { PortionDetails } from "../../../components/subscriptionPlans/PortionDetails";
import { SubscriptionPlan } from "../../../components/subscriptionPlans/types";
import { useSearchParams } from "next/navigation";

const SubscriptionPlans: React.FC = () => {
  const searchParams = useSearchParams();
  const nomChien = searchParams.get("nomChien");
  const portion = searchParams.get("portion");

  // Faire quelque chose de beaucoup plus simple, pas besoin d'autant de code
  const plans: SubscriptionPlan[] = [
    {
      title: "Formule semaine",
      price: "PRIX",
      imageSrc:
        "/portion2.png",
      url: "#",
    },
    {
      title: "Formule mensuelle",
      price: "PRIX",
      imageSrc:
        "/portion.jpeg",
      url: "",
    },
  ];

  return (
    <div className="flex flex-col items-center font-semibold mt-20">
      <PortionDetails
        companionName={nomChien || "Nom de votre compagnon"}
        portionAmount={portion || "0"}
        meatPercentage={60}
        bonePercentage={30}
        organsPercentage={10}
      />

      <div className="flex flex-col items-center mt-36 w-full text-2xl max-md:mt-10 max-md:max-w-full">
        <div className="flex flex-col items-center w-full max-md:max-w-full">
          <div className="text-center text-[#004339] max-md:max-w-full">
            Voici les formules adaptées à votre compagnon !
            <br />
            <span className="text-base text-[#149A77]">
              Grâce à vos informations, nous avons pû déterminer la portion
              quotidienne idéale pour votre compagnon,
            </span>
            <br />
            <span className="text-base text-[#149A77]">
              choisissez l&aposabonnement qui vous correspond le mieux !
            </span>
          </div>

          <div className="flex flex-wrap gap-10 justify-center items-center mt-12 w-full text-white max-md:mt-10 max-md:max-w-full">
            {plans.map((plan) => (
              <PlanCard
                title="Formule semaine"
                price={plan.price}
                imageSrc={plan.imageSrc}
                onChoose={() => {
                  window.location.href = plan.url;
                }}
              />
            ))}
          </div>
        </div>

        <div className="gap-10 mt-24 max-w-full text-base text-center text-[#149A77] w-[470px] max-md:mt-10 max-md:max-w-full">
          Nos repas sont préparés à la main sur mesure pour votre compagnon, à
          partir de viandes et chutes de bouchers français. Ils conviennent pour
          une alimentation régulière.
        </div>

        <div className="flex flex-col items-center mt-24 max-w-full w-[818px] max-md:mt-10">
          <div className="text-center text-[#004339] max-md:max-w-full">
            Une hésitation ?
            <br />
            <span className="text-base text-[#149A77]">
              Nous vous proposons des portions uniques, afin de tester auprès de
              votre compagnon les produits Carnicru ou tout simplement compléter
              son régime alimentaire.
            </span>
          </div>
          
          <div className="mt-10">
            <PlanCard
              title="Formule unité"
              price="3,99€"
              imageSrc="/portion.jpeg"
              onChoose={() => {
                window.location.href = "/pages/Livraison";
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubscriptionPlans;
