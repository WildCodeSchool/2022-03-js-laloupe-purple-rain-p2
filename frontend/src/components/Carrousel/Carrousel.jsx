/* eslint-disable */

import React from "react";
import { useState, useEffect } from "react";
import "./Carrousel.scss";
import "./Cartes.scss";

const tableOfIndex = [0, 1, 2, 3];

function scaleWidth(width) {
  if (width < 600) {
    let ratio = 1 - (0.8 * (600 - width)) / 600;
    //console.log(width);
    //console.log(ratio);
    return ratio;
  }
  return 1;
}

function translateZAxis(index) {
  const middle = 2;
  const Axe1 = index / middle;
  const Axe2 = index % middle;

  if (Axe1 !== 0 && Axe2 !== 0) {
    return (middle - Axe2) * -300;
  } else if (Axe1 !== 1 && Axe2 !== 0) {
    return Axe2 * -300;
  } else if (Axe1 !== 0 && Axe2 !== 1) {
    return middle * -300;
  }
  return 0;
}

function translateYAxis(index) {
  const middle = 2;
  const Axe1 = index / middle;
  const Axe2 = index % middle;

  if (Axe1 !== 0 && Axe2 != 0) {
    return (middle - Axe2) * 37.5;
  } else if (Axe1 !== 1 && Axe2 !== 0) {
    return Axe2 * 37.5;
  } else if (Axe1 !== 0 && Axe2 !== 1) {
    return middle * 37.5;
  }
  return 0;
}

function Carrousel() {
  const [touchPosition, setTouchPosition] = React.useState(null);
  const [currentWindowWidth, setCurrentWindowWidth] = useState(
    window.innerWidth
  );

  function updateWindowSize() {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
      const handleWindowWidth = () => {
        setWindowWidth(window.innerWidth);
        setCurrentWindowWidth(windowWidth);
      };

      window.addEventListener("resize", handleWindowWidth);

      return () => {
        window.removeEventListener("resize", handleWindowWidth);
      };
    }, []);
    //Can also handle height if needed.
    return windowWidth;
  }

  const handleTouchStart = (e) => {
    const touchDown = e.touches[0].clientX;
    setTouchPosition(touchDown);
  };

  const handleTouchMove = (e) => {
    const touchHold = touchPosition;

    if (touchHold === null) {
      return;
    }
    const currentTouch = e.touches[0].clientX;
    const diff = touchHold - currentTouch;
    if (diff > 5) {
      console.log("Touch move to right deepshit !");
      const first = tableOfIndex.pop();
      tableOfIndex.unshift(first);
    }
    if (diff < -5) {
      console.log("Touch move to left deepshit !");
      const last = tableOfIndex.shift();
      tableOfIndex.push(last);
    }
    setTouchPosition(null);
  };

  const width = updateWindowSize();

  return (
    <>
      <section
        className="carrousel"
        style={{ transform: `scale(${scaleWidth(width)})` }}
      >
        <section
          className="carrousel-container"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
        >
          <figure
            className="Carte Bleue Carrousel"
            id="0"
            style={
              currentWindowWidth <= 1024
                ? {
                    transform: `translateX(${
                      Math.sin((tableOfIndex[0] * Math.PI) / 2) * 150
                    }px) translateY(${translateYAxis(
                      tableOfIndex[0]
                    )}px) translateZ(${translateZAxis(tableOfIndex[0])}px`,
                    TransitionEvent: `all 1s`,
                  }
                : { transform: `none` }
            }
          ></figure>
          <figure
            className="Carte Verte Carrousel"
            id="cartomancie"
            style={{
              transform: `translateX(${
                Math.sin((tableOfIndex[1] * Math.PI) / 2) * 150
              }px) translateY(${translateYAxis(
                tableOfIndex[1]
              )}px) translateZ(${translateZAxis(tableOfIndex[1])}px)`,
              TransitionEvent: `all 1s`,
            }}
          ></figure>
          <figure
            className="Carte Rose Carrousel"
            id="2"
            style={{
              transform: `translateX(${
                Math.sin((tableOfIndex[2] * Math.PI) / 2) * 150
              }px) translateY(${translateYAxis(
                tableOfIndex[2]
              )}px) translateZ(${translateZAxis(tableOfIndex[2])}px)`,
              TransitionEvent: `all 1s`,
            }}
          ></figure>
          <figure
            className="Carte Orange Carrousel"
            id="3"
            style={{
              transform: `translateX(${
                Math.sin((tableOfIndex[3] * Math.PI) / 2) * 150
              }px) translateY(${translateYAxis(
                tableOfIndex[3]
              )}px) translateZ(${translateZAxis(tableOfIndex[3])}px)`,
              TransitionEvent: `all 1s`,
            }}
          ></figure>
        </section>
      </section>
      <button className="random-button">Random Cocktail</button>
    </>
  );
}

export default Carrousel;
