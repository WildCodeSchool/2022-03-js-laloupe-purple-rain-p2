import "./Cartes.scss";

export function Cards() {
  return (
    <>
      <h1>Choose your cocktail</h1>
      <div className="Cartes">
        <div className="CarteOrange" />
        <div className="CarteBleue" />
        <div className="CarteRose" />
        <div className="CarteVerte" />
      </div>
    </>
  );
}

export function CardsOff() {
  return (
    <>
      <div className="CartesEteintes">
        <div className="CarteOrangeOff" />
        <div className="CarteBleueOff" />
        <div className="CarteRoseOff" />
        <div className="CarteVerteOff" />
      </div>
    </>
  );
}
