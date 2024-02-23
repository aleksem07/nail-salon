import Address from '@/components/address/address';
import OpeningTimes from '@/components/opening-times/opening-times';
import stylesContainer from '@/UI/sass/container.module.scss';
import SimpleSlider from '@/components/slider/slider';

const Promo = () => {
  return (
    <section
      className={`grid grid-cols-8 grid-rows-8 items-center justify-center tablet:h-[100vmin] mobile:h-[100vmax] ${stylesContainer.container}`}
    >
      <SimpleSlider className='col-start-5 col-end-9 row-span-9 max-w-full justify-center bg-black text-end tablet:h-[100vmin] mobile:h-[100vmax]' />
      <Address className='col-start-1 col-end-5 row-span-4 text-center' />
      <OpeningTimes className='col-start-1 col-end-3 row-start-6 justify-center pl-4 mobile:col-end-5 mobile:justify-start' />
    </section>
  );
};

export default Promo;
