import styles from '@/UI/sass/container.module.scss';
import { AppRoutes } from '@/common/routes';
import stylesAbout from './about.module.scss';
import Image from 'next/image';

const About = () => {
  return (
    <>
      <section
        id={`${AppRoutes.ABOUT.slice(1)}`}
        className={`flex  min-h-[100vh] bg-lime-100 pt-4 pb-4 ${stylesAbout.about}`}
      >
        <div className={`${styles.container} w-ful grid tablet:grid-cols-2 gap-4`}>
          <div className='flex w-full items-center justify-center'>
            <Image src={'/promo-5.jpg'} alt='Привет! Это я!' width={300} height={300} className='h-full object-cover border-t-4 border-l-4' />
          </div>
          <div className={`${stylesAbout.aboutText} w-full bg-yellow-200 border-r-8 border-b-8`}>

            Привет!<br />
            Тут немного информации обо мне.<br />
            Далеко-далеко за словесными горами в стране гласных, и согласных
            живут рыбные тексты. Всемогущая однажды коварных заголовок маленький
            своих свою, рыбного рукопись. Строчка страна речью маленький, пор
            знаках курсивных необходимыми свой рот парадигматическая.
            Далеко-далеко за словесными горами в стране гласных и согласных
            живут, рыбные тексты. Рукопись вопрос скатился прямо предупредила
            журчит, приставка рыбными за залетают злых. Возвращайся своих над от
            всех его даль если алфавит текст?
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
