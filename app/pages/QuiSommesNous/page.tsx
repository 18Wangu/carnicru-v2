import React from 'react';
import Image from 'next/image';
import { montserratFont } from '@/app/fonts/font';
import { Footer } from '@/components/Footer';
import Link from 'next/link';
import { CodePromo } from '@/components/CodePromo';

const Page = () => {
    return (
        <div className='relative'>
            <CodePromo />
            <div className='text-[#004339] flex flex-col items-center mx-44 mt-24 mb-60 gap-24'>
                <Link href="/" className='absolute top-20 left-12 text-xl hover:underline hover:underline-offset-4'>
                    <span>Retour</span>
                </Link>
                <div className="flex gap-10  items-center">
                    <Image
                        src="/viande.jpg"
                        alt="Viande"
                        width={450}
                        height={500}
                        className="rounded-xl"
                    />
                    <div>
                        <h1 className='text-5xl mb-10'>Qui sommes-nous ?</h1>
                        <p className={`text-xl w-[600px] ${montserratFont.className}`}>Carnicru est une entreprise qui s&apos;engage à changer l&apos;alimentation des carnivores 
                            domestiques en offrant une nouvelle solution nutritionnelle. L&rsquo;objectif est de fournir 
                            aux gardiens de ces compagnons une alimentation optimale, soucieux de la santé et du 
                            bien-être de leurs animaux de compagnie. </p>
                    </div>
                </div>
                <div className='flex items-center'>
                    <h1 className='text-3xl'>Nos engagements</h1>
                    <Image
                        src="/coeur-rouge.svg"
                        alt="Chien et chat"
                        width={150}
                        height={500}
                        className="rounded-xl"
                    />            
                </div>
                <div className="flex gap-10 items-center">
                    <div>
                        <h2 className='text-3xl mb-10'>La qualité dans vos menus</h2>
                        <p className={`text-xl w-[600px] ${montserratFont.className}`}>Notre engagement envers le bien-être des carnivores domestiques à quatre pattes se concrétise 
                            par une approche naturelle et non transformée, en utilisant exclusivement des ingrédients issus 
                            de sources fiables et de qualité supérieure.</p>
                    </div>
                    <Image
                        src="/chien-mange-table.png"
                        alt="Chien mange a une table"
                        width={450}
                        height={500}
                        className="rounded-xl"
                    />
                </div>
                <Image
                    src="/boucle-verte.svg"
                    alt="Chien et chat"
                    width={200}
                    height={500}
                    className="absolute top-[1250px] left-24"
                />
                <div className="flex gap-10 items-center" items-center>
                    <Image
                        src="/chat-leche-babine.jpg"
                        alt="chat qui se leche les babines"
                        width={450}
                        height={500}
                        className="rounded-xl"
                    />
                    <div>
                        <h2 className='text-3xl mb-10'>La volonté du sur-mesure </h2>
                        <p className={`text-xl w-[600px] ${montserratFont.className}`}>Nous croyons fermement en la singularité de chaque animal, c&apos;est pourquoi nous accordons 
                            une attention particulière à comprendre ses besoins spécifiques. Nous nous investissons 
                            dans la création de repas en parfaite harmonie avec la physiologie individuelle de votre compagnon.</p>
                    </div>
                </div>
                <div className="flex gap-10 items-center">
                    <div>
                        <h2 className='text-3xl mb-10'>Le retour aux sources</h2>
                        <p className={`text-xl w-[600px] ${montserratFont.className}`}>Cette démarche vise à éliminer tout ingrédient artificiel qui ne fait pas partie du régime naturel 
                            des carnivores. La présence de viande crue dans nos recettes encourage la mastication, reproduisant 
                            le comportement naturel de chasse et de mastication propre aux carnivores dans leur environnement naturel.</p>
                    </div>
                    <Image
                        src="/chien-plage.jpg"
                        alt="chien qui cours sur la plage"
                        width={450}
                        height={500}
                        className="rounded-xl"
                    />
                </div>
                <Image
                    src="/boucle-verte.svg"
                    alt="Chien et chat"
                    width={200}
                    height={500}
                    className="absolute bottom-52 right-24 rotate-180"
                />
            </div>
            <Footer />
        </div>
    );
};

export default Page;
