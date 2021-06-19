import styles from "./Logo.module.css";
import Image from "next/image";

export default function Logo() {
  return (
    <div className={styles.container}>
      <Image
        className={styles.logo}
        src="/Lokinet_logo_blk.png"
        alt="Lokinet logo"
        width={1024}
        height={200}
      />
    </div>
  );
}
