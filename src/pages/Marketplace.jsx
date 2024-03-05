import "../styles/Marketplace.css";
import useMarketplace from "../hooks/useMarketplace";
import {
  SelectFilterValues,
  MarketplaceProduct,
  SelectFilterValue,
  MarketplaceProductSeleton,
  MarketFilterGroupCollapsable,
} from "../components/Marketplace/Index";
import CenteredSection from "../components/Centered";

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
  } = useMarketplace();

  return (
    <div className="marketplace-page">
      <CenteredSection className="marketplace-display">
        <div className="marketplace-display-inner marketplace-display-filters">
          <div className="marketplace-display-filters-sticky">
            {filters.map((filter, index) => (
              <MarketFilterGroupCollapsable key={index} title={filter.title}>
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
              </MarketFilterGroupCollapsable>
            ))}
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
            <div className="marketplace-error-no-products">
              Something went wrong
            </div>
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
      </CenteredSection>
    </div>
  );
};

export default Marketplace;
