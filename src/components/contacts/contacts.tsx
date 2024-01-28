import styles from '@/UI/sass/container.module.scss';
import { AppRoutes } from '@/common/routes';

const Contacts = () => {
  return (
    <>
      <section
        id={`${AppRoutes.CONTACTS.slice(1)}`}
        className='min-h-[100vh] bg-red-100'
      >
        <div className={`${styles.container}`}>Contacts</div>
      </section>
    </>
  );
};

export default Contacts;
