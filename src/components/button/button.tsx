import stylesButton from '@/UI/sass/button.module.scss';

const Button = ({ className }: { className: string }) => {
  return (
    <button
      className={`self-end text-center mobile:justify-start ${stylesButton.button} ${className || ''}`}
    >
      <span></span>
      Записаться
      <span></span>
    </button>
  );
};

export default Button;
