import axios from "../services/axios";

export const getReviewsBySellerId = async (sellerId) => {
  if (sellerId) {
    return (await axios.get(`get_user_ratings?user_id=${sellerId}`)).data
      .ratings;
  }
};

export const getRelatedProducts = async (category) => {
  if (category) {
    const productCategories = (await axios.get("/get_product_category_type"))
      .data;
    const productCategoryId = productCategories.find((productCateogry) => {
      if (productCateogry.name === category) {
        return productCateogry.id;
      }
    });
    if (productCategoryId) {
      return (await axios.get(`/list_products?category=${productCategoryId}`))
        .data.products;
    }
  }
  return null;
};
