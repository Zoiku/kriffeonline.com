import "../styles/ProductDetails.css";
import CenteredSection from "../components/Centered";
import ThumbsGallery from "../components/ThumbGallery";
import { useParams } from "react-router-dom";
import useProduct from "../hooks/useProduct";
import useReviews from "../hooks/useReviews";
import {
  ProductDetailsError,
  ProductDetailsLoading,
  ProductOverviewSection,
  ProductOverviewFeature,
  ProductOverviewSectionCollapsable,
  SellerReview,
  SellerReviewSkeleton,
} from "../components/ProductDetails/Index";
import Chip from "@mui/material/Chip";
import Button from "../components/Button";
import useAuth from "../hooks/useAuth";
import WarningAmberRoundedIcon from "@mui/icons-material/WarningAmberRounded";

const ProductDetails = () => {
  const { productNo } = useParams();
  const { isLogged } = useAuth();
  const { product, isFetchingProduct, isFetchingProductError } =
    useProduct(productNo);
  const { reviews, isFetchingReviews, isFetchingReviewsError } = useReviews(
    product?.user_id
  );

  return isFetchingProduct ? (
    <ProductDetailsLoading />
  ) : isFetchingProductError ? (
    <ProductDetailsError message={"Uh oh..."} />
  ) : (
    <div className="product-details-page">
      <CenteredSection className={"product-details"}>
        <div className="product-details-gallery">
          <ThumbsGallery imageSrcs={[{}, {}, {}, {}]} />
        </div>
        <div className="product-overview-sections">
          <ProductOverviewSection className={"product-overview-head"}>
            <div className="product-detail-category">{product.category}</div>
            <div className="product-detail-name">{product.name}</div>
          </ProductOverviewSection>
          <ProductOverviewSection>
            <p>{product.description}</p>
          </ProductOverviewSection>

          {product.product_details.length > 0 && (
            <ProductOverviewSectionCollapsable title={"Specifications"}>
              <div className="product-overview-features-container">
                {product.product_details.map((productDetail, index) => (
                  <ProductOverviewFeature
                    key={index}
                    name={productDetail.attribute_name}
                    value={productDetail.attribute_value}
                  />
                ))}
              </div>
            </ProductOverviewSectionCollapsable>
          )}

          {isLogged && (
            <ProductOverviewSectionCollapsable title={"Seller Details"}>
              <div className="product-seller-details">
                <div className="product-seller-detail">
                  <div className="product-seller-label">Name:</div>
                  <div>{product.sellername}</div>
                </div>
                <div className="product-seller-detail">
                  <div className="product-seller-label">Telephone:</div>
                  <div>{product.sellerphonenumber}</div>
                </div>
                <div className="product-seller-detail">
                  <div className="product-seller-label">Location:</div>
                  <div>{product.location}</div>
                </div>
                <Button fullWidth label={"Call Seller"} />
              </div>
            </ProductOverviewSectionCollapsable>
          )}

          <ProductOverviewSectionCollapsable title={"Product Tags"}>
            <div className="product-tags">
              {product.tags.map((tag, index) => (
                <Chip
                  sx={{ borderRadius: 1 }}
                  variant="contained"
                  size="small"
                  label={tag}
                  key={index}
                />
              ))}
            </div>
          </ProductOverviewSectionCollapsable>

          <ProductOverviewSection>
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
          </ProductOverviewSection>
        </div>
      </CenteredSection>
      <CenteredSection className={"related-products-container"}>
        <div className="page-title">Related Products</div>
        <div>Loading...</div>
      </CenteredSection>
      <CenteredSection className={"seller-review-container"}>
        <div className="page-title">Customer Feedback</div>
        {isFetchingReviews ? (
          <div className="seller-reviews">
            {Array.from(Array(5)).map((_, index) => (
              <SellerReviewSkeleton key={index} />
            ))}
          </div>
        ) : isFetchingReviewsError ? (
          <>Uh oh</>
        ) : reviews.length > 0 ? (
          <div className="seller-reviews">
            {reviews.map((review, index) => (
              <SellerReview key={index} review={review} />
            ))}
          </div>
        ) : (
          <>No reviews</>
        )}
      </CenteredSection>
    </div>
  );
};

export default ProductDetails;
