import "../styles/ThumbGallery.css";
import useThumbGallery from "../hooks/useThumbGallery";

const ThumbGallery = () => {
  const { thumbs, handleChangeSelectedThumbIndex, selectedThmb, isSelected } =
    useThumbGallery();

  return (
    <div className="thumb-gallery">
      <div className="thumb-gallery-inner thumb-gallery-thumbs">
        {thumbs.map((src, index) => (
          <div
            key={index}
            onClick={() => handleChangeSelectedThumbIndex(index)}
            className={`thumb-gallery-thumb ${isSelected(index) && "selected"}`}
          >
            <img src={src} alt="" />
          </div>
        ))}
      </div>
      <div className="thumb-gallery-inner thumb-gallery-image">
        <img src={selectedThmb} alt="" />
      </div>
    </div>
  );
};

export default ThumbGallery;
