import Image from 'next/image';

export function NosServices() {
    return (
        <div className='flex h-[calc(100vh-28.5rem)]'>
            <div className="bg-red-950 rounded-3xl h-[calc(100vh-29.5rem)]">
                test
            </div>
            <div>
                <Image
                src="/chien-accueil.jpeg"
                alt="Chien qui mange de la viande"
                width={850}
                height={400}
                className="rounded-3xl mb-3 h-[calc(100vh-29.5rem)] object-cover"
                />
            </div>
        </div>
    );
}