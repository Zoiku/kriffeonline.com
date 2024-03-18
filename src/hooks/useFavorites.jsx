import { useMutation, useQueryClient } from "react-query";
import axios from "../services/axios";
import useAlert from "./useAlert";

export const getFavorites = async (isLogged) => {
  if (isLogged) {
    return (await axios.get("/current_user_favorites")).data.favorites;
  } else {
    return null;
  }
};

const toggleFavoriteProduct = async (productNo, isFavorited) => {
  if (isFavorited) {
    return await axios.delete(`/remove_from_favorite?product_id=${productNo}`, {
      product_id: productNo,
    });
  } else {
    return axios.post(`/add_to_favorites`, { product_id: productNo });
  }
};

const useFavorites = () => {
  const queryClient = useQueryClient();
  const { handleOpenFailAlert } = useAlert();
  const mutateFavorites = useMutation({
    mutationFn: toggleFavoriteProduct,
    onMutate: ({ productNo, isFavorited }) => {
      // cancelling new fetches that may overwrite optimistic update
      queryClient.cancelQueries({ queryKey: ["products"] });
      // snapshot of the previous marketplace values
      const previousMarketplaceProducts = queryClient.getQueryData([
        ["products"],
      ]);
      // optimistic update the old marketplace product with new product and its updated state
      queryClient.setQueryData(["products"], (prevMarketplaceProducts) =>
        prevMarketplaceProducts.map((product) => {
          if (product.product_no === productNo) {
            return {
              ...product,
              is_saved: !isFavorited,
              saves: isFavorited ? product.saves - 1 : product.saves + 1,
            };
          } else {
            return product;
          }
        })
      );
      // object context of previous state to use when optimistic update fails
      return { previousMarketplaceProducts };
    },
    onError: (_err, _variables, context) => {
      // rolling back to previous state using the previouse products context
      queryClient.setQueryData(
        ["products"],
        context.previousMarketplaceProducts
      );
    },
    onSettled: () => {
      // refetching query
      queryClient.invalidateQueries(["products"], { exact: true });
    },
  });

  const handletoggleFavoriteProduct = async (productNo, isFavorited) => {
    try {
      await mutateFavorites.mutateAsync({ productNo, isFavorited });
    } catch (error) {
      handleOpenFailAlert(error.message);
    }
  };

  return {
    handletoggleFavoriteProduct,
  };
};

export default useFavorites;
