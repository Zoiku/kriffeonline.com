import { useQuery } from "react-query";
import axios from "../services/axios";
import { useState } from "react";

const getFaqs = async () => {
  return (await axios.get("/faqs")).data.faqs.product;
};

const useFaqs = () => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["faqs"],
    queryFn: getFaqs,
  });
  const [selectedFaqIndex, setSeelctedFaqIndex] = useState(null);
  const handleChangeSelectedFaqIndex = (index) => {
    if (index === selectedFaqIndex) {
      setSeelctedFaqIndex(null);
    } else {
      setSeelctedFaqIndex(index);
    }
  };
  const isSelectedFaqIndex = (index) => selectedFaqIndex === index;

  return {
    faqs: data,
    isFetchingFaqs: isLoading,
    isFetchingFaqsError: isError,
    handleChangeSelectedFaqIndex,
    isSelectedFaqIndex,
  };
};

export default useFaqs;
