import { Contacts } from '@/components/dev-contacts/contacts';
import styles from './footer.module.scss';
import Logo from '@/components/logo/logo';
import Socials from '@/components/social/social';
import MenuLinks from '../menu-links/menu-links';
import Address from '../address/address';
import OpeningTimes from '../opening-times/opening-times';
import Link from 'next/link';

const currentYear = new Date().getFullYear();

const Footer = ({ className }: { className?: string }) => {
  return (
    <footer
      className={`min-h-16 bg-slate-300 ${styles.footer} ${className || ''}`}
    >
      <section className={``}>
        <div className={`${styles.container}`}>
          <div className='flex items-end justify-between border-b py-10 mobile:grid mobile:justify-center  mobile:gap-4 mobile:py-4 '>
            <Logo />
            <Socials className='mobile:justify-center' />
          </div>
          <div className='flex justify-between gap-10 py-10 mobile:grid mobile:justify-center '>
            <MenuLinks display='grid mobile:hidden' />
            <Address />
            <OpeningTimes />
          </div>
          <p> *Все цены не являются офертой</p>
          <Link href='https://yandex.ru/legal/maps_termsofuse/'>
            **Условия использования Яндекс.Карт
          </Link>
        </div>
      </section>

      <section className={`bg-slate-800`}>
        <div className={`${styles.container}`}>
          <div className='flex items-end justify-between mobile:grid mobile:gap-2'>
            <p className='text-md'>created by aleksem07 © {currentYear}</p>
            <Contacts className='' />
          </div>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
