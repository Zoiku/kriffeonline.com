import { categoryMap } from "../../utils/categorymappings";
import CenteredSection from "../Centered";

export const ProductDetailsError = ({ message }) => (
  <CenteredSection className="product-details-error">
    <div></div>
    <div>
      <div>{message}</div>
    </div>
  </CenteredSection>
);

export const ProductDetailsLoading = () => (
  <div>
    <CenteredSection>Please wait...</CenteredSection>
  </div>
);

export const ProductOverviewSection = (props) => {
  const { children, className } = props;
  return (
    <div className={`product-overview-section ${className}`}>{children}</div>
  );
};

export const ProductOverviewFeature = ({ name, value }) => (
  <div className="product-overview-feature">
    <div className="product-overview-feature-name">{categoryMap[name]}:</div>
    <div className="product-overview-feature-value">{value}</div>
  </div>
);
