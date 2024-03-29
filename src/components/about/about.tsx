import styles from '@/UI/sass/container.module.scss';
import { AppRoutes } from '@/common/routes';
import stylesAbout from './about.module.scss';
import Image from 'next/image';
import { ADVANTAGES } from '@/common/about';

const About = () => {
  return (
    <>
      <section
        id={`${AppRoutes.ABOUT.slice(1)}`}
        className={`  bg-blue-50 pb-4 pt-4 ${stylesAbout.about}`}
      >
        <div className='max-md:mt-10 mt-24 text-center text-base font-semibold uppercase leading-6 tracking-widest text-slate-500'>
          Обо мне
        </div>
        <div
          className={`${styles.container} grid w-full grid-cols-2 gap-4 laptop:flex laptop:flex-col-reverse laptop:gap-8`}
        >
          <div className={`${stylesAbout.about_block__text} w-full`}>
            <h2 className={`${stylesAbout.title}`}>
              Красота — это когда ты остаешься самим собой
            </h2>
            <p className={`${stylesAbout.desc}`}>
              Далеко-далеко за, словесными горами в стране гласных и согласных
              живут рыбные тексты. Своего, пунктуация? Наш повстречался своего
              вопроса безопасную, лучше назад приставка букв дал родного дорогу
              все ему. Инициал даль заголовок образ.
            </p>
            <div className={`${stylesAbout.advantages}`}>
              {ADVANTAGES.map((item) => (
                <div key={item.id} className={`${stylesAbout.advantage}`}>
                  <>
                    <Image
                      src={item.image}
                      alt={item.title}
                      width={75}
                      height={75}
                    ></Image>
                    <h3>{item.title}</h3>
                  </>
                </div>
              ))}
            </div>
          </div>
          <div
            className={`w-full max-w-[500px] laptop:max-w-[350px] mobile:max-w-[250px]  ${stylesAbout.about_block__image}`}
          >
            <Image
              src={'/promo-5.jpg'}
              alt='Привет! Это я!'
              width={500}
              height={576}
              className='h-[100%] object-cover'
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
