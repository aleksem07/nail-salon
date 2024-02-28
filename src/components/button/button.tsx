import stylesButton from '@/UI/sass/button.module.scss';
import Link from 'next/link';

const Button = ({ className }: { className: string }) => {
  return (
    <Link
      href={'tel:+79000000000'}
      className={`self-end text-center mobile:justify-start ${className || ''}`}
    >
      <button className={`${stylesButton.button}`}>
        <span></span>
        Записаться
        <span></span>
      </button>
    </Link>
  );
};

export default Button;
