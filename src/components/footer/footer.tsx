import { Contacts } from '@/components/dev-contacts/contacts';
import styles from './footer.module.scss';
import Logo from '@/components/logo/logo';
import Socials from '@/components/social/social';
import MenuLinks from '../menu-links/menu-links';
import Address from '../address/address';
import OpeningTimes from '../opening-times/opening-times';

const currentYear = new Date().getFullYear();

const Footer = ({ className }: { className?: string }) => {
  return (
    <footer
      className={`min-h-16 bg-slate-300 ${styles.footer} ${className || ''}`}
    >
      <section className={``}>
        <div
          className={`${styles.container}`}
        >
          <div className='flex items-end justify-between py-10 border-b mobile:py-4 mobile:gap-4  mobile:grid mobile:justify-center '>
            <Logo />
            <Socials className='mobile:justify-center' />
          </div>
          <div className='flex justify-between py-10 mobile:grid mobile:justify-center '>
            <MenuLinks display='grid mobile:hidden' />
            <Address />
            <OpeningTimes />
          </div>
        </div>
      </section>

      <section className={`bg-slate-800`}>
        <div
          className={`${styles.container}`}
        >
          <div className='flex items-end justify-between'>
            <p className='text-md'>created by aleksem07 © {currentYear}</p>
            <Contacts className='' />
          </div>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
