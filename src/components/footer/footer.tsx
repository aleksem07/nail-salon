import { Contacts } from '@/components/dev-contacts/contacts';
import styles from './footer.module.scss';

const currentYear = new Date().getFullYear();

const Footer = ({ className }: { className?: string }) => {
  return (
    <footer
      className={`min-h-16 bg-slate-300 ${styles.footer} ${className || ''}`}
    >
      <div
        className={`flex min-h-16 items-center justify-between ${styles.container}`}
      >
        <p className='text-md items-center'>
          created by aleksem07 © {currentYear}
        </p>

        <Contacts className='p-4' />
      </div>
    </footer>
  );
};

export default Footer;
