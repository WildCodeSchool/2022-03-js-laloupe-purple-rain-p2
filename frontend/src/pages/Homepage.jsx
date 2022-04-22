import Header from "@components/Header/Header";
import Footer from "@components/Footer/Footer";
import Carrousel from "@components/Carrousel/Carrousel";
// import { NeonH, NeonV } from "@components/NeonSeparateur/NeonSeparateur";
// import { Cards, CardsOff } from "@components/Carrousel/Cartes";

const Homepage = () => {
  return (
    <>
      <section className="topPage">
        <Header />
        <div className="carrous">
          <Carrousel />
        </div>
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
