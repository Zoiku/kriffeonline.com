import axios from "../services/axios";
import { useQuery } from "react-query";
import { optionQueries } from "../utils/filterOptionQueries";

const getFilterOptions = async () => {
  let filterOptions = await Promise.all(
    optionQueries.map((optionQuery) => axios.get(`/${optionQuery}`))
  );

  return filterOptions.map((filterOption) => filterOption.data);
};

const useFilterOptions = () => {
  const { data } = useQuery("filterOptions", getFilterOptions);
  console.log(data);
};

export default useFilterOptions;
