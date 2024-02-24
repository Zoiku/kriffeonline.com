import CenteredSection from "../Centered";

export const ProductSpecification = ({ name, value }) => (
  <div className="product-overview-details-technical-specification">
    <div className="product-overview-details-technical-specification-name">
      {name}
    </div>
    <div className="product-overview-details-technical-specification-value">
      {value}
    </div>
  </div>
);

export const ProductDetailsError = ({ message }) => (
  <CenteredSection className="product-details-error">
    <div></div>
    <div>
      <div>{message}</div>
    </div>
  </CenteredSection>
);

export const ProductDetailsLoading = () => (
  <div className="product-details-loading-page">
    <div>Please wait...</div>
  </div>
);
