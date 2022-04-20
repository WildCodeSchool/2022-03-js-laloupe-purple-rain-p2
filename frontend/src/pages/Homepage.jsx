import { Cards, CardsOff } from "@components/Carrousel/Cartes";
import { NeonV, NeonH } from "@components/NeonSeparateur/NeonSeparateur";

export default function Homepage() {
  return (
    <>
      <NeonH />
      <Cards />
      <NeonH />
      <CardsOff />
      <NeonV />
    </>
  );
}
