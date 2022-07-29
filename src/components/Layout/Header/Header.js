import styles from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {
   return (
      <>
         <header className={styles.header}>
            <h2>Meals Factory</h2>
            <div className={styles.controls}>
               <HeaderCartButton onShowCart={props.onShowCart} />
            </div>
         </header>
      </>
   );
};

export default Header;
