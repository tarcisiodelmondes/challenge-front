import "../styles/globals.scss";
import type { AppProps } from "next/app";
import { CartContextProvider } from "../context/Cart";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <CartContextProvider>
      <Component {...pageProps} />
    </CartContextProvider>
  );
}

export default MyApp;
