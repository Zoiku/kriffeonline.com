import axios from "../services/axios";
import { useQuery } from "react-query";

const getProduct = async (productNo) => {
  return (await axios.get(`/get_product_by_id?id=${productNo}`)).data.product;
};

const useProduct = (productNo) => {
  const { data, isLoading, isError } = useQuery("product", () =>
    getProduct(productNo)
  );

  return {
    product: data,
    isFetchingProduct: isLoading,
    isFetchingProductError: isError,
  };
};

export default useProduct;
