import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { Product } from "../interfaces/Products";
import { api } from "../services/api";

interface FetchProducts {
  item: Product[];
}

interface CartContextProps {
  handleOpenCart: () => void;
  isOpenCart: boolean;
  products: Product[];
}

interface CartContextProviderProps {
  children: ReactNode;
}

const CartContext = createContext({} as CartContextProps);

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [isOpenCart, setIsOpenCart] = useState(false);
  const [products, setProducts] = useState<Product[]>([]);

  function handleOpenCart() {
    setIsOpenCart(!isOpenCart);
  }

  async function getProducts() {
    const { data } = await api.get<FetchProducts>("/cart");

    setProducts(data.item);
  }

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <CartContext.Provider value={{ handleOpenCart, isOpenCart, products }}>
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => {
  return useContext(CartContext);
};
