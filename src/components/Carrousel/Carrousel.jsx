/* eslint-disable */

import React from "react";
import { useState, useEffect } from "react";
import "./Carrousel.scss";
import "./Carrousel_cartes.scss";

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
  const initialState = [0, 1, 2, 3];

  const [tableOfIndex, setTableOfIndex] = useState(initialState);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [touchPosition, setTouchPosition] = useState(null);
  const [isDesktop, setIsDesktop] = useState((window.innerWidth >= 1024) ? true : false);

  function resetIndex() {
    if (isDesktop) {
      setTableOfIndex(initialState);
    }
  }

  function handleWidth() {
    setWindowWidth(window.innerWidth);

    if (windowWidth >= 1024) {
      setIsDesktop(true);
    } else {
      setIsDesktop(false);
    }
    resetIndex();
  }

  useEffect(() => {
    window.addEventListener("resize", handleWidth);

    return () => window.removeEventListener("resize", handleWidth);
  });

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

  function carrouselFormer(index, id) {
    // 4 element only !
    if (!isDesktop) {
      return {
        transform: `translateX(${Math.sin((index * Math.PI) / 2) * 150
          }px) translateY(${translateYAxis(
            index
          )}px) translateZ(${translateZAxis(index)}px`,
        TransitionEvent: `all 1s`,
      };
    } else {
      if (id == 0) { // first element
        return {
          transform: `translateY(-20px)`,
          color: `white`,
        };
      } else if (id == 1 || id == 3) { // second and last element
        if (id == 1) {
          return {
            transform: `translateX(350px) translateY(40px) rotate(20deg)`,
            TransitionEvent: `all 1s`,
          };
        }
        return {
          transform: `translateX(-350px) translateY(40px) rotate(-20deg)`,
          TransitionEvent: `all 1s`,
        };
      }
      return {
        display: "none"
      };
    }
  }

  return (
    <>
      <section
        className="carrousel"
        style={{ transform: `scale(${scaleWidth(windowWidth)})` }}
      >
        <section
          className="carrousel-container"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
        >
          <figure
            className={`Carrousel-carte Bleue Carrousel 
            ${(tableOfIndex[0] === 1 && !isDesktop) ? "Carrousel-left" : (tableOfIndex[0] === 3 && !isDesktop) ? "Carrousel-right" : ""}
            `}
            id="0"
            style={
              carrouselFormer(tableOfIndex[0], 0)
            }
            dataattribute="Alcool"
          >Alcool</figure>
          <figure
            className={`Carrousel-carte Verte Carrousel 
            ${(tableOfIndex[1] === 1 && !isDesktop) ? "Carrousel-left" : (tableOfIndex[1] === 3 && !isDesktop) ? "Carrousel-right" : ""}
            `}
            id="1"
            style={
              carrouselFormer(tableOfIndex[1], 1)
            }
            dataattribute="Cocktail Mixte"
          >Cocktail Mixte</figure>
          <figure
            className={`Carrousel-carte Rose Carrousel 
            ${(tableOfIndex[2] === 1 && !isDesktop) ? "Carrousel-left" : (tableOfIndex[2] === 3 && !isDesktop) ? "Carrousel-right" : ""}
            `}
            id="2"
            style={
              carrouselFormer(tableOfIndex[2], 2)
            }
            dataattribute="Random"
          >Random</figure>
          <figure
            className={`Carrousel-carte Orange Carrousel 
            ${(tableOfIndex[3] === 1 && !isDesktop) ? "Carrousel-left" : (tableOfIndex[3] === 3 && !isDesktop) ? "Carrousel-right" : ""}
            `}
            id="3"
            style={
              carrouselFormer(tableOfIndex[3], 3)
            }
            dataattribute="Sans-Alcool"
          >Sans-Alcool</figure>
        </section>
      </section>
      <button className="random-button">Random Cocktail</button>
    </>
  );
}

export default Carrousel;
