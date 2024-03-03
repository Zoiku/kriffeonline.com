import "../styles/Favorites.css";
import CenteredSection from "../components/Centered";
import useFavorites from "../hooks/useFavorites";
import { MarketplaceProduct } from "../components/Marketplace/Index";
import { NoFavoritesPage } from "../components/Favorites/Index";

const Favorites = () => {
  const { favoriteItems } = useFavorites();

  return (
    <div className="favorites-page">
      {favoriteItems ? (
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
        <NoFavoritesPage />
      )}
    </div>
  );
};

export default Favorites;
