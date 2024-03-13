import { useQuery, useMutation } from "react-query";
import useAuth from "./useAuth";
import axios from "../services/axios";

const getFavorites = async (isLogged) => {
  if(isLogged) {
    return (await axios.get("/current_user_favorites")).data;
  }
  return 0;
};

const addProductToFavorites = async (productNo) => {
  const response = await axios.post("/add_to_favorites", {
    product_id: productNo,
  });
  if (response.status !== 200) {
    throw new Error("Failed to add product to favorites");
  }
  return response;
};

const useFavorites = () => {
  const { isLogged } = useAuth();
  const { data, isLoading, isError } = useQuery("favorites", () => getFavorites(isLogged));
  const mutate = useMutation(addProductToFavorites);
  const handleAddProductToFavorites = async (productNo) => {
    try {
      await mutate.mutateAsync(productNo);
    } catch (error) {
      throw new Error(error);
    }
  };

  return {
    favoriteItems: data,
    isFetchingFavoriteItems: isLoading,
    isFetchingFavoriteItemsError: isError,
    handleAddProductToFavorites,
  };
};

export default useFavorites;
