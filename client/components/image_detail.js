//Import React
import React from 'react';

const ImageDetail = (props) => {
  return (
    <li className="media list-group-item">
      <div className="media-left">
        <img src={props.image.link} />
      </div>
      <div className="media-body">
        <h3 className = "media-heading">
          Title: {props.image.title}
        </h3>
      </div>
    </li>
  );
};

export default ImageDetail;
