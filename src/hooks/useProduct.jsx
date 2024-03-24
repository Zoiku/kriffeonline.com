import { useQuery } from "react-query";
import useFavorites from "./useFavorites";
import axios from "../services/axios";

export const getProductByProductNo = async (productNo) => {
  return (await axios.get(`get_product_by_id?id=${productNo}`)).data.product;
};

export const getReviewsBySellerId = async (sellerId) => {
  return (await axios.get(`get_user_ratings?user_id=${sellerId}`)).data.ratings;
};

export const getRelatedProducts = async (category) => {
  try {
    const productCategories = (await axios.get("/get_product_category_type"))
      .data;
    const macthedProductCategory = productCategories.find(
      (category) => category.name === "Seasonal"
    );
    if (macthedProductCategory) {
      return axios.get(
        `/list_products?category=${[macthedProductCategory.id]}`
      );
    } else {
      return null;
    }
  } catch (error) {
    throw new Error(error);
  }
};

const useProduct = (productNo) => {
  const { data, isError, isLoading } = useQuery({
    queryKey: ["product", productNo],
    queryFn: () => getProductByProductNo(productNo),
    enabled: productNo !== undefined,
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
