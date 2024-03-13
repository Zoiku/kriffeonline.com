import "../styles/Favorites.css";
import CenteredSection from "../components/Centered";
import useFavorites from "../hooks/useFavorites";
import { MarketplaceProduct } from "../components/Marketplace/Index";
import {
  NoFavoritesPage,
  FavoritesErrorPage,
  FavoritesLoadingPage,
} from "../components/Favorites/Index";

const Favorites = () => {
  const {
    favoriteItems,
    isFetchingFavoriteItems,
    isFetchingFavoriteItemsError,
  } = useFavorites();

  return (
    <div className="favorites-page">
      {isFetchingFavoriteItems ? (
        <FavoritesLoadingPage />
      ) : isFetchingFavoriteItemsError ? (
        <FavoritesErrorPage />
      ) : favoriteItems ? (
        favoriteItems.length > 0 ? (
          <CenteredSection className={"favorite-items-container"}>
            <div className="page-title">Favorites Products</div>
            <div className="favorite-items">
              {favoriteItems.map((favoriteItem) => (
                <MarketplaceProduct product={favoriteItem} />
              ))}
            </div>
          </CenteredSection>
        ) : (
          <NoFavoritesPage />
        )
      ) : (
        <FavoritesErrorPage />
      )}
    </div>
  );
};

export default Favorites;
