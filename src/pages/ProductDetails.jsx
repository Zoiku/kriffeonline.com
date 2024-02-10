import "../styles/ProductDetails.css";
import CenteredSection from "../components/Centered";
import { BiArrowBack } from "react-icons/bi";
import { useNavigate, useParams } from "react-router-dom";
import ThumbGallery from "../components/ThumbGallery";
import Button from "../components/Button";
import useProduct from "../hooks/useProduct";
import { MarketplaceProduct } from "../components/Marketplace/Index";

const ProductDetails = () => {
  const { productNo } = useParams();
  const navigate = useNavigate();
  const { getProduct, getRelatedProducts } = useProduct();
  const product = getProduct(productNo);
  const relatedProducts = getRelatedProducts(product.category);

  return (
    <div className="product-details-page">
      <CenteredSection>
        <div
          className="product-details-go-back-button-container"
          onClick={() => navigate(-1)}
        >
          <div className="product-details-go-back-button">
            <BiArrowBack fontSize={"inherit"} />
            <div>Back</div>
          </div>
        </div>
      </CenteredSection>

      <CenteredSection>
        <div className="product-details-content">
          <div className="product-overview">
            <div className="product-overview-thumb-gallery">
              <div className="product-overview-thumb-gallery-sticky">
                <ThumbGallery />
              </div>
            </div>
            <div className="product-overview-details-container">
              <div className="product-overview-details-head">
                <div className="product-overview-details-header">
                  <div className="product-overview-details-title">
                    {product.name}
                  </div>
                </div>
              </div>
              <div className="product-overview-details-about-item">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam
                voluptatem debitis quaerat assumenda dicta corporis, doloribus
                eveniet deleniti. Similique dicta maiores facilis eum dolorem
                quasi incidunt nisi. Molestiae laudantium adipisci nisi quasi
                enim porro placeat rem quos in, est repellat!
              </div>
              <div className="product-overview-details-about-item">
                <ul className="product-overview-details-about-item-list">
                  {Array.from(Array(5)).map((_, index) => (
                    <li key={index}>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Magni accusantium culpa cum deserunt assumenda excepturi
                      quasi labore hic amet numquam?
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className="product-order-summary">
            <div className="product-order-summary-sticky">
              <div className="product-order-summary-inner product-order-summary-actions">
                <Button theme={"theme2"} label={"Add to Cart"} fullWidth />
                <Button
                  onClick={() => navigate("/checkout")}
                  theme={"theme3"}
                  label={"Buy Now"}
                  fullWidth
                />
              </div>
            </div>
          </div>
        </div>
      </CenteredSection>
      <CenteredSection className={"product-page-related-products-container"}>
        <div className="product-page-related-products-title">
          Related Products
        </div>
        <div className="product-page-related-products">
          {relatedProducts.slice(0, 4).map((relatedProduct, index) => (
            <MarketplaceProduct key={index} product={relatedProduct} />
          ))}
        </div>
      </CenteredSection>
    </div>
  );
};

export default ProductDetails;
