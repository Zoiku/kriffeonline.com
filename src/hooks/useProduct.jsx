import useMarketplace from "./useMarketplace";
import { useAtom } from "jotai";
import { atomWithStorage } from "jotai/utils";

const savedProductsAtom = atomWithStorage(
  "saved",
  localStorage.getItem("saved")
);

const useProduct = () => {
  const { products } = useMarketplace();
  const [savedProducts, setSavedProducts] = useAtom(savedProductsAtom);
  const getProduct = (productNo) => {
    return products.find((product) => product.product_no === productNo);
  };
  const getRelatedProducts = (category) => {
    return products.filter((product) => product.category === category);
  };
  const handleToggleSaveProduct = (productNo, isSaved) => {
    if (isSaved) {
      setSavedProducts((previousSavedProducts) => {
        return previousSavedProducts.filter(
          (savedProduct) => savedProduct.productNo !== productNo
        );
      });
    } else {
      if (savedProducts) {
        setSavedProducts([...savedProducts, productNo]);
      } else {
        setSavedProducts([productNo]);
      }
    }
  };

  return {
    savedProducts,
    getProduct,
    getRelatedProducts,
    handleToggleSaveProduct,
  };
};

export default useProduct;
