import axios from "../services/axios";
import { useQuery } from "react-query";

const getReviewsBySellerId = async (sellerId) => {
  return (await axios.get(`get_user_ratings?user_id=${2}`)).data.ratings;
};

const useReviews = (sellerId) => {
  const { data, isLoading, isError } = useQuery(["reviews", sellerId], () =>
    getReviewsBySellerId(sellerId)
  );

  return {
    reviews: data,
    isFetchingReviews: isLoading,
    isFetchingReviewsError: isError,
  };
};

export default useReviews;
