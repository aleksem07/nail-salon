import styles from '@/UI/sass/container.module.scss';
import { Contacts } from '@/components/dev-contacts/contacts';

const currentYear = new Date().getFullYear();

const Footer = ({ className }: { className?: string }) => {
  return (
    <footer
      className={`flex min-h-16 items-center justify-center bg-slate-300 ${className || ''}`}
    >
      <Contacts className='p-4 mobile:flex-col' />

      <p className='text-md items-center mobile:hidden '>
        aleksem07 © {currentYear}
      </p>
    </footer>
  );
};

export default Footer;
