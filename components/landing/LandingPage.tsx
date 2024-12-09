import * as React from "react";
import { ActionCard } from "./ActionCard";
import { SocialIcon } from "./SocialIcon";
import { FooterLinkSection } from "./FooterLinkSection";

const actionCards = [
  {
    title: "Qui sommes nous ?",
    imageSrc:
      "/croquette.svg",
    bgColor: "bg-[#149A77]",
  },
  {
    title: "Infos Pratiques",
    imageSrc:
      "/fleche.svg",
    bgColor: "bg-emerald-200",
    textColor: "text-emerald-900",
  },
  {
    title: "Boutique",
    imageSrc:
      "/boucle.svg",
    bgColor: "bg-red-700",
  },
  {
    title: "Le BARF en bref",
    imageSrc:
      "/viande.svg",
    bgColor: "bg-teal-600",
  },
];

const footerSections = [
  {
    title: "Nous contacter",
    content: "numéro : 0676786534 mai : carnicru.contact@gmail.com",
  },
  {
    title: "Nous découvrir",
    content: "Qui sommes nous ?",
  },
  {
    title: "Nos réseaux",
    content: "Qui sommes nous ?",
  },
];

export function LandingPage() {
  return (
    <div className="flex flex-col max-md:pt-24 max-md:pl-5 max-sm:hidden">
      <div className="z-10 self-center mt-28 ml-8 text-xl text-center text-lime-50 max-md:mt-10 max-md:max-w-full">
        CODE PROMO -25% pour la première commande sur le site !
      </div>
      <div className="flex flex-col items-center mt-0 w-full bg-lime-50 max-md:max-w-full">
        <div className="flex relative justify-between items-center px-12 py-9 -ml-1 w-full max-w-[1920px] min-h-[103px] max-md:px-5 max-md:max-w-full">
          <div className="z-0 self-stretch my-auto text-2xl text-teal-600 uppercase">
            se connecter
          </div>
          <div className="flex z-0 gap-10 items-center self-stretch my-auto text-2xl uppercase whitespace-nowrap">
            <div className="self-stretch my-auto text-red-700">FAQ</div>
            <div className="self-stretch my-auto text-emerald-900">panier</div>
          </div>
          <div className="flex absolute left-2/4 z-0 gap-6 items-center self-start -translate-x-2/4 bottom-[15px] min-w-[240px] translate-y-[0%]">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/b6552ad85c9b00b9aaa16abe4bac280a3868338d67ecb8bc14644464f4ee84c9?placeholderIfAbsent=true&apiKey=dcd0895cf3d542fc8e4c37bdfe462197"
              alt="Company logo part 1"
              className="object-contain shrink-0 self-stretch my-auto aspect-square w-[73px]"
            />
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/a187489776bc0d4a41911bd0e8d42e6b62234a78ed7ad41eecd1caaafaa76dea?placeholderIfAbsent=true&apiKey=dcd0895cf3d542fc8e4c37bdfe462197"
              alt="Company logo part 2"
              className="object-contain shrink-0 self-stretch my-auto aspect-[5.56] w-[150px]"
            />
          </div>
        </div>
        <div className="flex flex-col items-center pb-5 w-full text-lime-50 max-w-[1920px] max-md:max-w-full">
          <div className="flex overflow-hidden relative gap-5 max-w-full bg-lime-50 rounded-2xl min-h-[700px] w-[1883px]">
            <div className="flex z-0 flex-col justify-center rounded-2xl min-w-[240px] w-[452px] max-md:max-w-full">
              <div className="flex overflow-hidden flex-1 justify-between px-12 py-8 max-w-full h-full bg-red-600 rounded-2xl w-[452px] max-md:px-5">
                <div className="flex flex-col justify-center min-w-[240px] w-[347px]">
                  <div className="text-4xl">Simuler mon compagnon !</div>
                  <div className="mt-5 text-sm font-semibold">
                    simulez les besoins de votre animal pour découvrir nos
                    formules adaptées !
                  </div>
                </div>
              </div>
            </div>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/41c428569ed8008eeb668407199e8166b19ab2a6b4c7c88c6d548a32a91b0ed7?placeholderIfAbsent=true&apiKey=dcd0895cf3d542fc8e4c37bdfe462197"
              alt="Main banner image"
              className="object-contain z-0 flex-1 shrink w-full rounded-2xl aspect-[2.02] basis-0 min-w-[240px] max-md:max-w-full"
            />
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/21b6c85e92497956a449f0c47b2d5428be59aeeb26565450b77597dbcb5d5ab7?placeholderIfAbsent=true&apiKey=dcd0895cf3d542fc8e4c37bdfe462197"
              alt="Decorative element 1"
              className="object-contain absolute bottom-0 z-0 shrink-0 self-start aspect-[0.61] h-[251px] left-[589px] w-[127px]"
            />
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/ffec14b9c5f3f44162228aa54b566db3803449085899c1f0df80764dd9939797?placeholderIfAbsent=true&apiKey=dcd0895cf3d542fc8e4c37bdfe462197"
              alt="Decorative element 2"
              className="object-contain absolute bottom-0 z-0 shrink-0 self-start aspect-[0.95] h-[379px] min-w-[240px] right-[30px] w-[272px]"
            />
          </div>
          <div className="flex flex-wrap gap-5 justify-center items-center mt-5 text-2xl max-md:max-w-full">
            {actionCards.map((card, index) => (
              <ActionCard key={index} {...card} />
            ))}
          </div>
        </div>
        <div className="flex flex-wrap gap-10 justify-between items-center self-stretch px-12 py-8 w-full bg-emerald-900 min-h-[162px] max-md:px-5 max-md:max-w-full">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/3c3dadabfb4c88e988575efd3ffae22dc3f43a8e7fb6389587eecdeeaafa9f60?placeholderIfAbsent=true&apiKey=dcd0895cf3d542fc8e4c37bdfe462197"
            alt="Footer logo"
            className="object-contain shrink-0 self-stretch my-auto aspect-[5.43] min-w-[240px] w-[250px]"
          />
          <div className="flex flex-col justify-between self-stretch my-auto min-h-[98px]">
            <div className="text-xl text-lime-50">Nos réseaux</div>
            <div className="flex gap-2 items-center self-start mt-12 max-md:mt-10">
              {[...Array(4)].map((_, index) => (
                <SocialIcon key={index} className="" />
              ))}
            </div>
          </div>
          {footerSections.map((section, index) => (
            <FooterLinkSection key={index} {...section} />
          ))}
        </div>
      </div>
    </div>
  );
}
