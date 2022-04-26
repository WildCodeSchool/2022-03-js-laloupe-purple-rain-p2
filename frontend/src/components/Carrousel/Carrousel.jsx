/* eslint-disable */

import React from "react";
import { useState, useEffect } from "react";
import "./Carrousel.scss";
import "./Carrousel_cartes.scss";

const tableOfIndex = [0, 1, 2, 3];

function scaleWidth(width) {
  if (width < 600) {
    let ratio = 1 - (0.8 * (600 - width)) / 600;
    return ratio;
  }
  return 1;
}

function translateZAxis(index) {
  const middle = 2;
  const zOffset = -300;
  const Axe1 = index / middle;
  const Axe2 = index % middle;

  if (Axe1 !== 0 && Axe2 !== 0) {
    return (middle - Axe2) * zOffset;
  } else if (Axe1 !== 1 && Axe2 !== 0) {
    return Axe2 * zOffset;
  } else if (Axe1 !== 0 && Axe2 !== 1) {
    return middle * zOffset;
  }
  return 0;
}

function translateYAxis(index) {
  const middle = 2;
  const yOffset = 37.5;
  const Axe1 = index / middle;
  const Axe2 = index % middle;

  if (Axe1 !== 0 && Axe2 != 0) {
    return (middle - Axe2) * yOffset;
  } else if (Axe1 !== 1 && Axe2 !== 0) {
    return Axe2 * yOffset;
  } else if (Axe1 !== 0 && Axe2 !== 1) {
    return middle * yOffset;
  }
  return 0;
}

function Carrousel() {
  const [touchPosition, setTouchPosition] = React.useState(null);

  function updateWindowSize() {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
      const handleWindowWidth = () => {
        setWindowWidth(window.innerWidth);
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
      const first = tableOfIndex.pop();
      tableOfIndex.unshift(first);
    }
    if (diff < -5) {
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
            className="Carrousel-carte Bleue Carrousel"
            id="0"
            style={
              width <= 1024
                ? {
                  transform: `translateX(${Math.sin((tableOfIndex[0] * Math.PI) / 2) * 150
                    }px) translateY(${translateYAxis(
                      tableOfIndex[0]
                    )}px) translateZ(${translateZAxis(tableOfIndex[0])}px`,
                  TransitionEvent: `all 1s`,
                }
                : { transform: `translateY(-20px)` }
            }
          ></figure>
          <figure
            className="Carrousel-carte Verte Carrousel"
            id="1"
            style={
              width <= 1024 ?
                {
                  transform: `translateX(${Math.sin((tableOfIndex[1] * Math.PI) / 2) * 150
                    }px) translateY(${translateYAxis(
                      tableOfIndex[1]
                    )}px) translateZ(${translateZAxis(tableOfIndex[1])}px)`,
                  TransitionEvent: `all 1s`,
                }
                : {
                  transform: `translateX(350px) translateY(40px) rotate(20deg)`,
                  TransitionEvent: `all 1s`,
                }}
          ></figure>
          <figure
            className="Carrousel-carte Rose Carrousel"
            id="2"
            style={
              width <= 1024 ?
                {
                  transform: `translateX(${Math.sin((tableOfIndex[2] * Math.PI) / 2) * 150
                    }px) translateY(${translateYAxis(
                      tableOfIndex[2]
                    )}px) translateZ(${translateZAxis(tableOfIndex[2])}px)`,
                  TransitionEvent: `all 1s`,
                }
                : {
                  display: "none"
                }}
          ></figure>
          <figure
            className="Carrousel-carte Orange Carrousel"
            id="3"
            style={
              width <= 1024 ?
                {
                  transform: `translateX(${Math.sin((tableOfIndex[3] * Math.PI) / 2) * 150
                    }px) translateY(${translateYAxis(
                      tableOfIndex[3]
                    )}px) translateZ(${translateZAxis(tableOfIndex[3])}px)`,
                  TransitionEvent: `all 1s`,
                }
                : {
                  transform: `translateX(-350px) translateY(40px) rotate(-20deg)`,
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
