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
import useAuth from "../hooks/useAuth";

const Favorites = () => {
  const { isLogged } = useAuth();

  const favoriteItemsQuery = useQuery({
    queryKey: ["favorites", isLogged],
    queryFn: () => getFavorites(isLogged),
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
