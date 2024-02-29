import { useAtom } from "jotai";
import { atomWithStorage } from "jotai/utils";
import useAlert from "./useAlert";

const favoriteItemsAtom = atomWithStorage(
  "favorites",
  localStorage.getItem("favorites")
    ? JSON.parse(localStorage.getItem("favorites"))
    : []
);

const useFavorites = () => {
  const { handleOpenSuccessAlert } = useAlert();
  const [favoriteItems, setFavoriteItems] = useAtom(favoriteItemsAtom);
  const handleAddFavoriteItem = (productItem) => {
    if (isProductAddedToFavorite(productItem.id)) {
      setFavoriteItems((previousFavoriteItems) => {
        return previousFavoriteItems.filter(
          (previousFavoriteItem) => previousFavoriteItem.id !== productItem.id
        );
      });
      handleOpenSuccessAlert("Removed from Favorites");
    } else {
      setFavoriteItems([...favoriteItems, productItem]);
      handleOpenSuccessAlert("Added to Favorites");
    }
  };
  const isProductAddedToFavorite = (productItemId) => {
    return favoriteItems.some(
      (favoriteItem) => favoriteItem.id === productItemId
    );
  };

  return {
    favoriteItems,
    handleAddFavoriteItem,
    isProductAddedToFavorite,
  };
};

export default useFavorites;
