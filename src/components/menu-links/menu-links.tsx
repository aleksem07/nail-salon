import { MENU_LINKS } from '@/common/menu-links';
import Link from 'next/link';

const MenuLinks = ({ display = 'flex' }: { display?: string }) => {
  return (
    <ul className={`${display} gap-6`}>
      {MENU_LINKS.map(({ name, href }, index) => {
        return (
          <li key={`${href} ${index}`}>
            <Link href={href}>{name}</Link>
          </li>
        );
      })}
    </ul>
  );
};

export default MenuLinks;
