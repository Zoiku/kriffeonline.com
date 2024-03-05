import { useQuery } from "react-query";
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

  const { handleAddFavoriteItem, isProductAddedToFavorite } = useFavorites();

  return {
    product: data,
    isFetchingProduct: isLoading,
    isFetchingProductError: isError,
    handleAddFavoriteItem,
    isProductAddedToFavorite,
  };
};

export default useProduct;
