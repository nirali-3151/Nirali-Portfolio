import React from "react";

const Image = ({
  image,
  width,
  height,
  objectFit,
  borderRadius,
  background,
  imageWrapperStyle,
  alt,
  className,
  onClick
}) => {

  return (
    <div style={imageWrapperStyle} className={className} onClick={onClick}>
      <img
        style={{ backgroundColor: background, borderRadius: borderRadius, objectFit: objectFit || "cover" }}
        height={height || "100%"}
        width={width || "100%"}
        src={image}
        alt={alt || "image"}
      />
    </div>
  );
};

export default Image;