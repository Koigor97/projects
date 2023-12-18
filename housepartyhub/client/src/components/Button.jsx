/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
export default function Button({
  text = "Sign up",
  bgColor = "black",
  fontCasing = "uppercase",
  textColor = "white",
  borderRadius = "5px",
  onHover = "#F4F4F2",
  width = "",
  padding = "5px 10px",
  styleClasses = "",
  Isdisabled,
  handleFunc,
}) {
  const btnstyles = {
    backgroundColor: bgColor,
    color: textColor,
    textTransform: fontCasing,
    borderRadius: borderRadius,
    hover: onHover,
    width,
    padding,
  };

  return (
    <button disabled={Isdisabled} style={btnstyles} className={styleClasses}>
      {text}
    </button>
  );
}
