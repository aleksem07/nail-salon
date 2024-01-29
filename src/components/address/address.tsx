import { EB_Garamond } from 'next/font/google';
import { ADDRESS } from '@/common/address';
import Link from 'next/link';

const addFont = EB_Garamond({subsets: ['latin']});

const Address = ({ className }: { className?: string }) => {
  return (
    <div className={`${className || ''}`}>
      <ul className='flex flex-col gap-2'>
        {ADDRESS.map(({ title, data, href }, index) => {
          return (
            <li key={`${title} ${index}`}>
              <p className='text-sm uppercase'>{title}</p>
              {title === 'адрес' && (
                <p className={`${addFont.className} text-xl`}>г.Белгород</p>
              )}
              <Link className={`${addFont.className} text-xl`} href={href}>
                {data}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Address;
