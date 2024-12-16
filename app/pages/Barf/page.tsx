import React from 'react';
import Image from 'next/image';
import { Footer } from '@/components/Footer';
import { montserratFont } from '@/app/fonts/font';

const App: React.FC = () => {
    return (
        <div>
            <div className='flex flex-col items-center text-[#004339] mx-44 mt-24 mb-60 gap-24'>
                <div className='flex gap-10 items-center'>
                    <Image 
                        src="/portion.jpeg" 
                        alt="portion de viande" 
                        width={450}
                        height={500}
                        className="rounded-xl"
                    />
                    <div>
                        <h1 className='text-5xl mb-10'>Le BARF en Bref</h1>
                        <p className={`text-xl w-[600px] ${montserratFont.className}`}>Le BARF (Biologically Appropriate Raw Food) est un régime alimentaire pour chiens et chats 
                            qui consiste à leur fournir de la nourriture crue, principalement composée de viandes, d&apos;os, 
                            de légumes et de fruits. L&apos;objectif de ce régime est de revenir à une alimentation plus naturelle 
                            et plus proche de celle qu&apos;ils consomment à l&apos;état sauvage.</p>
                    </div>
                </div>
                <div className='flex gap-10 items-center'>
                    <p className={`text-xl w-[600px] ${montserratFont.className}`}>Le principe du BARF repose sur l&apos;idée que nos animaux domestiques, bien qu&apos;ils aient été domestiqués au fil du temps, 
                        ont toujours des besoins alimentaires proches de ceux de leurs ancêtres carnivores. Ainsi, le BARF cherche à répondre à 
                        ces besoins biologiques en offrant une alimentation plus adaptée à leur nature. </p>
                    <Image
                        src="/chien2.png"
                        alt="Chien mange a une table"
                        width={400}
                        height={500}
                    />
                </div>
                
                <div className='relative h-[1800px] w-[800px]'>
                    <h1 className='text-4xl text-center'>Les ingrédients principaux <br /> du BARF</h1>
                    <div className="absolute top-[150px] left-0 w-[500px] h-[300px]">
                        <Image
                            src="/croquette-barf1.svg"
                            alt="Croquette BARF 1"
                            width={500}
                            height={200}
                            className="relative"
                        />
                        <div className="absolute inset-0 flex flex-col justify-center items-center text-white mx-10">
                            <h1 className="text-3xl">Viandes crues</h1>
                            <p className={`text-xl text-center mt-4 ${montserratFont.className}`}>
                                Poulet, bœuf, agneau, canard, etc. Les viandes doivent être fraîches et de qualité, 
                                de préférence sans conservateurs ni produits chimiques.
                            </p>
                        </div>
                    </div>

                    <Image
                        src="/gamelle.svg"
                        alt="gamelle"
                        width={200}
                        height={200}
                        className="absolute top-[550px] -left-[150px] -rotate-[20deg]"
                    />

                    <div className="absolute top-[500px] right-0 w-[500px] h-[300px]">
                        <Image
                            src="/croquette-barf2.svg"
                            alt="Croquette BARF"
                            width={500}
                            height={200}
                            className="relative"
                        />
                        <div className="absolute inset-0 flex flex-col justify-center items-center text-[#149A77] mx-10">
                            <h1 className="text-3xl">Os charnu</h1>
                            <p className={`text-xl text-center mt-4 ${montserratFont.className}`}>
                            Os avec un peu de viande autour (comme les ailes de poulet ou les côtes de porc), 
                            importants pour la santé dentaire et pour apporter du calcium.
                            </p>
                        </div>
                    </div>

                    <Image
                        src="/carotte.svg"
                        alt="carotte illustration"
                        width={200}
                        height={200}
                        className="absolute top-[900px] -right-[150px] -rotate-[20deg]"
                    />
                    
                    <div className="absolute top-[850px] left-0 w-[500px] h-[300px]">
                        <Image
                            src="/croquette-barf3.svg"
                            alt="Croquette BARF"
                            width={500}
                            height={200}
                            className="relative"
                        />
                        <div className="absolute inset-0 flex flex-col justify-center items-center text-white mx-10">
                            <h1 className="text-3xl">Abats</h1>
                            <p className={`text-xl text-center mt-4 ${montserratFont.className}`}>
                                Foie, rognons, cœur… Les abats sont riches en nutriments essentiels comme les vitamines et minéraux.
                            </p>
                        </div>
                    </div>

                    <Image
                        src="/os.svg"
                        alt="os chien illustration"
                        width={200}
                        height={200}
                        className="absolute top-[1250px] -left-[150px] "
                    />

                    <div className="absolute top-[1200px] right-0 w-[500px] h-[300px]">
                        <Image
                            src="/croquette-barf4.svg"
                            alt="Croquette BARF"
                            width={500}
                            height={200}
                            className="relative"
                        />
                        <div className="absolute inset-0 flex flex-col justify-center items-center text-white mx-10">
                            <h1 className="text-3xl mt-10">Légumes et fruits</h1>
                            <p className={`text-xl text-center mt-4 ${montserratFont.className}`}>
                                En petites quantités, les légumes comme la carotte, la courgette, ou la patate douce, ainsi que les fruits 
                                comme la pomme ou la poire, sont souvent ajoutés pour fournir des fibres et des antioxydants.
                            </p>
                        </div>
                    </div>

                    <div className="absolute top-[1550px] left-0 w-[500px] h-[300px]">
                        <Image
                            src="/croquette-barf5.svg"
                            alt="Croquette BARF"
                            width={500}
                            height={200}
                            className="relative"
                        />
                        <div className="absolute inset-0 flex flex-col justify-center items-center text-[#149A77] mx-10">
                            <h1 className="text-3xl">Suppléments</h1>
                            <p className={`text-xl text-center mt-4 ${montserratFont.className}`}>
                                Parfois, on ajoute des huiles (huile de poisson, huile de coco) ou des compléments 
                                alimentaires (comme les probiotiques ou la levure de bière) pour garantir l&apos;équilibre 
                                nutritionnel.
                            </p>
                        </div>
                    </div>
                </div>

                <div className='relative h-[1500px] w-[800px] mt-24'>
                    <h1 className='text-4xl text-center'>Les avantages du BARF</h1>
                    <div className="absolute top-[150px] left-0 w-[500px] h-[300px]">
                        <Image
                            src="/croquette-barf3.svg"
                            alt="Croquette BARF"
                            width={500}
                            height={200}
                            className="relative"
                        />
                        <div className="absolute inset-0 flex flex-col justify-center items-center text-white mx-10 mt-10">
                            <h1 className="text-3xl">Amélioration de la santé</h1>
                            <p className={`text-xl text-center mt-4 ${montserratFont.className}`}>
                                Une alimentation crue, sans additifs, peut améliorer la santé de la peau, 
                                la brillance du pelage, la digestion et le niveau d&apos;énergie de l&apos;animal.
                            </p>
                        </div>
                    </div>

                    <Image
                        src="/pancement.svg"
                        alt="pancement illustration"
                        width={250}
                        height={250}
                        className="absolute top-[550px] -left-[150px] "
                    />

                    <div className="absolute top-[500px] right-0 w-[500px] h-[300px]">
                        <Image
                            src="/croquette-barf4.svg"
                            alt="Croquette BARF"
                            width={500}
                            height={200}
                            className="relative"
                        />
                        <div className="absolute inset-0 flex flex-col justify-center items-center text-white mx-10 mt-10">
                            <h1 className="text-3xl">Poids optimal</h1>
                            <p className={`text-xl text-center mt-4 ${montserratFont.className}`}>
                                Le BARF permet de mieux contrôler 
                                le poids de l&apos;animal en ajustant les portions et en supprimant les matières grasses et 
                                les sucres ajoutés présents dans les croquettes industrielles.
                            </p>
                        </div>
                    </div>

                    <Image
                        src="/coussinet.svg"
                        alt="coussinet illustration"
                        width={250}
                        height={250}
                        className="absolute top-[900px] -right-[150px] "
                    />
                    
                    <div className="absolute top-[850px] left-0 w-[500px] h-[300px]">
                        <Image
                            src="/croquette-barf5.svg"
                            alt="Croquette BARF"
                            width={500}
                            height={200}
                            className="relative"
                        />
                        <div className="absolute inset-0 flex flex-col justify-center items-center text-[#149A77] mx-10">
                            <h1 className="text-3xl">Hygiène dentaire</h1>
                            <p className={`text-xl text-center mt-4 ${montserratFont.className}`}>
                                Les os charnus aident à maintenir des dents propres et des gencives en bonne santé, 
                                réduisant ainsi les risques de tartre et de problèmes dentaires.
                            </p>
                        </div>
                    </div>

                    <div className="absolute top-[1200px] right-0 w-[600px] h-[300px]">
                        <Image
                            src="/croquette-barf6.svg"
                            alt="Croquette BARF"
                            width={600}
                            height={200}
                            className="relative"
                        />
                        <div className="absolute inset-0 flex flex-col justify-center items-center text-white mx-10 mt-7">
                            <h1 className="text-center text-3xl mt-10">Réduction des allergies et des sensibilités</h1>
                            <p className={`text-xl text-center mt-4 ${montserratFont.className}`}>
                                En éliminant les ingrédients de mauvaise qualité souvent présents dans les aliments industriels 
                                (comme les céréales, les conservateurs, ou les colorants), le BARF peut aider à soulager certains 
                                troubles digestifs ou allergies alimentaires.                            
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default App;
