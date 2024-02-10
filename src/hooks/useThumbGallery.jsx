import { useState } from "react";
import image from "../assets/ipad.jpg";
import thumb1 from "../assets/ipad1.jpg";
import thumb2 from "../assets/ipad2.jpg";
import thumb3 from "../assets/ipad3.jpg";
import thumb4 from "../assets/ipad4.jpg";

const useThumbGallery = () => {
  const thumbs = [image, thumb1, thumb2, thumb3, thumb4];
  const [selectedThumbIndex, setSelectedThumbIndex] = useState(0);
  const selectedThmb = thumbs[selectedThumbIndex];
  const handleChangeSelectedThumbIndex = (index) => {
    setSelectedThumbIndex(index);
  };
  const isSelected = (index) => index === selectedThumbIndex;

  return { thumbs, selectedThmb, isSelected, handleChangeSelectedThumbIndex };
};

export default useThumbGallery;
