import MenuLinks from '@/components/menu-links/menu-links';
import styles from './styles.module.scss';

const BurgerMenu = ({ isOpen = false }: { isOpen: boolean }) => {
  return isOpen ? (
    <div className={styles.burger}>
      <MenuLinks display='grid' />
    </div>
  ) : (
    <></>
  );
};

export default BurgerMenu;
