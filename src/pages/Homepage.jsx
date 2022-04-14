import { Cards } from "@components/Carrousel/Cartes";
import { CardsOff } from "@components/Carrousel/Cartes";
import { NeonV } from "@components/NeonSeparateur/NeonSeparateur";
import { NeonH } from "@components/NeonSeparateur/NeonSeparateur";

export default function Home() {
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
