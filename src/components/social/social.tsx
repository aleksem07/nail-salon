import { SOCIALS } from '@/common/socials';
import Link from 'next/link';

const Socials = ({className} : {className?: string}) => {
  return (
    <ul className={`z-10 flex justify-end gap-3 ${className || ''}`}>
      {SOCIALS.map(({ Name, href }, index) => {
        return (
          <li key={`${href} ${index}`}>
            <Link target='_blank' rel='stylesheet' href={href}>
              <Name sx={{ color: '#fff' }} />
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default Socials;
