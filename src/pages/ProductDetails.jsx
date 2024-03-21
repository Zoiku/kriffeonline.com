import "../styles/ProductDetails.css";
import CenteredSection from "../components/Centered";
import ThumbsGallery from "../components/ThumbGallery";
import { NavLink, useParams } from "react-router-dom";
import useProduct, {
  getRelatedProducts,
  getReviewsBySellerId,
} from "../hooks/useProduct";
import { useQuery } from "react-query";
import {
  ProductDetailsError,
  ProductOverviewSection,
  ProductOverviewFeature,
  ProductOverviewSectionCollapsable,
  SellerReviewSkeleton,
  MarketPlaceProductSellerTip,
  MarketplaceSellerDetail,
  SellerReviews,
} from "../components/ProductDetails/Index";
import Chip from "@mui/material/Chip";
import useAuth from "../hooks/useAuth";
import {
  MarketplaceProduct,
  MarketplaceProductSeleton,
} from "../components/Marketplace/Index";
import { selectRandomN } from "../utils/array";
import ReadMore from "../components/ReadMore";
import PostReview from "../components/PostReview";
import LoadingPage from "../components/LoadingPage";

const ProductDetails = () => {
  const { isLogged } = useAuth();
  const { productNo } = useParams();

  const { product, isFetchingProduct, isFetchingProductError } =
    useProduct(productNo);

  const reviewsQuery = useQuery({
    queryKey: ["reviews", product?.user_id],
    queryFn: () => getReviewsBySellerId(product?.user_id),
  });

  const relatedProductsQuery = useQuery({
    queryKey: ["relatedProducts", product?.category],
    queryFn: () => getRelatedProducts(product?.category),
  });

  return isFetchingProduct ? (
    <LoadingPage />
  ) : isFetchingProductError ? (
    <ProductDetailsError />
  ) : (
    <div className="product-details-page">
      <CenteredSection className={"product-details"}>
        <div className={"product-details-gallery"}>
          <ThumbsGallery imageSrcs={[{}, {}, {}, {}]} />
        </div>
        <div className={"product-overview-sections"}>
          <ProductOverviewSection className={"product-overview-head"}>
            <div className="product-detail-category">{product.category}</div>
            <div className="product-detail-name">{product.name}</div>
          </ProductOverviewSection>
          <ProductOverviewSection>
            <ReadMore text={product.description} maxLength={200} />
          </ProductOverviewSection>

          {product.product_details && product.product_details.length > 0 && (
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
                <MarketplaceSellerDetail
                  label={"Name"}
                  value={product.sellername}
                />
                <MarketplaceSellerDetail
                  label={"Telephone"}
                  value={product.sellerphonenumber}
                />
                <MarketplaceSellerDetail
                  label={"Location"}
                  value={product.location}
                />
              </div>
            </ProductOverviewSectionCollapsable>
          )}

          {product.tags && product.tags.length > 0 && (
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
          )}

          <ProductOverviewSection>
            <MarketPlaceProductSellerTip />
          </ProductOverviewSection>
        </div>
      </CenteredSection>
      <CenteredSection
        mobileWithPadding
        className={"related-products-container"}
      >
        <div className="page-title">Similar products</div>
        {relatedProductsQuery.isLoading ? (
          <div className={"related-products"}>
            {Array.from(Array(4)).map((_, index) => (
              <MarketplaceProductSeleton key={index} />
            ))}
          </div>
        ) : relatedProductsQuery.isError ? (
          <>Something went wrong...</>
        ) : relatedProductsQuery.data &&
          relatedProductsQuery.data.length > 0 ? (
          <div className={"related-products"}>
            {selectRandomN(relatedProductsQuery.data, 4).map(
              (relatedProduct, index) => (
                <MarketplaceProduct key={index} product={relatedProduct} />
              )
            )}
          </div>
        ) : (
          <>No related products</>
        )}
      </CenteredSection>
      <CenteredSection mobileWithPadding className={"seller-review-container"}>
        <div className="page-title">Reviews</div>
        {isLogged ? (
          reviewsQuery.isLoading ? (
            <div className="seller-reviews">
              {Array.from(Array(1)).map((_, index) => (
                <SellerReviewSkeleton key={index} />
              ))}
            </div>
          ) : reviewsQuery.isError ? (
            <>Something went wrong...</>
          ) : reviewsQuery.data && reviewsQuery.data.length > 0 ? (
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 30,
              }}
            >
              <SellerReviews data={reviewsQuery.data} />
              <PostReview
                sellerId={product?.user_id}
                sellerName={product?.sellername}
              />
            </div>
          ) : (
            <>No reviews</>
          )
        ) : (
          <div>
            Please{" "}
            <NavLink to={`/signin?redirect_to=/marketplace/${productNo}`}>
              sign in
            </NavLink>{" "}
            to view reviews
          </div>
        )}
      </CenteredSection>
    </div>
  );
};

export default ProductDetails;
