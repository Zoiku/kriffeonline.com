import "../styles/PostReview.css";
import ResponsiveModal from "./ResponsiveModal";
import useModal from "../hooks/useModal";
import Input from "./Input";
import Button from "./Button";
import Rating from "@mui/material/Rating";
import usePostReview from "../hooks/usePostReview";

const PostReview = ({ sellerName, sellerId }) => {
  const { open, handleOpen, handleClose } = useModal();

  const {
    rating,
    review,
    isPosting,
    handleRatingChange,
    handleReviewChange,
    handlePostReview,
  } = usePostReview(sellerId, handleClose);

  return (
    <>
      <ResponsiveModal
        open={open}
        handleClose={handleClose}
        handleOpen={handleOpen}
        header={"Rate and Review"}
      >
        <form onSubmit={handlePostReview} className="review-form">
          <div className="review-form-head">
            <div className="review-form-product-img"></div>
            <div className="review-form-head-stats">
              <div>
                <Rating
                  name="rating"
                  value={rating}
                  onChange={handleRatingChange}
                  required
                />
              </div>
              <div>{sellerName}</div>
            </div>
          </div>
          <div className="review-form-input-container">
            <div>
              <Input
                value={review}
                onChange={handleReviewChange}
                required
                label={"Leave a review"}
                multiline
                rows={5}
              />
            </div>
          </div>
          <div>
            <Button
              loading={isPosting}
              type={"submit"}
              fullWidth
              label={"Submit Review"}
            />
          </div>
        </form>
      </ResponsiveModal>

      <span>
        <Button label={"Leave a review"} size={"small"} onClick={handleOpen} />
      </span>
    </>
  );
};

export default PostReview;
