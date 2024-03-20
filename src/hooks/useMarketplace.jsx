import filters from "../utils/marketplacefilters";
import axios from "../services/axios";
import { JsonParam, useQueryParam } from "use-query-params";
import useMenu from "./useMenu";

export const getProducts = async () => {
  return (await axios.get("/list_products")).data.products.data;
};

const useMarketplace = () => {
  const sortMenu = useMenu();

  const [filterSelection, updateFilterSelection] = useQueryParam(
    "filter",
    JsonParam
  );

  const handleSelectFilterValue = (name, value) => {
    if (!filterSelection || filterSelection.length === 0) {
      updateFilterSelection([{ [name]: value }]);
      return;
    }

    const existingIndex = filterSelection.findIndex((filter) =>
      Object.keys(filter).includes(name)
    );

    if (
      existingIndex !== -1 &&
      filterSelection[existingIndex][name] === value
    ) {
      const updatedSelection = [...filterSelection];
      updatedSelection.splice(existingIndex, 1);
      if (updatedSelection.length === 0) {
        updateFilterSelection(undefined); // Remove filter from URL when the array becomes empty
      } else {
        updateFilterSelection(updatedSelection);
      }
      return;
    }

    updateFilterSelection([...filterSelection, { [name]: value }]);
  };

  const handleCheckboxFilterValues = (name, value, checked) => {
    if (!filterSelection || filterSelection.length === 0) {
      updateFilterSelection([{ [name]: checked ? [value] : [] }]);
      return;
    }

    const existingIndex = filterSelection.findIndex((filter) =>
      Object.keys(filter).includes(name)
    );

    if (!checked && existingIndex !== -1) {
      const updatedSelection = [...filterSelection];
      const filterValues = updatedSelection[existingIndex][name].filter(
        (item) => item !== value
      );
      if (filterValues.length === 0) {
        updatedSelection.splice(existingIndex, 1);
        if (updatedSelection.length === 0) {
          updateFilterSelection(undefined); // Remove filter from URL when the array becomes empty
        } else {
          updateFilterSelection(updatedSelection);
        }
      } else {
        updatedSelection[existingIndex][name] = filterValues;
        updateFilterSelection(updatedSelection);
      }
      return;
    }

    if (existingIndex !== -1) {
      const updatedSelection = [...filterSelection];
      if (checked) {
        updatedSelection[existingIndex][name] = [
          ...(updatedSelection[existingIndex][name] || []),
          value,
        ];
      }
      updateFilterSelection(updatedSelection);
      return;
    }

    updateFilterSelection([
      ...filterSelection,
      { [name]: checked ? [value] : [] },
    ]);
  };

  const isFilterValueSelected = (name, value) => {
    return (
      filterSelection &&
      filterSelection.some((filter) => filter[name] === value)
    );
  };

  const isCheckedFilterValueSelected = (name, value) => {
    return (
      filterSelection &&
      filterSelection.some((filter) => filter[name]?.includes(value))
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
