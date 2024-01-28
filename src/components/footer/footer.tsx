import styles from '@/UI/sass/container.module.scss';
import { Contacts } from '@/components/dev-contacts/contacts';

const currentYear = new Date().getFullYear();

const Footer = ({ className }: { className?: string }) => {
  return (
    <footer className={`min-h-16 bg-slate-300 ${className || ''}`}>
      <div
        className={`flex min-h-16 items-center justify-between ${styles.container}`}
      >
        <Contacts className='p-4 mobile:flex-col' />

        <p className='text-md items-center mobile:hidden '>
          aleksem07 © {currentYear}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
