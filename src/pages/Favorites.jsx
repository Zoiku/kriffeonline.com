import "../styles/Favorites.css";
import CenteredSection from "../components/Centered";
import { getFavorites } from "../hooks/useFavorites";
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
    queryKey: ["favorites"],
    queryFn: () => getFavorites(isLogged),
    enabled: isLogged,
  });

  return (
    <div className="favorites-page">
      {favoriteItemsQuery.isLoading ? (
        <FavoritesLoadingPage />
      ) : favoriteItemsQuery.isError ? (
        <FavoritesErrorPage />
      ) : favoriteItemsQuery.data ? (
        favoriteItemsQuery.data.length > 0 ? (
          <CenteredSection
            mobileWithPadding
            className={"favorite-items-container"}
          >
            <div className="page-title">Favorites Products</div>
            <div className="favorite-items">
              <span>Under construction</span>
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
