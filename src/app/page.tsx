import Promo from '@/components/promo/promo';
import Services from '@/components/services-section/services';
import About from '@/components/about/about';
import Contacts from '@/components/contacts/contacts';
import Footer from '@/components/footer/footer';
import Banner from '@/components/banner/banner';
import GetAction from '@/components/getAction/get-action';
import Gallery from '@/components/gallery-section/gallery';

const Home = () => {
  return (
    <main>
      <GetAction />

      <Promo />
      <Services />
      <Gallery />
      <Banner img={'/promo-4.jpg'} size='aspect-[6/1]' speed={-30} />
      <About />
      <Banner img={'/banner/promo-1.jpg'} />
      <Contacts />
      <Footer />
    </main>
  );
};

export default Home;
