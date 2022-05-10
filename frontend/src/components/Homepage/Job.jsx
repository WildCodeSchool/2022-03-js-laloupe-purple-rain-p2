import "./Job.scss";
import { Link } from "react-router-dom";
import { useContext } from "react";
import imageBarman from "@assets/images/barman.jpeg";
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
        <span className="spitch">
          Are you interested in becoming a bartender ? You want to know more
          about it ? No problem !
        </span>
      </h1>
      <figure>
        <img src={imageBarman} className="imageBarman" alt="image barman" />
      </figure>
      <Link
        className="lien"
        to="/jobs"
        onClick={() => {
          window.scroll(0, 0);
        }}
      >
        Click here !
      </Link>
    </div>
  );
};

export default Job;
