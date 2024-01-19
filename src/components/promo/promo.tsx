import Address from '@/components/address/address';
import OpeningTimes from '@/components/opening-times/opening-times';
import Image from 'next/image';

const Promo = () => {
  return (
    <section className='grid min-h-[100vh] grid-cols-8 grid-rows-8 items-center justify-center'>
      <Image
        className='col-start-5 col-end-9 row-span-9 h-full max-w-full bg-slate-500 object-cover text-end'
        src={'/promo-background.jpg'}
        alt='promo background'
        width={1200}
        height={800}
      />
      <Address className='col-start-1 col-end-5 row-span-4 text-center' />
      <OpeningTimes className='col-start-1 col-end-3 row-start-6 justify-center pl-4 mobile:col-end-5 mobile:justify-start' />
      <button className='col-start-1 col-end-3 row-start-7 self-end text-center mobile:col-end-5 mobile:justify-start'>
        Записаться
      </button>
    </section>
  );
};

export default Promo;
