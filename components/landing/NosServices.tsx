import Image from 'next/image';
import Link from 'next/link';

export function NosServices() {
    return (
        <div className='flex h-[calc(100vh-26.5rem)]'>
            {/* Rendre la partie simuler mon compagnon responsive */}
            <Link href="/pages/SimulationPortion">
                <div className="w-[calc(100vw-35rem)] xl:w-[calc(100vw-53rem)] bg-[#E30613] rounded-3xl h-[calc(100vh-27.5rem)] mr-3 relative flex flex-col justify-center items-center overflow-hidden">
                    <Image
                        src="/ying-rouge.svg"
                        alt='croquette'
                        width={400}
                        height={400}
                        className='absolute -top-36 -left-36 z-0'
                    />
                    <h1 className='text-white text-center text-3xl mb-8 z-10'>Simuler mon compagnon !</h1>
                    <p className='text-white text-center w-96 z-10'>simulez les besoins de votre animal pour découvrir nos formules adaptées !</p>
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
                className="rounded-3xl mb-3 h-[calc(100vh-27.5rem)] object-cover"
                />
            </div>
        </div>
    );
}