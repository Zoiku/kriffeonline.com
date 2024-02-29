import "../styles/ProductDetails.css";
import CenteredSection from "../components/Centered";
import ThumbsGallery from "../components/ThumbGallery";
import { useParams } from "react-router-dom";
import useProduct from "../hooks/useProduct";
import {
  ProductDetailsError,
  ProductDetailsLoading,
  ProductOverviewSection,
  ProductOverviewFeature,
} from "../components/ProductDetails/Index";
import Button from "../components/Button";

const ProductDetails = () => {
  const { productNo } = useParams();
  const {
    product,
    isFetchingProduct,
    isFetchingProductError,
    handleAddCartItem,
    handleAddFavoriteItem,
    isProductItemAddedToCart,
    isProductAddedToFavorite,
  } = useProduct(productNo);

  return (
    <div className="product-details-page">
      {isFetchingProduct ? (
        <ProductDetailsLoading />
      ) : isFetchingProductError ? (
        <ProductDetailsError message={"Uh oh..."} />
      ) : (
        <CenteredSection className={"product-details"}>
          <div className="product-details-gallery">
            <ThumbsGallery imageSrcs={[{}, {}, {}, {}, {}, {}]} />
          </div>
          <div className="product-overview-sections">
            <ProductOverviewSection className={"product-overview-head"}>
              <div>
                <small>{product.category}</small>
              </div>
              <div className="product-detail-name">{product.name}</div>
            </ProductOverviewSection>
            <ProductOverviewSection>
              <div>{product.description}</div>
            </ProductOverviewSection>

            {product.product_details && product.product_details.length > 0 && (
              <ProductOverviewSection
                className={"product-overview-features-container"}
              >
                <div>Features</div>
                <div className="product-overview-features">
                  {product.product_details.map((feature, index) => (
                    <ProductOverviewFeature
                      key={index}
                      name={feature.attribute_name}
                      value={feature.attribute_value}
                    />
                  ))}
                </div>
              </ProductOverviewSection>
            )}

            <ProductOverviewSection className={"product-overview-buttons"}>
              <Button
                onClick={() => handleAddCartItem(product)}
                fullWidth
                label={"Add to Cart"}
                theme={"theme2"}
                disabled={isProductItemAddedToCart(product.id)}
              />
              <Button
                fullWidth
                onClick={() =>
                  handleAddFavoriteItem({ ...product, product_no: productNo })
                }
                label={
                  isProductAddedToFavorite(product.id)
                    ? "Remove from favorites"
                    : "Add to Favorites"
                }
                theme={isProductAddedToFavorite(product.id) ? "theme1" : "theme0"}
              />
            </ProductOverviewSection>
          </div>
        </CenteredSection>
      )}
    </div>
  );
};

export default ProductDetails;
