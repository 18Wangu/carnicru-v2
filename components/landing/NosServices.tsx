import Image from 'next/image';
import Link from 'next/link';

export function NosServices() {
    return (
        <div className='flex flex-col md:flex-row md:h-[calc(100vh-22.5rem)]'>
            {/* Rendre la partie simuler mon compagnon responsive */}
            <Link href="/pages/SimulationPortion">
                <div className="md:w-[calc(100vw-35rem)] xl:w-[calc(100vw-53rem)] bg-[#E30613] rounded-3xl h-96 md:h-[calc(100vh-23.5rem)] mr-0 md:mr-3 relative flex flex-col justify-center items-center overflow-hidden">
                    <Image
                        src="/ying-rouge.svg"
                        alt='croquette'
                        width={400}
                        height={400}
                        className='absolute -top-36 -left-36 z-0'
                    />
                    <h1 className='text-white text-center text-3xl mb-8 z-10'>Simuler mon compagnon !</h1>
                    <p className='text-white text-center w-72 lg:w-96 z-10'>simulez les besoins de votre animal pour découvrir nos formules adaptées !</p>
                    <Image
                        src="/ying-rouge.svg"
                        alt='croquette'
                        width={400}
                        height={400}
                        className='absolute -bottom-36 -right-64 z-0'
                    />
                </div>
            </Link>
            <div>
                <Image
                src="/chien-accueil.jpeg"
                alt="Chien qui mange de la viande"
                width={850}
                height={400}
                className="rounded-3xl mb-3 md:h-[calc(100vh-23.5rem)] object-cover mt-3 md:mt-0"
                />
            </div>
        </div>
    );
}