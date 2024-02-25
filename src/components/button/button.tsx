import stylesButton from '@/UI/sass/button.module.scss';

const Button = () => {
  return (
    <button
      className={`col-start-1 col-end-3 row-start-7 self-end text-center text-center mobile:col-end-5 mobile:justify-start ${stylesButton.button}`}
    >
      <span></span>
      Записаться
      <span></span>
    </button>
  );
};

export default Button;
