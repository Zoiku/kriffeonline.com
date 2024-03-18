import { useQuery } from "react-query";
import useFavorites from "./useFavorites";
import axios from "../services/axios";

export const getProductByProductNo = async (productNo) => {
  return (await axios.get(`get_product_by_id?id=${productNo}`)).data.product;
};

export const getReviewsBySellerId = async (sellerId) => {
  if (sellerId) {
    return (await axios.get(`get_user_ratings?user_id=${sellerId}`)).data
      .ratings;
  }
  return null;
};

export const getRelatedProducts = async (category) => {
  if (category) {
    const productCategories = (await axios.get("/get_product_category_type"))
      .data;
    const productCategoryId = productCategories.find((productCateogry) => {
      if (productCateogry.name === category) {
        return productCateogry.id;
      }
    });
    if (productCategoryId) {
      return (await axios.get(`/list_products?category=${productCategoryId}`))
        .data.products;
    }
  }
  return null;
};

const useProduct = (productNo) => {
  const { data, isError, isLoading } = useQuery({
    queryKey: ["product", productNo],
    queryFn: () => getProductByProductNo(productNo),
  });

  const { handleAddFavoriteItem } = useFavorites();

  return {
    product: data,
    isFetchingProduct: isLoading,
    isFetchingProductError: isError,
    handleAddFavoriteItem,
  };
};

export default useProduct;
