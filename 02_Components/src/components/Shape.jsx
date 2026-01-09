const Shape = ({ type, width = 100, height = 100, color }) => {
  const style = {
    width: width,
    height: height,
    backgroundColor: color,
    borderRadius: type === "circle" ? "50%" : "0",
  };

  return <div style={style}></div>;
};

export default Shape;
