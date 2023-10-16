import styles from "./product-card.module.css";

function ProductCard({name,selected,onClick}) {
  return (
    <div onClick={onClick} className={styles.container}>
      <p className={`${styles.name} ${selected && styles.selected}`}>{name}</p>
    </div>
  );
}

export default ProductCard;
