import styles from "./Header.module.css";
import Logo from "../logo/Logo";
import Spacer from "../spacer/Spacer";

export default function Header() {
  return (
    <header className={styles.container}>
      <Logo />
      <Spacer />
    </header>
  );
}
