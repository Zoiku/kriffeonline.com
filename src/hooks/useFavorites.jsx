import { useAtom } from "jotai";
import { atomWithStorage } from "jotai/utils";
import useAlert from "./useAlert";

const favoriteItemsAtom = atomWithStorage(
  "kriffe_online_favorites",
  localStorage.getItem("kriffe_online_favorites")
    ? JSON.parse(localStorage.getItem("kriffe_online_favorites"))
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
