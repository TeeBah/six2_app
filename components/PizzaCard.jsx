import Image from "next/image";
import styles from "../styles/PizzaCard.module.css";

const PizzaCard = () => {
  return (
    <div className={styles.container}>
      <Image src="/img/pizza.png" alt="" width="500" height="500" />
      <h1 className={styles.title}>Escovitch Fish</h1>
      <span className={styles.price}>$19.90</span>
      <p className={styles.desc}>
        cooked with the finest seasonings.
      </p>
    </div>
  );
};

export default PizzaCard;
