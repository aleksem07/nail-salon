import styles from '@/UI/sass/container.module.scss';
import { AppRoutes } from '@/common/routes';
import stylesServices from './services.module.scss';
import Image from 'next/image';
import PriceList from '../price-list/price-list';
import { PRICE_LIST_PART1, PRICE_LIST_PART2 } from '@/common/price-list';

const Services = () => {
  return (
    <>
      <section
        id={`${AppRoutes.SERVICES.slice(1)}`}
        className={`min-h-[100vh] bg-blue-50 ${stylesServices.services || ''}`}
      >
        <div className={` ${styles.container}`}>
          <h2 className={`${stylesServices.title}`}>
            Красота человека заключается в богатстве его различий
          </h2>
          <div className={`${stylesServices.price}`}>
            <ul className={`${stylesServices.price__list}`}>
              <li className={`${stylesServices.price__item || ''}`}>
                <Image
                  src={'/price-bcg-1.jpg'}
                  alt={''}
                  width={600}
                  height={640}
                  className='h-full w-full object-cover shadow-2xl'
                ></Image>
              </li>
              <li className={`${stylesServices.price__item || ''}`}>
                <PriceList priceList={PRICE_LIST_PART1} />
              </li>
              <li className={`${stylesServices.price__item || ''}`}>
                <Image
                  src={'/price-bcg-2.jpg'}
                  alt={''}
                  width={600}
                  height={640}
                  className='h-full w-full object-cover shadow-2xl'
                ></Image>
              </li>
              <li className={`${stylesServices.price__item || ''}`}>
                <PriceList priceList={PRICE_LIST_PART2} />
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
