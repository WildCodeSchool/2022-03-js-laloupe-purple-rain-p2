import {useState} from "react";
import Popup from "@components/SearchPage/Popup";
import Header from "@components/Header/Header";
import Footer from "@components/Footer/Footer";
// import { NeonH, NeonV } from "@components/NeonSeparateur/NeonSeparateur";
import SearchWindow from "@components/SearchPage/SearchWindow";

const Search = () => {
  const [infoPopup, setInfoPopup] = useState();
  return (
    <>
    {infoPopup && <Popup infoPopup={infoPopup} setInfoPopup={setInfoPopup}/>}
      <section className="topPage column">
        <Header />
        <SearchWindow setInfoPopup={setInfoPopup} />
      </section>
      <section className="midPage" />
      <section className="botPage">
        <Footer />
      </section>
    </>
  );
};

export default Search;
