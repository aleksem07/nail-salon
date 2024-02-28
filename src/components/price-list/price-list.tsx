import styles from './styles.module.scss';

interface PriceListProps {
  id: number;
  title: string;
  price: number;
  desc: string;
}

const PriceList = ({ priceList }: { priceList: PriceListProps[] }) => {
  return (
    <>
      <ul className={`${styles.list}`}>
        {priceList.map(({ id, title, price, desc }) => {
          return (
            <li className='grid' key={id}>
              <div className={`${styles.item}`}>
                <h3>{title}</h3>
                <p></p>
                <h3>₽{price}*</h3>
              </div>
              <p className={`${styles.desc}`}>{desc}</p>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default PriceList;
