import "../styles/ProductDetails.css";
import CenteredSection from "../components/Centered";
import ThumbsGallery from "../components/ThumbGallery";
import { NavLink, useParams } from "react-router-dom";
import useProduct from "../hooks/useProduct";
import { useQuery } from "react-query";
import {
  ProductDetailsError,
  ProductDetailsLoading,
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
  getRelatedProducts,
  getReviewsBySellerId,
} from "../utils/product-details";
import {
  MarketplaceProduct,
  MarketplaceProductSeleton,
} from "../components/Marketplace/Index";
import { selectRandomN } from "../utils/array";

const ProductDetails = () => {
  const { isLogged } = useAuth();
  const { productNo } = useParams();
  const { product, isFetchingProduct, isFetchingProductError } =
    useProduct(productNo);
  const reviewsQuery = useQuery(["reviews", product], () =>
    getReviewsBySellerId(product?.user_id)
  );
  const relatedProductsQuery = useQuery(["relatedProducts", product], () =>
    getRelatedProducts(product?.category)
  );

  return isFetchingProduct ? (
    <ProductDetailsLoading />
  ) : isFetchingProductError ? (
    <ProductDetailsError />
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
            <MarketPlaceProductSellerTip />
          </ProductOverviewSection>
        </div>
      </CenteredSection>
      <CenteredSection className={"related-products-container"}>
        <div className="page-title">Similar items you may like</div>
        {relatedProductsQuery.isLoading ? (
          <div className="related-products">
            {Array.from(Array(4)).map((_, index) => (
              <MarketplaceProductSeleton key={index} />
            ))}
          </div>
        ) : relatedProductsQuery.isError ? (
          <>Something went wrong...</>
        ) : relatedProductsQuery.data &&
          relatedProductsQuery.data.length > 0 ? (
          <div className="related-products">
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
      <CenteredSection className={"seller-review-container"}>
        <div className="page-title">Customer feedback</div>
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
            <SellerReviews data={reviewsQuery.data} />
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
