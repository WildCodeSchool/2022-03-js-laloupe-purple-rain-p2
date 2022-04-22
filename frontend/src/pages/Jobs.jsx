import Header from "@components/Header/Header";
import Footer from "@components/Footer/Footer";
import Formation from "@components/Formation";
import imageMetier from "@assets/images/barman-cocktail.jpg";

const Jobs = () => {
  return (
    <>
      <section className="topPage">
        <Header />
        <div className="formation">
          <h1>
            <span>T</span>u veux te former au métier?
          </h1>
          <figure>
            <img
              src={imageMetier}
              className="imageBarman"
              alt="metier barman"
            />
          </figure>
          <p className="introduction">
            Voilà un métier passionnant et enrichissant socialement. Tu veux en
            savoir davantage?
          </p>
        </div>
      </section>
      <section className="midPage">
        <Formation />
      </section>
      <section className="botPage">
        <Footer />
      </section>
    </>
  );
};

export default Jobs;
