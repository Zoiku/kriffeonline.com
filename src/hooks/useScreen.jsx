import useMediaQuery from "@mui/material/useMediaQuery";

const useScreen = () => {
  const isDesktop = useMediaQuery("(min-width: 1100px)");
  return { isDesktop };
};

export default useScreen;
