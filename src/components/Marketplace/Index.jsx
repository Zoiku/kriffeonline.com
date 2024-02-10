import image from "../../assets/ipad.jpg";
import { NavLink } from "react-router-dom";
import { Skeleton } from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";

export const MarketplaceProductSeleton = () => (
  <div className="marketplace-product">
    <Skeleton
      animation="wave"
      variant="rectangular"
      className="marketplace-product-image"
    />
    <Skeleton animation="wave" width={"100%"} variant="text" />
    <Skeleton animation="wave" width={"20%"} variant="text" />
  </div>
);

export const MarketplaceProduct = ({ product }) => (
  <NavLink
    to={`/marketplace/${product.product_no}`}
    className="marketplace-product"
  >
    <div className="marketplace-product-image">
      <div className="marketplace-product-bookmark-btn"></div>
      <img src={image} alt="" />
    </div>
    <div className="marketplace-product-details">
      <div className="marketplace-product-details-name-and-views">
        <div>{product.name}</div>
        <div className="marketplace-product-details-views">
          <div className="marketplace-product-details-views-icon">
            <VisibilityIcon fontSize="inherit" />
          </div>
          <div>{product.views}</div>
        </div>
      </div>
      <div>GHS{product.price}</div>
    </div>
  </NavLink>
);

export const SelectFilterValue = ({ value, selected, onClick }) => (
  <div className="marketplace-filter-single-input">
    <span
      onClick={onClick}
      style={{
        cursor: "pointer",
        color: `${selected ? "blue" : ""}`,
      }}
    >
      {value}
    </span>
  </div>
);

export const SelectFilterValues = ({ value, onChange, checked }) => (
  <div className="marketplace-filter-checkbox-input">
    <input checked={checked} onChange={onChange} id={value} type="checkbox" />
    <label htmlFor={value}>{value}</label>
  </div>
);
