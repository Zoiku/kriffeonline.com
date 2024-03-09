import "../styles/Marketplace.css";
import useMarketplace from "../hooks/useMarketplace";
import {
  SelectCheckboxFilterValues,
  MarketplaceProduct,
  SelectFilterValue,
  MarketplaceProductSeleton,
  MarketFilterGroupCollapsable,
  MarketplaceNoProductsPage,
  MarketplaceErrorPage,
} from "../components/Marketplace/Index";
import CenteredSection from "../components/Centered";

const Marketplace = () => {
  const {
    products,
    isFetchingProducts,
    isFetchingProductsError,
    filters,
    handleSelectFilterValue,
    handleCheckboxFilterValues,
    isFilterValueSelected,
    isCheckedFilterValueSelected,
  } = useMarketplace();

  return (
    <div className="marketplace-page">
      <CenteredSection className="marketplace-display">
        <div className="marketplace-display-inner marketplace-display-filters">
          <div className="marketplace-display-filters-sticky">
            <div className="marketplace-display-filters-container-label page-title">Marketplace</div>
            <div className="marketplace-display-filters-options">
              {filters.map((filter, index) => (
                <MarketFilterGroupCollapsable key={index} title={filter.title}>
                  {filter.checkbox
                    ? filter.values.map((value, index) => (
                        <SelectCheckboxFilterValues
                          key={index}
                          value={value}
                          checked={isCheckedFilterValueSelected(
                            filter.name,
                            value
                          )}
                          onChange={(e) =>
                            handleCheckboxFilterValues(
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
                          selected={isFilterValueSelected(filter.name, value)}
                          onClick={() =>
                            handleSelectFilterValue(filter.name, value)
                          }
                        />
                      ))}
                </MarketFilterGroupCollapsable>
              ))}
            </div>
          </div>
        </div>
        <div className="marketplace-display-inner marketplace-display-products">
          {isFetchingProducts ? (
            <div className="marketplace-products">
              {Array.from(Array(20)).map((_, index) => (
                <MarketplaceProductSeleton key={index} />
              ))}
            </div>
          ) : isFetchingProductsError ? (
            <MarketplaceErrorPage />
          ) : products ? (
            products.length === 0 ? (
              <MarketplaceNoProductsPage />
            ) : (
              <div className="marketplace-products">
                {products.map((product, index) => (
                  <MarketplaceProduct key={index} product={product} />
                ))}
              </div>
            )
          ) : (
            <>Something went wrong...</>
          )}
        </div>
      </CenteredSection>
    </div>
  );
};

export default Marketplace;
