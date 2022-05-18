import Image from "next/image";
import { useCart } from "../../context/Cart";
import { BuyButton } from "../BuyButton";

import styles from "./cartContent.module.scss";

export function CartContent() {
  const { isOpenCart, products } = useCart();

  const totalPrice = products.reduce((acc, currentValue) => {
    if (currentValue.quantity > 1) {
      return (acc += currentValue.bestPrice * currentValue.quantity);
    }

    return (acc += currentValue.bestPrice);
  }, 0);

  const totalPriceFormatted = Intl.NumberFormat("pt-BR", {
    currency: "BRL",
    style: "currency",
  }).format(totalPrice);

  if (!isOpenCart) return null;

  return (
    <div className={styles.container}>
      <div className={styles.containerProducts}>
        {products.map((product) => {
          return (
            <div key={product.productId} className={styles.product}>
              <div className={styles.productImage}>
                <Image
                  src={`http://localhost:3333${product.image}`}
                  alt={`Imagem do ${product.name}`}
                  width={85}
                  height={95}
                  objectFit="cover"
                />
              </div>

              <div className={styles.description}>
                <p>{product.name}</p>

                <span className={styles.containerQuantityAndPrice}>
                  Qtd: {product.quantity}
                  <span>{product.bestPriceFormated}</span>
                </span>
              </div>
            </div>
          );
        })}
      </div>

      <div className={styles.containerTotalPrice}>
        <span>
          Total do pedido:{" "}
          <span className={styles.totalPrice}>{totalPriceFormatted}</span>
        </span>
      </div>

      <BuyButton text="Finalizar compra" />
    </div>
  );
}
