// import React from "react";
// import { AnimatePresence, motion } from "framer-motion";
// import Modal from "react-modal";
// import { BiLeftArrowAlt } from "react-icons/bi";

// interface ImageModalTypes extends Modal.Props {
//   image_src: string;
//   setImagePrev: (value: string) => void;
// }

// const ImageModal: React.FC<ImageModalTypes> = (props) => {
//   return (
//     <Modal
//       contentElement={({ children }) => (
//         <AnimatePresence>
//           <motion.div
//             initial={{
//               opacity: 0,
//             }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             className="ReactModal__Content ReactModal__Content--after-open "
//             tabIndex={-1}
//             role="dialog"
//             aria-modal="true"
//             style={{
//               position: "absolute",
//               inset: "40px",
//               background: "rgb(255,255,255)",
//               overflow: "hidden",
//               borderRadius: 20,
//               outline: "none",
//               padding: 20,
//               zIndex: 10,
//             }}
//           >
//             <div className="imageModalWrapper">
//               <img src={props.image_src} alt={"image"} />
//             </div>
//             <button
//               className="backArrow"
//               onClick={() => {
//                 props.setImagePrev(null);
//               }}
//             >
//               <BiLeftArrowAlt />
//             </button>
//           </motion.div>
//         </AnimatePresence>
//       )}
//       {...props}
//     />
//   );
// };

// export default ImageModal;
import React, { Component } from "react";
import Lightbox from "react-image-lightbox";

const image_src = [
  "//placekitten.com/1500/500",
  "//placekitten.com/4000/3000",
  "//placekitten.com/800/1200",
  "//placekitten.com/1500/1500",
];

export class ModalImage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      photoIndex: 0,
    };
  }

  render() {
    const { photoIndex } = this.state;
    const { isOpen, setImagePrev, image_src } = this.props;

    return (
      <div>
        {isOpen && (
          <Lightbox
            mainSrc={image_src[photoIndex].mediaItemUrl}
            nextSrc={image_src[(photoIndex + 1) % image_src.length].mediaItemUrl}
            prevSrc={image_src[(photoIndex + image_src.length - 1) % image_src.length].mediaItemUrl}
            onCloseRequest={() => setImagePrev(null)}
            onMovePrevRequest={() =>
              this.setState({
                photoIndex: (photoIndex + image_src.length - 1) % image_src.length,
              })
            }
            onMoveNextRequest={() =>
              this.setState({
                photoIndex: (photoIndex + 1) % image_src.length,
              })
            }
          />
        )}
      </div>
    );
  }
}

