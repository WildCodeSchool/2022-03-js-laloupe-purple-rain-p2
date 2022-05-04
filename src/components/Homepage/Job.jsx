import "./Job.scss";
import { Link } from "react-router-dom";
import { useContext } from "react";
import imageMetier from "@assets/images/barman-cocktail.jpg";
import LightThemeContext from "@contexts/LightTheme";

const Job = () => {
  const { lightTheme } = useContext(LightThemeContext);

  return (
    <div
      className={
        lightTheme ? "formationContainers light" : "formationContainers"
      }
    >
      <h1>
        <span>You want to train for the job</span>
      </h1>
      <figure>
        <img src={imageMetier} className="imageBarman" alt="metier barman" />
      </figure>
      <Link className="lien" to="/jobs">
        Click here !
      </Link>
    </div>
  );
};

export default Job;
