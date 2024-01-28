import Promo from '@/components/promo/promo';
import Services from '@/components/services-section/services';
import About from '@/components/about/about';
import Contacts from '@/components/contacts/contacts';
import Footer from '@/components/footer/footer';

const Home = () => {
  return (
    <main>
      <Promo />
      <Services />
      <About />
      <Contacts />
      <Footer />
    </main>
  );
};

export default Home;
