import Promo from '@/components/promo/promo';
import Services from '@/components/services/services';
import About from '@/components/about/about';
import Contacts from '@/components/contacts/contacts';

const Home = () => {
  return (
    <main>
      <Promo />
      <Services />
      <About />
      <Contacts />
    </main>
  );
};

export default Home;
