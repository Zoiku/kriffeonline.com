import { useState } from "react";

function ReadMore({ text, maxLength }) {
  const [isTruncated, setIsTruncated] = useState(text.length > maxLength);
  const toggleTruncate = () => {
    setIsTruncated(!isTruncated);
  };

  return (
    <div>
      {isTruncated ? (
        <>
          {text.slice(0, maxLength)}
          {text.length > maxLength && "... "}
          <span
            style={{ color: "blue", cursor: "pointer" }}
            onClick={toggleTruncate}
          >
            {" "}
            Read more
          </span>
        </>
      ) : (
        <>
          {text}
          {text.length > maxLength && (
            <span
              style={{ color: "blue", cursor: "pointer" }}
              onClick={toggleTruncate}
            >
              {" "}
              Read less
            </span>
          )}
        </>
      )}
    </div>
  );
}

export default ReadMore;
