import { NavLink } from "react-router-dom";
import { Skeleton } from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import FavoriteRoundedIcon from "@mui/icons-material/FavoriteRounded";
import Currency from "../Currency";
import { useState } from "react";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import FavoriteBorderRoundedIcon from "@mui/icons-material/FavoriteBorderRounded";
import useFavorites from "../../hooks/useFavorites";
import Chip from "@mui/material/Chip";
import DoneIcon from "@mui/icons-material/Done";

export const MarketplaceErrorPage = () => <div>Something went wrong...</div>;

export const MarketplaceNoProductsPage = () => (
  <div>
    <div>No products</div>
  </div>
);

export const MarketFilterGroupCollapsable = ({ title, children }) => {
  const [open, setOpen] = useState(false);
  const handleToggleOpen = () => setOpen(!open);
  return (
    <div className="marketplace-filter-group-collapsable">
      <div
        onClick={handleToggleOpen}
        className="marketplace-filter-group-collapsable-head"
      >
        <div className="marketplace-filter-group-collapsable-title">
          {title}
        </div>
        <div>{open ? "-" : "+"}</div>
      </div>
      <Collapse in={open}>
        <div className="marketplace-filter-group-collapsable-content">
          {children}
        </div>
      </Collapse>
    </div>
  );
};

export const MarketplaceProductSeleton = () => (
  <div className="marketplace-product">
    <Skeleton
      animation="wave"
      variant="rectangular"
      className="marketplace-product-image"
    />
    <div>
      <Skeleton animation="wave" width={"100%"} variant="text" />
    </div>
  </div>
);

export const MarketplaceProduct = ({ product }) => {
  const { handletoggleFavoriteProduct } = useFavorites();
  const productImageSrc = product.productimages
    ? product.productimages.length > 0
      ? product.productimages.at(0)
      : "/"
    : "/";

  return (
    <NavLink
      to={`/marketplace/${product.product_no}`}
      className="marketplace-product"
    >
      <div className="marketplace-product-image">
        <div className="marketplace-product-price">
          <Currency value={product.price} />
        </div>
        <div className="marketplace-product-add-to-favorite">
          <IconButton
            sx={{ backgroundColor: "white" }}
            onClick={(e) => {
              e.preventDefault();
              handletoggleFavoriteProduct({
                productNo: product.product_no,
                isFavorited: product.is_saved,
                sellerId: product.seller_id,
              });
            }}
          >
            {product.is_saved ? (
              <FavoriteRoundedIcon fontSize="small" />
            ) : (
              <FavoriteBorderRoundedIcon fontSize="small" />
            )}
          </IconButton>
        </div>
        <img src={productImageSrc} alt={product.name} />
      </div>
      <div className="marketplace-product-details">
        <div className="marketplace-product-details-name-and-stats">
          <div className="marketplace-product-details-name">{product.name}</div>
          <div className="marketplace-product-details-stats-container">
            <div className="marketplace-product-details-stats">
              <div className="marketplace-product-details-stats-icon">
                <FavoriteRoundedIcon fontSize="inherit" />
              </div>
              <div>{product.saves}</div>
            </div>
            <div className="marketplace-product-details-stats">
              <div className="marketplace-product-details-stats-icon">
                <VisibilityIcon fontSize="inherit" />
              </div>
              <div>{product.views}</div>
            </div>
          </div>
        </div>
      </div>
    </NavLink>
  );
};

export const SelectFilterValue = ({
  value,
  selected,
  onClick,
  chipIcon = false,
}) => (
  <div className="marketplace-filter-single-input">
    {chipIcon ? (
      <Chip
        clickable
        sx={{
          borderRadius: 2,
        }}
        deleteIcon={<DoneIcon />}
        label={value}
        onClick={onClick}
        onDelete={selected ? onClick : undefined}
        size="small"
        variant="outlined"
      />
    ) : (
      <span
        onClick={onClick}
        className="marketplace-filter-single-input-span"
        style={{
          color: `${selected ? "blue" : ""}`,
        }}
      >
        {value}
      </span>
    )}
  </div>
);

export const SelectCheckboxFilterValues = ({ value, onChange, checked }) => (
  <div className="marketplace-filter-checkbox-input">
    <input checked={checked} onChange={onChange} id={value} type="checkbox" />
    <label htmlFor={value}>{value}</label>
  </div>
);
