import "../styles/Marketplace.css";
import useMarketplace, { getProducts } from "../hooks/useMarketplace";
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
import { useQuery } from "react-query";
import useScreen from "../hooks/useScreen";
import Button from "../components/Button";
import Drawer from "../components/Drawer";
import useDrawer from "../hooks/useDrawer";
import TuneIcon from "@mui/icons-material/Tune";

const Marketplace = () => {
  const { anchor, handleClose, handleOpen, open } = useDrawer("bottom");
  const { isDesktop } = useScreen();
  const {
    filters,
    handleSelectFilterValue,
    handleCheckboxFilterValues,
    isFilterValueSelected,
    isCheckedFilterValueSelected,
  } = useMarketplace();
  const productsQuery = useQuery({
    queryKey: ["products"],
    queryFn: getProducts,
  });

  return (
    <div className="marketplace-page">
      <CenteredSection mobileWithPadding className={"marketplace-display"}>
        {isDesktop ? (
          <div className="marketplace-display-inner marketplace-display-filters">
            <div className="marketplace-display-filters-sticky">
              <div className="marketplace-display-filters-container-label page-title">
                Marketplace
              </div>
              <div className="marketplace-display-filters-options">
                {filters.map((filter, index) => (
                  <MarketFilterGroupCollapsable
                    key={index}
                    title={filter.title}
                  >
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
        ) : (
          <div>
            <Drawer
              handleOpen={handleOpen}
              handleClose={handleClose}
              open={open}
              anchor={anchor}
              header={"Marketplace Filters"}
            >
              <div className="marketplace-display-filters-options">
                {filters.map((filter, index) => (
                  <MarketFilterGroupCollapsable
                    key={index}
                    title={filter.title}
                  >
                    {filter.checkbox ? (
                      filter.values.map((value, index) => (
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
                    ) : (
                      <div className="marketplace-display-filters-options-chips">
                        {filter.values.map((value, index) => (
                          <SelectFilterValue
                            chipIcon
                            key={index}
                            value={value}
                            selected={isFilterValueSelected(filter.name, value)}
                            onClick={() =>
                              handleSelectFilterValue(filter.name, value)
                            }
                          />
                        ))}
                      </div>
                    )}
                  </MarketFilterGroupCollapsable>
                ))}
              </div>
            </Drawer>

            <div>
              <Button
                startIcon={<TuneIcon />}
                onClick={handleOpen}
                label={"Filters"}
              />
            </div>
          </div>
        )}

        <div className="marketplace-display-inner marketplace-display-products">
          {productsQuery.isLoading ? (
            <div className="marketplace-products">
              {Array.from(Array(18)).map((_, index) => (
                <MarketplaceProductSeleton key={index} />
              ))}
            </div>
          ) : productsQuery.isError ? (
            <MarketplaceErrorPage />
          ) : productsQuery.data ? (
            productsQuery.data.length === 0 ? (
              <MarketplaceNoProductsPage />
            ) : (
              <div className="marketplace-products">
                {productsQuery.data.map((product, index) => (
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
