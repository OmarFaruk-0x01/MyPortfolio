import React, { useState } from "react";

import { motion } from "framer-motion";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { WorkImageTypes } from "../../../types/Works";
import { ModalImage } from "../../ListItems/ModalImage"; 
const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 1,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};
const ImagePreview = ({ images, workTitle, thumb }) => {
    const [previewImage, setPreviewImage] = useState(null); 
    
  function renderImages() {
    return [thumb].concat(images).map((img) => (
      <div key={img.mediaItemUrl} className="imagePreview--imageCon">
          <img onClick={() => {setPreviewImage(img.mediaItemUrl)}} key={img.mediaItemUrl} src={`${img.mediaItemUrl}`} alt={img.altText} />
      </div>
    ));
  }

  return (
    <motion.div
      className="imagePreview"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <Carousel
        minimumTouchDrag={23}
        renderButtonGroupOutside={true}
        className="imageSliderCon"
        responsive={responsive}
        ssr={true}
        arrows={!previewImage}
      >
        {renderImages()}
      </Carousel>
      <ModalImage
        image_src={[thumb].concat(images)}
        setImagePrev={setPreviewImage}
        isOpen={!!previewImage}
      />
    </motion.div>
  );
};

export default ImagePreview;
