import React from 'react';
import PropTypes from 'prop-types';

const ImageHelper = ({product}) => {
    const imageUrl = product ? product.image : "";
    return (
      <div className="rounded border border-success p-2">
         <img src={imageUrl}
              style={{maxHeight:'100%', maxWidth:'100%'}}
              className="mb-3 rounded"
              alt="Image"
         />
       </div>
    );
};

ImageHelper.propTypes = {};

export default ImageHelper;