import { useState, useContext } from "react";
import LightThemeContext from "@contexts/LightTheme";
import "./Form.scss";

const Form = () => {
  const { lightTheme } = useContext(LightThemeContext);
  const [newsChecked, setNewsChecked] = useState(false);

  const handleNewsCheck = () => {
    setNewsChecked(!newsChecked);
  };

  return (
    <form className={lightTheme ? "form light" : "form"}>
      <h3>Contact us!</h3>
      <input type="text" placeholder="Name" />
      <input type="text" placeholder="Email" />
      {/* eslint-disable-next-line */}
      <textarea cols="40" rows="8" placeholder="Your messsage"></textarea>
      <div className="newsCheck">
        <input
          className="checkBox"
          type="checkbox"
          name="Newsletter"
          id="newsCheck"
          onClick={() => handleNewsCheck}
        />
        <p>Subscribe to our newsletter!</p>
      </div>
      <input className="buttonSubmit" type="button" value="SUBMIT" />
    </form>
  );
};

export default Form;
