// ResultatPortionContent.tsx
"use client";

import * as React from "react";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { Footer } from "@/components/Footer";
import { CodePromo } from "@/components/CodePromo";

const ResultatPortionContent: React.FC = () => {
  const searchParams = useSearchParams();
  const nomChien = searchParams.get("nomChien") || "Votre compagnon";
  const portion = searchParams.get("portion") || "0";
  const portions = parseFloat(searchParams.get("portion") || "0");

  const plans = [
    {
      title: "Formule semaine",
      price: (portions * 0.0095 * 7).toFixed(2) + "€",
      imageSrc: "/portion2.png",
      url: "/pages/Livraison",
    },
    {
      title: "Formule mensuelle",
      price: ((portions * 0.0095 * 30) * 0.95).toFixed(2) + "€",
      imageSrc: "/portion2.png",
      url: "/pages/Livraison",
    },
    {
      title: "Formule unité",
      price: (portions * 0.0095).toFixed(2) + "€",
      imageSrc: "/portion2.png",
      url: "/pages/Livraison",
    },
  ];

  const renderPlanCard = (
    title: string,
    price: string,
    imageSrc: string,
    url: string
  ) => (
    <div className="flex gap-10 items-start self-stretch my-auto min-w-[240px] w-[351px]">
      <div className="flex flex-col items-center h-[420px] min-w-[240px] w-[351px]">
        <div className="gap-10 text-[#004339]">{title}</div>
        <div className="flex overflow-hidden flex-col mt-5 max-w-full text-right whitespace-nowrap rounded-2xl w-[351px]">
          <div className="flex relative flex-col items-start pt-40 w-full rounded-2xl aspect-[1.245] max-md:pt-24 max-md:pr-5">
            <Image
              loading="lazy"
              src={imageSrc}
              alt={`${title} subscription plan`}
              width={351}
              height={440}
              className="object-cover absolute inset-0 size-full"
            />
            <div className="flex overflow-hidden relative gap-4 items-center p-5 bg-[#149A77] rounded-2xl">
              <div className="gap-10 self-stretch my-auto">{price}</div>
            </div>
          </div>
        </div>
        <button
          onClick={() => (window.location.href = url)}
          className="gap-2.5 self-stretch p-5 mt-5 max-w-full text-center text-white whitespace-nowrap bg-[#B9110F] rounded-2xl w-[351px] hover:bg-[#E30613] focus:outline-none focus:ring-2 focus:ring-[#E30613] focus:ring-offset-2"
          aria-label={`Choisir ${title}`}
        >
          Choisir
        </button>
        <div className="flex gap-10 mt-5 min-h-[24px]" />
      </div>
    </div>
  );

  return (
    <div>
      <CodePromo />
      <div className="flex flex-col items-center font-semibold my-20">
        <Link href="/pages/SimulationPortion" className='absolute top-40 left-12 text-[#004339] text-xl hover:underline hover:underline-offset-4'>
          <span>Retour</span>
        </Link>
        {/* Portion Details */}
        <div className="flex flex-col items-center font-semibold">
          <div className="flex flex-col items-center max-w-full text-center w-[1418px]">
            <div className="text-2xl text-[#004339] max-md:max-w-full">
              <span className="font-bold text-[#149A77]">{nomChien}</span> a besoin d&apos;une portion quotidienne de {portion} g par jour
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
              <div className="mt-8">{portion}g de BARF/jour</div>
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
              <div className="text-2xl text-center text-[#004339]">Dans cette portion, il y aura :</div>
              <div className="flex flex-col mt-12 text-xl max-md:mt-10">
                <div className="text-[#B9110F]">60% de viande crue</div>
                <div className="mt-4 text-[#149A77]">30% d&apos;os broyés</div>
                <div className="mt-4 text-[#004339]">10% d&apos;abats</div>
              </div>
            </div>
          </div>
        </div>

        {/* Subscription Plans */}
        <div className="flex flex-col items-center mt-36 w-full text-2xl max-md:mt-10 max-md:max-w-full">
          <div className="text-center text-[#004339] max-md:max-w-full">
            Voici les formules adaptées à votre compagnon !
            <br />
            <span className="text-base text-[#149A77]">
              Grâce à vos informations, nous avons pu déterminer la portion quotidienne idéale pour votre compagnon,
            </span>
            <br />
            <span className="text-base text-[#149A77]">
              choisissez l&apos;abonnement qui vous correspond le mieux !
            </span>
          </div>

          <div className="flex flex-wrap gap-10 justify-center items-center mt-12 w-full text-white max-md:mt-10 max-md:max-w-full">
            {plans.slice(0, 2).map((plan, index) => (
              <div key={plan.title || index}>
                {renderPlanCard(plan.title, plan.price, plan.imageSrc, plan.url)}
              </div>
            ))}
          </div>

          <div className="gap-10 mt-24 max-w-full text-base text-center text-[#149A77] w-[470px] max-md:mt-10 max-md:max-w-full">
            Nos repas sont préparés à la main sur mesure pour votre compagnon, à partir de viandes et chutes de bouchers français. Ils conviennent pour une alimentation régulière.
          </div>

          <div className="flex flex-col items-center mt-10 max-w-full w-[818px] max-md:mt-10">
            <div className="text-center text-[#004339] max-md:max-w-full">
              Une hésitation ?
              <br />
              <span className="text-base text-[#149A77]">
                Nous vous proposons des portions uniques, afin de tester auprès de votre compagnon les produits Carnicru ou tout simplement compléter son régime alimentaire.
              </span>
            </div>

            <div className="mt-10 text-white">
              {renderPlanCard(
                plans[2].title,
                plans[2].price,
                plans[2].imageSrc,
                plans[2].url
              )}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ResultatPortionContent;
