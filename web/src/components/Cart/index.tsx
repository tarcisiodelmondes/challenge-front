import Image from "next/image";
import { useCart } from "../../context/Cart";
import { CartContent } from "./CartContent";

import styles from "./styles.module.scss";

export function Cart() {
  const { handleOpenCart, isOpenCart } = useCart();

  return (
    <button
      className={styles.container}
      aria-label="Abrir carrinho de compras"
      aria-expanded={isOpenCart}
      onClick={handleOpenCart}
    >
      <Image
        src="/shopping.svg"
        alt="Icone de um carrinho de compras"
        width={30}
        height={30}
      />

      <CartContent />
    </button>
  );
}
