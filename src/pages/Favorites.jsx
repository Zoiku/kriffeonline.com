import "../styles/Favorites.css";
import CenteredSection from "../components/Centered";
import { getFavorites } from "../hooks/useFavorites";
import { MarketplaceProduct } from "../components/Marketplace/Index";
import {
  NoFavoritesPage,
  FavoritesErrorPage,
  FavoritesLoadingPage,
} from "../components/Favorites/Index";
import { useQuery } from "react-query";

const Favorites = () => {
  const favoriteItemsQuery = useQuery({
    queryKey: ["favorites"],
    queryFn: getFavorites,
  });

  return (
    <div className="favorites-page">
      {favoriteItemsQuery.isLoading ? (
        <FavoritesLoadingPage />
      ) : favoriteItemsQuery.isError ? (
        <FavoritesErrorPage />
      ) : favoriteItemsQuery.data ? (
        favoriteItemsQuery.data.length > 0 ? (
          <CenteredSection className={"favorite-items-container"}>
            <div className="page-title">Favorites Products</div>
            <div className="favorite-items">
              {favoriteItemsQuery.data.map(
                (favoriteItem, index) =>
                  favoriteItem && (
                    <MarketplaceProduct key={index} product={favoriteItem} />
                  )
              )}
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
