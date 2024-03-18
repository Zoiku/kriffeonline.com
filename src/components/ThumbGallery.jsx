import "../styles/ThumbGallery.css";
import useThumbGallery from "../hooks/useThumbGallery";
import useScreen from "../hooks/useScreen";

const ThumbGallery = ({ imageSrcs }) => {
  const { isDesktop } = useScreen();
  const { handleChangeSelectedThumbIndex, selectedThmb, isSelected } =
    useThumbGallery(imageSrcs);

  return (
    <div className="thumb-gallery-sticky">
      {isDesktop ? (
        <div className="thumb-gallery">
          <div className="thumb-gallery-inner thumb-gallery-thumbs">
            {imageSrcs.map((imageSrc, index) => (
              <div
                key={index}
                onClick={() => handleChangeSelectedThumbIndex(index)}
                className={`thumb-gallery-thumb ${
                  isSelected(index) && "selected"
                }`}
              >
                <img src={imageSrc} alt="" />
              </div>
            ))}
          </div>
          <div className="thumb-gallery-inner thumb-gallery-image">
            <img src={selectedThmb} alt="" />
          </div>
        </div>
      ) : (
        <div className="swiper"></div>
      )}
    </div>
  );
};

export default ThumbGallery;
