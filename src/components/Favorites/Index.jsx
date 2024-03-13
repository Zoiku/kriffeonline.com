import CenteredSection from "../Centered";

export const NoFavoritesPage = () => (
  <div className="no-favorites-page">
    <CenteredSection>No favorites</CenteredSection>
  </div>
);

export const FavoritesErrorPage = () => (
  <div className="favorites-error-page">
    <CenteredSection>Something went wrong...</CenteredSection>
  </div>
);

export const FavoritesLoadingPage = () => (
  <div className="favorites-loading-page">
    <CenteredSection>Please wait...</CenteredSection>
  </div>
);
