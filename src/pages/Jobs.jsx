/* eslint-disable */
import Header from "@components/Header/Header";
import Footer from "@components/Footer/Footer";
import Formation from "@components/JobsPage/Formation";
// import imageMetier from "@assets/images/barman-cocktail.jpg";

const Jobs = () => {
  return (
    <>
      <section className="topPage column">
        <Header />
        <Formation />
      </section>
      {/* <section className="midPage"></section> */}
      <section className="botPage">
        <Footer />
      </section>
    </>
  );
};

export default Jobs;
