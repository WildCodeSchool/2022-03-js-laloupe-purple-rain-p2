import Header from "@components/Header/Header";
import Footer from "@components/Footer/Footer";
// import { NeonH, NeonV } from "@components/NeonSeparateur/NeonSeparateur";
// import { Cards, CardsOff } from "@components/Carrousel/Cartes";

const Homepage = () => {
  return (
    <>
      <section className="topPage">
        <Header />
      </section>
      <section className="midPage">
        <p>homepage</p>
      </section>
      <section className="botPage">
        <Footer />
      </section>
    </>
  );
};

export default Homepage;
