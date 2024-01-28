import Address from '@/components/address/address';
import OpeningTimes from '@/components/opening-times/opening-times';
import Image from 'next/image';
import stylesContainer from '@/UI/sass/container.module.scss';
import stylesButton from '@/UI/sass/button.module.scss';
import SimpleSlider from '@/components/slider/slider';

const Promo = () => {
  return (
    <section
      className={`grid min-h-[100vh] grid-cols-8 grid-rows-8 items-center justify-center ${stylesContainer.container}`}
    >
      <SimpleSlider className='col-start-5 col-end-9 row-span-9 max-w-full justify-center bg-gray-200 text-end' />
      <Address className='col-start-1 col-end-5 row-span-4 text-center' />
      <OpeningTimes className='col-start-1 col-end-3 row-start-6 justify-center pl-4 mobile:col-end-5 mobile:justify-start' />

      <button
        className={`col-start-1 col-end-3 row-start-7 self-end text-center text-center mobile:col-end-5 mobile:justify-start ${stylesButton.button}`}
      >
        <span></span>
        Записаться
        <span></span>
      </button>
    </section>
  );
};

export default Promo;
