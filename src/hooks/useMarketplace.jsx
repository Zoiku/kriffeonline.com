import { useQuery } from "react-query";
import filters from "../utils/marketplacefilters";
import axios from "../services/axios";
import { JsonParam, useQueryParam } from "use-query-params";
import useMenu from "./useMenu";

const getProducts = async () => {
  return (await axios.get("/list_products")).data.products.data;
};

const useMarketplace = () => {
  const sortMenu = useMenu();

  const { data, isFetching, isError } = useQuery("products", getProducts);

  const [filterSelection, setFilterSelection] = useQueryParam(
    "filter",
    JsonParam
  );

  const handleSelectFilterValue = (name, value) => {
    setFilterSelection({
      ...filterSelection,
      [name]: value,
    });
  };

  const isSelectedFilterValue = (name, value) => {
    return filterSelection && filterSelection[name] === value;
  };

  const handleSelectFilterValues = (name, value, checked) => {
    if (filterSelection === undefined) {
      setFilterSelection({
        [name]: [value],
      });
    } else {
      if (checked) {
        if (filterSelection[name]) {
          setFilterSelection({
            ...filterSelection,
            [name]: [...filterSelection[name], value],
          });
        } else {
          setFilterSelection({
            ...filterSelection,
            [name]: [value],
          });
        }
      } else {
      }
    }
  };

  const isCheckedFilterValue = (name, value) => {
    return (
      filterSelection &&
      filterSelection[name] &&
      filterSelection[name].includes(value)
    );
  };

  return {
    products: data,
    isFetchingProducts: isFetching,
    isFetchingProductsError: isError,
    filters,
    handleSelectFilterValue,
    handleSelectFilterValues,
    isSelectedFilterValue,
    isCheckedFilterValue,
    sortMenu,
  };
};

export default useMarketplace;
