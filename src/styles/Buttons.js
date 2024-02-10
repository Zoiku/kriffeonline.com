const styleButton = (theme) => {
  const style = {
    onRest: {},
    onHover: {},
  };

  switch (theme) {
    case "theme0":
      return {
        onRest: {
          border: "1px solid #555",
          color: "black",
        },
        onHover: {
          border: "1px solid black",
        },
      };

    case "theme1":
      return {
        onRest: {
          backgroundColor: "#efefef",
          color: "black",
        },
        onHover: {
          backgroundColor: "#c5c5c5",
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
          backgroundColor: "#ffa41c",
          color: "black",
        },
        onHover: {
          backgroundColor: "#ffa41c",
        },
      };

    default:
      return style;
  }
};

export default styleButton;
