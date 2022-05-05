import "./Formation.scss";
import { useContext } from "react";
import imageMetier from "@assets/images/barman-cocktail.jpg";
import iconeShaker from "@assets/images/shaker2.png";
import iconeDiplome from "@assets/images/diplome2.png";
import iconeFlaire from "@assets/images/cocktail3.png";
import ReactPlayer from "react-player";
import LightThemeContext from "@contexts/LightTheme";

const Formation = () => {
  const { lightTheme } = useContext(LightThemeContext);

  const externalSource = "http://youtu.be/36Nn59i2J3Q";
  const externalSource2 = "http://youtu.be/jXGik68NQ9Y";

  return (
    <div
      className={lightTheme ? "formationContainer light" : "formationContainer"}
    >
      <h1>
        <span>Tu veux te former au métier?</span>
      </h1>
      <figure>
        <img src={imageMetier} className="imageBarman" alt="metier barman" />
      </figure>
      <p className="introduction">
        Voilà un métier passionnant et enrichissant socialement. Tu veux en
        savoir davantage ?
      </p>
      <details>
        <summary className="sommaire">
          {`Cliquez pour plus d'information`}
        </summary>
        <p className="ouTeFormer">
          {`Des centres de formation en présentiel ou en remote te permettent de
            te former au métier de barman. Certains centres dispensent la
            formation durant une période de 4 mois. Tu vas ainsi acquérir les
            connaissances nécessaires pour te bâtir un avenir dans un métier où
            tu vas t'éclater, t'amuser... Tu auras un contact permanent avec la
            clientel qui saura t'enrichir. Tu trouveras un environnement de
            formation qui correspond exactement aux bars ultra-modernes
            d'aujourd'hui. Les méthodes d'enseignement sont basées sur la
            pratique et en total correspondance avec les demandes des
            professionnels du secteur de l'hôtelerie et du tourisme. A l'issue
            de la formation, tu seras prêt à exercer le métier de barman. Ce
            métier t'offre la possibilité de voyager de part de monde et de
            parfaire ainsi ton anglais.`}
        </p>
        <h1>
          <span>C</span>omment se déroulent les cours?
        </h1>
        <h2>
          <img
            src={iconeShaker}
            alt=""
            weight="24"
            height="24"
            className="icone-shaker"
          />
          Une vraie expérience
        </h2>
        <p>
          {`la pratique sera le coeur de cible de ta formation. Tu pourras
            t'exercer à préparer tes cocktails derrière un bar comme si tu
            travaillais. Cette expérience unique forgera tes connaissances et te
            donneras confiance.`}
        </p>
        <h2>
          <img
            src={iconeDiplome}
            alt=""
            weight="24"
            height="24"
            className="icone-diplome"
          />
          Une Masterclass
        </h2>
        <p>
          {`Ce module te permettra de compléter ta formation en appronfondissant
            tes connaissances. Ce qui t'attend? des recettes de cocktail à gogo.`}
        </p>
        <h2>
          <img
            src={iconeFlaire}
            alt=""
            weight="24"
            height="24"
            className="icone-flair"
          />
          Le Flair
        </h2>
        <p>
          {`Pour la préparation d'un cocktail d'excellence, le flair n’est pas
            indispensable. Cependant, tes clients seront impressionnés et tu
            recevras peut-être ton pourboire. module t’apprendra à créer un
            véritable spectacle avec des bouteilles et du matériel de bar. pour
            de plus amples informations, je te convies à faire une recherche sur
            Tom Dyer, Champion du monde de Flair plusieurs fois primé.`}
        </p>
        <h1>
          <span>O</span>ù se former?
        </h1>
        <ul>
          <li>
            <a
              className="linkSite"
              href="https://www.barschool.net/"
              target="_blank"
              rel="noreferrer"
            >
              lps.barschool
            </a>
          </li>
          <li>
            <a
              className="linkSite"
              href="https://www.youschool.fr/"
              target="_blank"
              rel="noreferrer"
            >
              youschool
            </a>
          </li>
          <li>
            <a
              className="linkSite"
              href="https://formationbarman.fr"
              target="_blank"
              rel="noreferrer"
            >
              Formation Barman
            </a>
          </li>
        </ul>
        <h1>
          <span>Q</span>uelques vidéos?
        </h1>
        <div className="player-wrapper">
          <ReactPlayer
            className="react-player"
            url={externalSource}
            width="100%"
            height="100%"
            controls
          />
        </div>
        <div className="player-wrapper">
          <ReactPlayer
            className="react-player"
            url={externalSource2}
            width="100%"
            height="100%"
            controls
          />
        </div>
      </details>
    </div>
    // </div>
  );
};

export default Formation;
