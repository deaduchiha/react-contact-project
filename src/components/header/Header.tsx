import styles from "./Header.module.css";
const Header = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>contact app</h1>
      <p className={styles.text}>
        <span>react course</span> | contact app
      </p>
    </div>
  );
};

export default Header;
