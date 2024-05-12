import React from 'react';
import '../styles/style.css';

const ImageComponent = ({ alt }) => {
    return (
      <img src={require("./golf_cover.jpg")} alt={alt} className="header-image" />
    );
};

export default ImageComponent;