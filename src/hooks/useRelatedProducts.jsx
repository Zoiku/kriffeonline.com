import axios from "../services/axios";
import { useQuery } from "react-query";

const getRelatedProducts = async (category) => {
  const { id } = await axios.get('categoryendpoint').data.category;
  return axios.get(`/list_products?category=${id}`).data.products;
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
