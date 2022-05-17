import Link from "next/link";

import styles from "./styles.module.scss";

export function NavItems() {
  return (
    <ul className={styles.container} tabIndex={0}>
      <li>
        <Link href="#">
          <a>Lorem Ipsum</a>
        </Link>
      </li>

      <li>
        <Link href="#">
          <a>Lorem Ipsum</a>
        </Link>
      </li>

      <li>
        <Link href="#">
          <a>Lorem Ipsum</a>
        </Link>
      </li>

      <li>
        <Link href="#">
          <a>Lorem Ipsum</a>
        </Link>
      </li>

      <li>
        <Link href="#">
          <a>Lorem Ipsum</a>
        </Link>
      </li>
    </ul>
  );
}
