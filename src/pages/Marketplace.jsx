import "../styles/Marketplace.css";
import useMarketplace from "../hooks/useMarketplace";
import {
  SelectFilterValues,
  MarketplaceProduct,
  SelectFilterValue,
  MarketplaceProductSeleton,
} from "../components/Marketplace/Index";
import Menu from "../components/Menu";
import { MenuItem, MenuList } from "@mui/material";

const Marketplace = () => {
  const {
    products,
    isFetchingProducts,
    isFetchingProductsError,
    filters,
    handleSelectFilterValue,
    handleSelectFilterValues,
    isSelectedFilterValue,
    isCheckedFilterValue,
    sortMenu,
  } = useMarketplace();

  return (
    <div className="marketplace-page">
      <div className="marketplace-display">
        <div className="marketplace-display-inner marketplace-display-filters">
          <div className="marketplace-display-filters-sticky">
            {filters.map((filter, index) => (
              <div key={index} className="marketplace-filter-group">
                {filter.title && (
                  <div className="marketplace-filter-group-title">
                    {filter.title}
                  </div>
                )}
                <div>
                  {filter.checkbox
                    ? filter.values.map((value, index) => (
                        <SelectFilterValues
                          key={index}
                          value={value}
                          checked={isCheckedFilterValue(filter.name, value)}
                          onChange={(e) =>
                            handleSelectFilterValues(
                              filter.name,
                              value,
                              e.target.checked
                            )
                          }
                        />
                      ))
                    : filter.values.map((value, index) => (
                        <SelectFilterValue
                          key={index}
                          value={value}
                          selected={isSelectedFilterValue(filter.name, value)}
                          onClick={() =>
                            handleSelectFilterValue(filter.name, value)
                          }
                        />
                      ))}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="marketplace-display-inner marketplace-display-products">
          <div className="marketplace-display-products-sort-by">
            <Menu
              anchorEl={sortMenu.anchorEl}
              open={sortMenu.open}
              handleClick={sortMenu.handleClick}
              handleClose={sortMenu.handleClose}
              label={"Sort by"}
            >
              <MenuList dense>
                <MenuItem>Select</MenuItem>
              </MenuList>
            </Menu>
          </div>
          {isFetchingProducts ? (
            <div className="marketplace-products">
              {Array.from(Array(20)).map((_, index) => (
                <MarketplaceProductSeleton key={index} />
              ))}
            </div>
          ) : isFetchingProductsError ? (
            <div className="marketplace-error-no-products">Uh oh...</div>
          ) : products ? (
            products.length === 0 ? (
              <>No products...</>
            ) : (
              <div className="marketplace-products">
                {products.map((product, index) => (
                  <MarketplaceProduct key={index} product={product} />
                ))}
              </div>
            )
          ) : (
            <>Hmm...idk</>
          )}
        </div>
      </div>
    </div>
  );
};

export default Marketplace;
