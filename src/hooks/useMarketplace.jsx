import filters from "../utils/marketplacefilters";
import axios from "../services/axios";
import { JsonParam, useQueryParam } from "use-query-params";
import useMenu from "./useMenu";

export const getProducts = async () => {
  // return (await axios.get("/list_products")).data.products.data;
  return [
    {
      product_no: 1,
      price: 100,
      is_saved: false,
      name: "Offline Test",
      saves: 0,
      views: 0,
    },
    {
      product_no: 2,
      price: 100,
      is_saved: true,
      name: "Offline Test",
      saves: 1,
      views: 0,
    },
    {
      product_no: 3,
      price: 100,
      is_saved: false,
      name: "Offline Test",
      saves: 0,
      views: 0,
    },
    {
      product_no: 4,
      price: 100,
      is_saved: false,
      name: "Offline Test",
      saves: 0,
      views: 0,
    },
  ];
};

const useMarketplace = () => {
  const sortMenu = useMenu();
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
  const isFilterValueSelected = (name, value) => {
    return filterSelection && filterSelection[name] === value;
  };
  const handleCheckboxFilterValues = (name, value, checked) => {
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
  const isCheckedFilterValueSelected = (name, value) => {
    return (
      filterSelection &&
      filterSelection[name] &&
      filterSelection[name].includes(value)
    );
  };

  return {
    filters,
    handleSelectFilterValue,
    handleCheckboxFilterValues,
    isFilterValueSelected,
    isCheckedFilterValueSelected,
    sortMenu,
  };
};

export default useMarketplace;
