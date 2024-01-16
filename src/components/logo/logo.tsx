import { addFont } from '@/app/layout';

const Logo = () => {
  return (
    <div className={`uppercase ${addFont.className}`}>
      <p className='text-2xl '>Beauty salon</p>
    </div>
  );
};

export default Logo;
