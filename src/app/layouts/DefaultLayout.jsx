import Header from '../components/header';
import '../../../style/globals.css';
import Footer from '../components/Footer';

export const DefaultLayout = ({ child }) => {
  return (
    <>
      <Header />
      <div>{child}</div>;
      <Footer />
    </>
  );
};
