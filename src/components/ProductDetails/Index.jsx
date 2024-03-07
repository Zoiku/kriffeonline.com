import { categoryMap } from "../../utils/categorymappings";
import CenteredSection from "../Centered";
import { useState } from "react";
import Collapse from "@mui/material/Collapse";
import { Skeleton } from "@mui/material";
import Rating from "@mui/material/Rating";
import Avatar from "@mui/material/Avatar";
import WarningAmberRoundedIcon from "@mui/icons-material/WarningAmberRounded";

export const ProductDetailsError = () => (
  <div>
    <CenteredSection className="product-details-error-page">
      <div>Something went wrong</div>
    </CenteredSection>
  </div>
);

export const ProductDetailsLoading = () => (
  <div>
    <CenteredSection className={"product-detail-loading-page"}>
      Please wait...
    </CenteredSection>
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

export const MarketplaceSellerDetail = ({ label, value }) => (
  <div className="product-seller-detail">
    <div className="product-seller-label">{label}:</div>
    <div>{value}</div>
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

export const SellerReviews = ({ data }) => {
  const reviewsLength = data.length;
  const [isCollapsed, setIsCollapsed] = useState(reviewsLength > 1);
  const reviews = isCollapsed ? data.slice(0, 1) : data;
  const handleToggleCollapse = () => setIsCollapsed(!isCollapsed);

  return (
    <div className="seller-reviews">
      <div>
        {reviews.map((review, index) => (
          <SellerReview key={index} review={review} />
        ))}
      </div>
      {reviewsLength > 1 && (
        <div>
          <small
            onClick={handleToggleCollapse}
            style={{ cursor: "pointer", color: "blue" }}
          >
            {isCollapsed
              ? `Show more reviews (${reviewsLength - 1})`
              : "Show less reviews"}
          </small>
        </div>
      )}
    </div>
  );
};

export const SellerReview = ({ review }) => (
  <div className="seller-review">
    <div className="seller-review-profile">
      <div>
        <Avatar
          className="seller-review-profile-icon"
          src={"/"}
          alt={review.feedback_from}
        ></Avatar>
      </div>
      <div>
        <small>{review.feedback_from ?? "Anonymous"}</small>
      </div>
    </div>
    <div>
      <Rating size="small" name="read-only" value={review.rating} readOnly />
    </div>
    <div>{review.feedback_text}</div>
  </div>
);

export const SellerReviewSkeleton = () => (
  <div className="seller-review skeleton">
    <div className="seller-review-profile">
      <Skeleton variant="circular">
        <Avatar className="seller-review-profile-icon" />
      </Skeleton>
      <Skeleton variant="text" width={"10%"} />
    </div>
    <div>
      <Skeleton variant="text" width={"20%"} />
    </div>
    <div>
      <Skeleton variant="text" width={"30%"} />
    </div>
  </div>
);

export const MarketPlaceProductSellerTip = () => (
  <div className="tip">
    <div className="tip-icon">
      <WarningAmberRoundedIcon color="inherit" />
    </div>
    <div className="tip-detail">
      <div className="tip-title">Safety Tips</div>
      <div className="tip-content">
        <ul className="tip-content-list">
          <li>Avoid sending any prepayments</li>
          <li>Meet with the seller at a safe public place</li>
          <li>Inspect what you're going to buy</li>
          <li>Pay only if you're satisfied</li>
        </ul>
      </div>
    </div>
  </div>
);
