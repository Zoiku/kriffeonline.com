import { useState } from "react";
import { useMutation, useQueryClient } from "react-query";
import axios from "../services/axios";
import useAlert from "./useAlert";

const postReview = async ({ rating, review, sellerId }) => {
  return axios.post("/rate_user", {
    feedback_to: sellerId,
    feedback: review,
    rating,
    feedback_from: null,
  });
};

const usePostReview = (sellerId, handleClose) => {
  const queryClient = useQueryClient();
  const { handleOpenFailAlert, handleOpenSuccessAlert } = useAlert();
  const [rating, setRating] = useState(0);
  const handleRatingChange = (_e, newValue) => {
    setRating(newValue);
  };
  const [review, setReview] = useState();
  const handleReviewChange = (e) => {
    setReview(e.target.value);
  };
  const mutateReview = useMutation({
    mutationFn: postReview,
    onSettled: () => {
      // refetching query
      queryClient.invalidateQueries(["reviews", sellerId], { exact: true });
    },
  });
  const handlePostReview = async (e) => {
    e.preventDefault();
    try {
      await mutateReview.mutateAsync({ rating, review, sellerId });
      handleOpenSuccessAlert("Thanks for sharing your feedback!");
      setRating(0);
      setReview("");
      handleClose();
    } catch (error) {
      handleOpenFailAlert(error.message);
    }
  };

  return {
    rating,
    review,
    handleRatingChange,
    handleReviewChange,
    handlePostReview,
    isPosting: mutateReview.isLoading,
  };
};

export default usePostReview;
