import styles from './styles.module.css';

export const Pokemon = ({ name, type }) => {
  return (
    <h2 className={styles.text}>
      Nome do Pokemon: {name || "Ditto"} | Tipo: {type}
    </h2>
  );
};

