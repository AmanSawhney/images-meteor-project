//Create our image list component
// Import React
import React from 'react';
import ImageDetail from './image_detail';


// Create our component
const ImageList = () => {
  return (
    <ul>
      <li>
        <ImageDetail />
      </li>
    </ul>
  );
};


// Export our component
export default ImageList;
