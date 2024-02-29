const styleButton = (theme) => {
  const style = {
    onRest: {},
    onHover: {},
  };

  switch (theme) {
    case "theme0":
      return {
        onRest: {
          border: "1px solid",
          borderColor: "#c5c5c5",
          color: "black",
          backgroundColor: "white",
        },
        onHover: {
          border: "1px solid",
          backgroundColor: "white",
          borderColor: "black",
          color: "black",
        },
      };

    case "theme1":
      return {
        onRest: {
          backgroundColor: "#efefef",
          border: "1px solid",
          borderColor: "#efefef",
          color: "black",
        },
        onHover: {
          backgroundColor: "#efefef",
          borderColor: "#efefef",
          border: "1px solid #efefef",
        },
      };

    case "theme2":
      return {
        onRest: {
          backgroundColor: "#ffd814",
          color: "black",
        },
        onHover: {
          backgroundColor: "#ffd814",
        },
      };

    case "theme3":
      return {
        onRest: {
          backgroundColor: "black",
          color: "white",
        },
        onHover: {
          backgroundColor: "black",
          color: "white",
        },
      };

    default:
      return style;
  }
};

export default styleButton;
