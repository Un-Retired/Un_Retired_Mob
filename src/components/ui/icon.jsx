import React from "react";

export const Icon = props => {
  const {name, alt, size} = props;

  const imagePath = `assets/icons/${name}.svg`;
  const imageSize = `w-[${size}px] h-[${size}px]`;

  return (
    <>
      <img
        src={imagePath}
        alt={alt}
        className={imageSize}
      />
    </>
  );
};

export const IconButton = props => {
  const {name, alt, size, onClick, className} = props;

  return (
    <button
      onClick={onClick}
      className={className}>
      <Icon
        name={name}
        alt={alt}
        size={size}
      />
    </button>
  );
};
