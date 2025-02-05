import Image from 'next/image';
import Link from 'next/link';

export function LinkInformations() {
  return (
    <section className="flex flex-col lg:flex-row w-full gap-3 lg:gap-0">
        <article className="flex items-center flex-1 bg-[#149A77] rounded-3xl mr-4 w-full">
        <Link href="/pages/QuiSommesNous" className='flex justify-between items-center w-full'>
            <h1 className="text-[#F8F9E9] ml-7 text-2xl">Qui sommes <br /> nous ?</h1>
            <Image
              src="/croquette.svg"
              alt="Croquette"
              width={75}
              height={75}
              className='mr-7 my-8 lg:my-0'
            />
          </Link>
        </article>
        <article className="flex-1 bg-[#B0D8C1] rounded-3xl mr-4 w-full">
          <Link href="/pages/PageIndisponible" className='flex justify-between items-center'>
            <h1 className="text-[#004339] ml-7 text-2xl">Infos <br /> Pratiques</h1>
            <Image
              src="/fleche.svg"
              alt="fleche"
              width={75}
              height={75}
              className='mr-7'
            />
          </Link>
        </article>
        <article className="flex justify-between items-center flex-1 bg-[#B9110F] rounded-3xl mr-4 w-full">
          <Link href="/pages/Barf" className='flex justify-between items-center w-full'>
            <h1 className="text-[#F8F9E9] ml-7 text-2xl">Le BARF <br /> en bref !</h1>
            <Image
              src="/boucle.svg"
              alt="boucle"
              width={75}
              height={75}
              className='mr-7 my-10 lg:my-0'
            />
          </Link>
        </article>
        <article className="flex justify-between items-center flex-1 bg-[#149A77] rounded-3xl w-full">
          <Link href="/pages/PageIndisponible" className='flex justify-between items-center w-full'>
            <h1 className="text-[#F8F9E9] ml-7 text-2xl">Jouets <br /> & Goodies</h1>
            <Image
              src="/viande.svg"
              alt="Infos Pratiques"
              width={75}
              height={75}
              className='mr-7 my-8 lg:my-0'
            />
          </Link>
        </article>
      </section>
    );
}