import Header from "@components/Header/Header";
import Footer from "@components/Footer/Footer";
import SearchWindow from "@components/SearchPage/SearchWindow";

const Search = () => {
  return (
    <>
      <section className="topPage column">
        <Header />
        <SearchWindow />
      </section>
      <section className="midPage">
        <p>search</p>
      </section>
      <section className="botPage">
        <Footer />
      </section>
    </>
  );
};

export default Search;
