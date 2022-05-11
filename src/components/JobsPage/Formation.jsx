/* eslint-disable */
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
        <span>Do you want to train for the job ?</span>
      </h1>
      <figure>
        <img src={imageMetier} className="imageBarman" alt="metier barman" />
      </figure>
      <p className="introduction">
        This is an exciting and socially rewarding job. Want to know more ?
      </p>
      <details>
        <summary className="sommaire">{`Click for more information`}</summary>
        <p className="ouTeFormer">
          {`Training centers, either in person or remotely, allow you to train as a bartender. 
          Some centers provide training for a period of 4 months. 
          You will acquire the necessary knowledge to build a future in a profession where you will have fun... 
          You will have a permanent contact with the customer who will enrich you. You will find a training environment that corresponds 
          exactly to today's ultra-modern bars. 
          The teaching methods are based on practice and in total correspondence with the demands of professionals in the hotel and tourism sector. 
          At the end of the course, you will be ready to work as a bartender. 
          This profession offers you the opportunity to travel around the world and improve your English.`}
        </p>
        <h1>
          <span>How do the classes work ?</span>
        </h1>
        <h2>
          <img
            src={iconeShaker}
            alt=""
            weight="24"
            height="24"
            className="icone-shaker"
          />
          A real experience.
        </h2>
        <p>
          {`the practice will be the core of your training. You will be able to
            practice preparing your cocktails behind a bar as if you were as if you were working. 
            This unique experience will forge your knowledge and give you confidence.`}
        </p>
        <h2>
          <img
            src={iconeDiplome}
            alt=""
            weight="24"
            height="24"
            className="icone-diplome"
          />
          A Masterclass
        </h2>
        <p>
          {`This module will allow you to complete your training by deepening your knowledge. 
          What awaits you? Cocktail recipes galore.`}
        </p>
        <h2>
          <img
            src={iconeFlaire}
            alt=""
            weight="24"
            height="24"
            className="icone-flair"
          />
          The Flair
        </h2>
        <p>
          {`For the preparation of an excellent cocktail, flair is not
            essential. However, your customers will be impressed and you may get tipped.
            and you may get your tip. the module will teach you how to create a
            a real show with bottles and bar equipment.
            for more information, I invite you to do a search on
            Tom Dyer, multi-award winning Flair World Champion.`}
        </p>
        <h1>
          <span>Where to get trained ?</span>
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
          <span>Some videos ?</span>
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
