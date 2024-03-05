import { categoryMap } from "../../utils/categorymappings";
import CenteredSection from "../Centered";
import { useState } from "react";
import Collapse from "@mui/material/Collapse";
import { Skeleton } from "@mui/material";
import Rating from "@mui/material/Rating";

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

export const ProductOverviewSectionCollapsable = ({ title, children }) => {
  const [open, setOpen] = useState(false);
  const handleToggle = () => setOpen(!open);
  return (
    <div className="product-overview-section-collapsable">
      <div
        onClick={handleToggle}
        className="product-overview-section-collapsable-header"
      >
        <div className="product-overview-section-collapsable-header-title">
          {title}
        </div>
        <div>{open ? "-" : "+"}</div>
      </div>
      <Collapse in={open}>
        <div className="product-overview-section-collapsable-children">
          {children}
        </div>
      </Collapse>
    </div>
  );
};

export const SellerReview = ({ review }) => (
  <div className="seller-review">
    <div>
      <Rating size="small" name="read-only" value={review.rating} readOnly />
    </div>
    <div>{review.feedback_text}</div>
    <div className="reviewer-name">
      <small>{review.feedback_from ? review.feedback_from : "Anonymous"}</small>
    </div>
  </div>
);

export const SellerReviewSkeleton = () => (
  <div className="seller-review">
    <Skeleton variant="text" width={"20%"} />
    <Skeleton variant="text" width={"100%"} />
    <Skeleton variant="text" width={"40%"} />
  </div>
);
