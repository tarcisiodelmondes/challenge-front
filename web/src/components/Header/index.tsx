import Image from "next/image";
import { useState } from "react";
import { Cart } from "../Cart";
import { Logo } from "../Logo";
import { MenuButton } from "../MenuButton";
import { NavItems } from "../NavItems";
import styles from "./styles.module.scss";

export function Header() {
  const [isActiveMenu, setIsActiveMenu] = useState(false);

  function toggleMenu() {
    setIsActiveMenu(!isActiveMenu);
  }

  return (
    <header className={styles.container}>
      <Logo />

      <nav
        role="navigation"
        aria-labelledby="menu-label"
        className={styles.navItems}
      >
        <NavItems />
      </nav>

      <nav className={styles.containerIcons} tabIndex={0}>
        <div className={styles.containerIcon}>
          <Image
            src="/search.svg"
            alt="Icone de uma lupa de pesquisa"
            width={30}
            height={30}
          />
        </div>

        <div className={styles.containerIcon}>
          <Image
            src="/person.svg"
            alt="Icone de uma pessoa"
            width={30}
            height={30}
          />
        </div>

        <div className={`${styles.containerIcon} ${styles.cart}`}>
          <Cart />
        </div>

        <div className={styles.menuButton}>
          <MenuButton handleMenu={toggleMenu} isActive={isActiveMenu} />
        </div>

        <nav
          role="navigation"
          aria-labelledby="menu-label"
          className={`${styles.navItemsMobile} ${
            isActiveMenu ? styles.navItemsMobileActive : ""
          }`}
        >
          <NavItems />
        </nav>
      </nav>
    </header>
  );
}
