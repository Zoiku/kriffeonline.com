import "../styles/ProductDetails.css";
import CenteredSection from "../components/Centered";
import { BiArrowBack } from "react-icons/bi";
import { useNavigate, useParams } from "react-router-dom";
import ThumbGallery from "../components/ThumbGallery";
import useProduct from "../hooks/useProduct";
import {
  ProductDetailsError,
  ProductDetailsLoading,
} from "../components/ProductDetails/Index";
import { categoryMap } from "../utils/categorymappings";

const ProductDetails = () => {
  const navigate = useNavigate();
  const { productNo } = useParams();
  const { product, isFetchingProduct, isFetchingProductError } =
    useProduct(productNo);

  return isFetchingProduct ? (
    <ProductDetailsLoading />
  ) : isFetchingProductError ? (
    <ProductDetailsError message={"Uh oh, something went wrong"} />
  ) : product ? (
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
                {product.description}
              </div>
              <div className="product-overview-details-about-item">
                <ul className="product-overview-details-about-item-list">
                  {product.product_details.map((detail, index) => (
                    <li key={index}>
                      {categoryMap[detail.attribute_name] ??
                        detail.attribute_name}
                      : {detail.attribute_value}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className="product-order-summary">
            <div className="product-order-summary-sticky"></div>
          </div>
        </div>
      </CenteredSection>
    </div>
  ) : (
    <ProductDetailsError message={"Uh oh, something went wrong"} />
  );
};

export default ProductDetails;
