import Header from "@components/Header/Header";
import Footer from "@components/Footer/Footer";
// import { NeonH, NeonV } from "@components/NeonSeparateur/NeonSeparateur";
import { Cards, CYC } from "@components/Carrousel/Cartes";

const Search = () => {
  return (
    <>
      <section className="topPage">
        <Header />
        <CYC />
        <Cards />
        <Cards />
        <Cards />
        <Cards />
        <Cards />
      </section>
      <section className="midPage" />
      <section className="botPage">
        <Footer />
      </section>
    </>
  );
};

export default Search;
