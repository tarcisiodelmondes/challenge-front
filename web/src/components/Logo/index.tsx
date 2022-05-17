import Image from "next/image";
import styles from "./styles.module.scss";

export function Logo() {
  return (
    <div className={styles.containerLogo}>
      <Image
        className={styles.logo}
        src="/agencia-eplus-n-logo.png"
        alt="Logo da Agência e-Plus"
        layout="fill"
        quality={100}
      />
    </div>
  );
}
