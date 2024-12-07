import { Pokemon } from "../components/Pokemon";

const Home = () => {
  return (
    <div>
      <h1>Meu primeiro site com React</h1>
      <ul>
        <li><Pokemon name="Pikachu" type="Elétrico"/></li>
        <li><Pokemon name="Charizard" type="Fogo"/></li>
        <li><Pokemon name="Greninja" type="Água"/></li>
        <li><Pokemon name="Rayquaza" type="Dragão"/></li>
      </ul>
    </div>
  );
}

export default Home;
