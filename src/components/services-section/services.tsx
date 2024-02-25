import styles from '@/UI/sass/container.module.scss';
import { AppRoutes } from '@/common/routes';
import stylesServices from './services.module.scss';
import Image from 'next/image';

const Services = () => {
  return (
    <>
      <section
        id={`${AppRoutes.SERVICES.slice(1)}`}
        className={`min-h-[100vh] bg-blue-100 ${stylesServices.services || ''}`}
      >
        <div className={` ${styles.container}`}>
          <h2 className={`${stylesServices.title}`}>
            Я сделаю вас очень красивыми
          </h2>
          <div className={`${stylesServices.price}`}>
            <ul className={`${stylesServices.price__list}`}>
              <li className={`${stylesServices.price__item}`}>
                <Image
                  src={'/price-bcg-1.jpg'}
                  alt={''}
                  width={600}
                  height={640}
                  className='h-full w-full'
                ></Image>
              </li>
              <li className={`${stylesServices.price__item}`}></li>
              <li className={`${stylesServices.price__item}`}>
                <Image
                  src={'/price-bcg-2.jpg'}
                  alt={''}
                  width={600}
                  height={640}
                  className='h-full w-full'
                ></Image>
              </li>
              <li className={`${stylesServices.price__item}`}></li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
