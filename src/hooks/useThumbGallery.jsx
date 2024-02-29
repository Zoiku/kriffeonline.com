import { useState } from "react";

const useThumbGallery = (thumbs) => {
  const [selectedThumbIndex, setSelectedThumbIndex] = useState(0);
  const selectedThmb = thumbs[selectedThumbIndex];
  const handleChangeSelectedThumbIndex = (index) => {
    setSelectedThumbIndex(index);
  };
  const isSelected = (index) => index === selectedThumbIndex;
  return { selectedThmb, isSelected, handleChangeSelectedThumbIndex };
};

export default useThumbGallery;
