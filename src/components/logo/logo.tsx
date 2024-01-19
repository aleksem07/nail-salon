import { addFont } from '@/app/layout';
import Link from 'next/link';

const Logo = () => {
  return (
    <div className={`uppercase ${addFont.className}`}>
      <Link href={'/'} className='text-2xl hover:text-black'>
        Beauty <span className='text-white'>salon</span>
      </Link>
    </div>
  );
};

export default Logo;
