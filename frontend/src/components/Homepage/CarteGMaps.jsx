import "./CarteGMaps.scss";
import { useContext } from "react";
import LightThemeContext from "@contexts/LightTheme";
import HomeGoogleMaps from "./Maps";

const Maps = () => {
  const { lightTheme } = useContext(LightThemeContext);

  return (
    <div
      className={lightTheme ? "formationContainer light" : "formationContainer"}
    >
      <div className="MapComponent">
        <div className="GMaps">
          <HomeGoogleMaps />
          <div className="Txt">
            <p>
              Need to relax alone or with your friends ? Look at the list of
              bars nearby.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Maps;
