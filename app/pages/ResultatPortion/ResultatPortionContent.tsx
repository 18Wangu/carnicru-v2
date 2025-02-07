// ResultatPortionContent.tsx
"use client";

import * as React from "react";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { Footer } from "@/components/Footer";

const ResultatPortionContent: React.FC = () => {
  const searchParams = useSearchParams();
  const nomChien = searchParams.get("nomChien") || "Votre compagnon";
  const portion = searchParams.get("portion") || "0";
  const portions = parseFloat(searchParams.get("portion") || "0");

  const plans = [
    {
      title: "Formule semaine",
      price: ((portions * 0.0095 * 7) + 20).toFixed(2) + "€",
      imageSrc: "/portion2.png",
    },
    {
      title: "Formule mensuelle",
      price: (((portions * 0.0095 * 28) * 0.95) + 20).toFixed(2) + "€",
      imageSrc: "/portion2.png",
    },
    {
      title: "Formule unité",
      price: ((portions * 0.0095) + 20).toFixed(2) + "€",
      imageSrc: "/portion2.png",
    },
  ];

  const renderPlanCard = (title: string, price: string, imageSrc: string) => (
    <div className="flex gap-10 my-auto md:w-[351px]">
      <div className="flex flex-col items-center h-[480px] md:w-[351px]">
        <div className="gap-10 text-[#004339]">{title}</div>
        <div className="flex overflow-hidden flex-col mt-5 rounded-2xl w-[351px] relative">
          <div className="flex relative flex-col items-start pt-40 w-full rounded-2xl aspect-[1.245] max-md:pt-24 max-md:pr-5">
            <Image
              loading="lazy"
              src={imageSrc}
              alt={`${title} subscription plan`}
              width={351}
              height={440}
              className="object-cover absolute inset-0 size-full"
            />
            <div className="flex overflow-hidden absolute bottom-5 left-10 md:left-0 items-center p-3 md:p-5 bg-[#149A77] rounded-2xl">
              <div className="gap-10 self-stretch my-auto">{price}</div>
            </div>
          </div>
        </div>
        <Link
          href={{
            pathname: "/pages/Livraison",
            query: { prix: price },
          }}
          className="gap-2.5 p-5 mt-5 text-center text-white bg-[#B9110F] rounded-2xl md:w-full hover:bg-[#E30613] focus:outline-none focus:ring-2 focus:ring-[#E30613] focus:ring-offset-2 mx-auto" 
          aria-label={`Choisir ${title}`}
        >
          Choisir
        </Link>
        <div className="text-sm text-center text-[#004339] mt-2 w-full px-4 md:whitespace-nowrap">
          <em>dont 20€ de livraison déjà inclus dans le prix</em>
        </div>

        <div className="flex gap-10 mt-5 min-h-[0px]" />
      </div>
    </div>
  );

  return (
    <div>
      <div className="flex flex-col items-center font-semibold my-20">
        <Link href="/pages/SimulationPortion" className='absolute top-32 left-12 text-[#004339] text-xl hover:underline hover:underline-offset-4 hidden md:block'>
          <span>Retour</span>
        </Link>

        {/* Portion Details */}
        <div className="flex flex-col items-center font-semibold">
          <div className="flex flex-col items-center text-center md:w-[1418px]">
            <div className="text-2xl text-[#004339]">
              <span className="font-bold text-[#149A77]">{nomChien}</span> a besoin d&apos;une portion quotidienne de {portion} g par jour
            </div>
            <div className="flex flex-col items-center pl-5 mt-16 text-4xl text-[#B9110F] md:w-[530px] max-md:mt-10">
              <Image
                loading="lazy"
                src="/gamelle.svg"
                alt="Daily portion visualization"
                className="object-contain max-w-full aspect-[1.96] w-[200px] md:w-[313px]"
                width={313}
                height={313}
              />
              <div className="text-2xl md:text-4xl mt-8">{portion}g de BARF/jour</div>
            </div>
          </div>
          <div className="flex flex-wrap gap-10 justify-center items-center p-2.5 max-md:max-w-full mt-24">
            <Image
              loading="lazy"
              src="/forme_abstraite.svg"
              alt="Portion composition illustration"
              className="object-contain self-stretch my-auto aspect-[1.1] w-[220px] md:w-[271px]"
              width={271}
              height={271}
            />
            <div className="flex flex-col justify-center items-start self-stretch my-auto md:w-[500px]">
              <div className="text-2xl text-center text-[#004339]">Dans cette portion, il y aura :</div>
              <div className="flex flex-col items-center md:items-start mt-12 text-xl max-md:mt-10">
                <div className="text-[#B9110F]">60% de viande crue</div>
                <div className="mt-4 text-[#149A77]">30% d&apos;os charnus</div>
                <div className="mt-4 text-[#004339]">10% d&apos;abats et mix légumes</div>
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
                {renderPlanCard(plan.title, plan.price, plan.imageSrc)}
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
                plans[2].imageSrc
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
