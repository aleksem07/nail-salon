import styles from '@/UI/sass/container.module.scss';
import { AppRoutes } from '@/common/routes';
import stylesAbout from './about.module.scss';

const About = () => {
  return (
    <>
      <section
        id={`${AppRoutes.ABOUT.slice(1)}`}
        className={`flex min-h-[100vh] bg-lime-100 p-10 ${stylesAbout.about}`}
      >
        <div className={`${styles.container} w-ful grid grid-cols-2 gap-4`}>
          <div className={`${stylesAbout.aboutText} w-full bg-slate-500`}>
            {' '}
            Далеко-далеко за словесными горами в стране гласных, и согласных
            живут рыбные тексты. Всемогущая однажды коварных заголовок маленький
            своих свою, рыбного рукопись. Строчка страна речью маленький, пор
            знаках курсивных необходимыми свой рот парадигматическая.
            Далеко-далеко за словесными горами в стране гласных и согласных
            живут, рыбные тексты. Рукопись вопрос скатился прямо предупредила
            журчит, приставка рыбными за залетают злых. Возвращайся своих над от
            всех его даль если алфавит текст?{' '}
          </div>
          <div className='flex w-full items-center justify-center bg-teal-300'>
            photo here..
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
