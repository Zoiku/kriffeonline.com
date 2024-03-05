import axios from "../services/axios";
import { useQuery } from "react-query";

const getRelatedProducts = async (category) => {
  return axios.get(`/list_products?category=${category}`);
};

const useRelatedProducts = (category) => {
  const { data, isLoading, isError } = useQuery("relatedProducts", () =>
    getRelatedProducts(category)
  );

  return {
    relatedProducts: data,
    isFetchingRelatedProducts: isLoading,
    isFetchingRelatedProductsError: isError,
  };
};

export default useRelatedProducts;
