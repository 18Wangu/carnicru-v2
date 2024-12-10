import Image from 'next/image';

export function LinkInformations() {
  return (
    <section className="flex flex-col lg:flex-row w-full">
          <article className="flex items-center justify-between flex-1 bg-[#149A77] rounded-3xl mr-4">
            <h1 className="text-[#F8F9E9] ml-7 text-2xl">Qui sommes <br /> nous ?</h1>
            <Image
              src="/croquette.svg"
              alt="Croquette"
              width={75}
              height={75}
              className='mr-7'
            />
          </article>
          <article className="flex justify-between items-center flex-1 bg-[#B0D8C1] rounded-3xl mr-4">
            <h1 className="text-[#004339] ml-7 text-2xl">Infos <br /> Pratiques</h1>
            <Image
              src="/fleche.svg"
              alt="fleche"
              width={75}
              height={75}
              className='mr-7'
            />
          </article>
          <article className="flex justify-between items-center flex-1 bg-[#B9110F] rounded-3xl mr-4">
            <h1 className="text-[#F8F9E9] ml-7 text-2xl">Le BARF <br /> en bref !</h1>
            <Image
              src="/boucle.svg"
              alt="boucle"
              width={75}
              height={75}
              className='mr-7'
            />
          </article>
          <article className="flex justify-between items-center flex-1 bg-[#149A77] rounded-3xl">
            <h1 className="text-[#F8F9E9] ml-7 text-2xl">Jouets <br /> & Goodies</h1>
            <Image
              src="/viande.svg"
              alt="Infos Pratiques"
              width={75}
              height={75}
              className='mr-7'
            />
          </article>
        </section>
    );
}