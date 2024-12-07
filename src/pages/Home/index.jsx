import { Pokemon } from "../../components/Pokemon";
import PokemonLogo from "../../assets/img/pokemon_logo.png"
import styles from "./styles.module.css"
const Home = () => {
  return (
    <div>
      <img className={styles.image} src={PokemonLogo} alt="Pokemon Logo" />
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
