import styles from "./styles.module.scss";

interface BuyButtonProps {
  text: string;
}

export function BuyButton({ text }: BuyButtonProps) {
  return <button className={styles.container}>{text}</button>;
}
