import Image from 'next/image';

export function PageIndisponible() {
    return (
        <div className='flex flex-col items-center justify-center text-center mt-9'> {/* changer le margin par un calcul de la hauteur de la fenetre moins la navbar */}
            <div>
                <Image 
                    src="/coeur.svg" 
                    alt="image de coeur page indisponible" 
                    width={150} 
                    height={150} 
                />
            </div>
            <h1 className='text-[#004339] text-2xl p-3'>Désolé ! Cette page n’est pas encore disponible...</h1>
                <p className='text-[#149A77] text-xl'>Suivez nous sur les réseaux et abonnez vous à notre newsletter <br /> {/*changer le br pour mettre une largeur max pour que ca soit responsive */}
                    pour être au courant des dernières avancées !</p>
        </div>
    );
}
