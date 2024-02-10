import useMarketplace from "./useMarketplace";

const useProduct = () => {
  const { products } = useMarketplace();
  const getProduct = (productNo) => {
    return products.find((product) => product.product_no === productNo);
  };
  const getRelatedProducts = (category) => {
    return products.filter((product) => product.category === category);
  };

  return { getProduct, getRelatedProducts };
};

export default useProduct;
