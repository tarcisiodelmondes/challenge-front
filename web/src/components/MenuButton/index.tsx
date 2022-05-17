import Image from "next/image";

import styles from "./styles.module.scss";

interface MenuButtonProps {
  handleMenu: () => void;
  isActive: boolean;
}

export function MenuButton({ isActive, handleMenu }: MenuButtonProps) {
  return (
    <button
      aria-labelledby="menu-label"
      aria-expanded={isActive}
      onClick={handleMenu}
      className={styles.container}
    >
      {isActive ? (
        <Image src="/close.svg" alt="Fechar menu" width={35} height={35} />
      ) : (
        <Image src="/menu.svg" alt="Abrir menu" width={35} height={35} />
      )}
    </button>
  );
}
