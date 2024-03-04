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
  ProductOverviewSectionCollapsable,
} from "../components/ProductDetails/Index";
import Currency from "../components/Currency";
import Chip from "@mui/material/Chip";
import Button from "../components/Button";
import useAuth from "../hooks/useAuth";
import WarningAmberRoundedIcon from "@mui/icons-material/WarningAmberRounded";

const ProductDetails = () => {
  const { productNo } = useParams();
  const { isLogged } = useAuth();
  const { product, isFetchingProduct, isFetchingProductError } =
    useProduct(productNo);

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
      )}
    </div>
  );
};

export default ProductDetails;
