import CenteredSection from "../Centered";

export const NoFavoritesPage = () => (
  <div className="no-favorites-page">
    <CenteredSection mobileWithPadding>No favorites</CenteredSection>
  </div>
);

export const FavoritesErrorPage = () => (
  <div className="favorites-error-page">
    <CenteredSection mobileWithPadding>Something went wrong...</CenteredSection>
  </div>
);

export const FavoritesLoadingPage = () => (
  <div className="favorites-loading-page">
    <CenteredSection>Please wait...</CenteredSection>
  </div>
);
