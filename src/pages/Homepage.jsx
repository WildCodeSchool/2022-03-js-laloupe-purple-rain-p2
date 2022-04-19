import Header from "@components/Header/Header";
import Footer from "@components/Footer/Footer";

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
