import styles from '@/UI/sass/container.module.scss';
import { AppRoutes } from '@/common/routes';
import Image from 'next/image';
import { REVIEWS } from '@/common/reviews';
import stylesReviews from './reviews.module.scss';

const Reviews = () => {
  return (
    <section
      id={`${AppRoutes.REVIEWS.slice(1)}`}
      className={`bg-blue-50 ${''}`}
    >
      <div className={`${styles.container}`}>
        <div className='max-md:px-5 flex flex-col items-center bg-slate-100'>
          <div className='mt-10 text-center text-base font-semibold uppercase leading-6 tracking-widest text-slate-500'>
            Отзывы
          </div>
          <div className='max-md:max-w-full max-md:text-4xl text-center text-5xl font-bold leading-[58.5px] tracking-tight text-neutral-900'>
            Что говорят обо мне...
          </div>
          <div className='mt-10 w-[1200px] max-w-full'>
            <div className='max-md:flex-col max-md:gap-0 max-md: flex flex-wrap justify-center gap-5'>
              {REVIEWS.map(({ id, reviewer, text, photo }) => (
                <div
                  key={id}
                  className='max-md:ml-0 max-md:w-full flex w-6/12 flex-auto flex-col'
                >
                  <div className='max-md:mt-9 max-md:max-w-full flex grow flex-col'>
                    <div className='max-md:px-5 max-md:max-w-full flex-1 justify-center bg-white px-12 pb-14 pt-14 text-xl leading-9 text-neutral-900'>
                      {text}
                    </div>
                    <div className='max-md:px-5 max-md:max-w-full flex flex-col justify-center whitespace-nowrap bg-gray-800 px-12 py-7 text-xl font-bold leading-8 tracking-normal text-white mobile:px-4'>
                      <div className='max-md:flex-wrap max-md:max-w-full flex w-full justify-between gap-5'>
                        <div className='flex justify-between gap-5'>
                          <Image
                            loading='lazy'
                            src={photo}
                            alt='reviewer'
                            width={100}
                            height={100}
                            className='aspect-square w-[74px] object-contain'
                          />
                          <div className='my-auto grow justify-center py-5'>
                            <div
                              className={`flex pb-1 ${stylesReviews.stars}`}
                            ></div>
                            {reviewer}
                          </div>
                        </div>
                        <Image
                          alt=''
                          width={70}
                          height={70}
                          loading='lazy'
                          src='/review/quotes.png'
                          className='my-auto aspect-[1.25] w-[70px] mobile:hidden'
                        />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
