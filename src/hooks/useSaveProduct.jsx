import { atomWithStorage } from "jotai/utils";

const savedProductsAtom = atomWithStorage(
  "saved",
  localStorage.getItem("saved")
);

const useSaveProduct = () => {
  const [savedProducts, setSavedProducts] = useAtom(savedProductsAtom);
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
    handleToggleSaveProduct,
  };
};

export default useSaveProduct;
