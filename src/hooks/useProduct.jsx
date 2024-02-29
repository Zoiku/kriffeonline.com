import { useQuery } from "react-query";
import useCart from "./useCart";
import useFavorites from "./useFavorites";
import axios from "../services/axios";

const getProductByProductNo = async (productNo) => {
  return (await axios.get(`get_product_by_id?id=${productNo}`)).data.product;
};

const useProduct = (productNo) => {
  const { data, isError, isLoading } = useQuery(
    "products",
    () => getProductByProductNo(productNo),
    { cacheTime: 0 }
  );
  const { handleAddCartItem, isProductItemAddedToCart } = useCart();
  const { handleAddFavoriteItem, isProductAddedToFavorite } = useFavorites();

  return {
    product: data,
    isFetchingProduct: isLoading,
    isFetchingProductError: isError,
    handleAddCartItem,
    handleAddFavoriteItem,
    isProductItemAddedToCart,
    isProductAddedToFavorite,
  };
};

export default useProduct;
