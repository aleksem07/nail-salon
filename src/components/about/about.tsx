import styles from '@/UI/sass/container.module.scss';
import { AppRoutes } from '@/common/routes';
import stylesAbout from './about.module.scss';

const About = () => {
  return (
    <>
      <section
        id={`${AppRoutes.ABOUT.slice(1)}`}
        className={`min-h-[100vh] bg-lime-100 ${stylesAbout.about}`}
      >
        <div className={`${styles.container}`}>About</div>
      </section>
    </>
  );
};

export default About;
