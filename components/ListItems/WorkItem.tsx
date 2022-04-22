import React, { useEffect, useState } from "react";
import Link from "next/link";
import { WorkDataItem } from "../../types/Works";
import { AnimatePresence, motion, Variant, Variants } from "framer-motion";
import Icon from 'react-icons/ai';
const veriants: Variants = {
  hidden: { opacity: 0 , scale: 0.9},
  visible: {
    opacity: 1,
   scale: 1,
  },
};

const WorkItem: React.FC<{
  index: number;
  activeValue: string;
  item
}> = ({ index, item, activeValue }) => {
 
  
  
  return (
    <motion.figure
      key={item.id}
      transition={{ delay: 0.05 * index }}
      variants={veriants}
      initial={"hidden"}
      animate={"visible"}
      className={`works-list__item`}
    >
      <div className="title">{item.title}</div>
      {/* <a href={item.attactmentUrl} target="_blank"> */}

      <Link href={"/works/?workID=" + item.id} as={`/works/${item.id}`}>
        <a>
          <img src={item.featuredImage.node.mediaItemUrl} alt="Works" />
          <div className="details">
            <div>
              <span>{item.cetagories.nodes[0].name}</span>
              {/* <span>
                {item.isOpen ? (
                  <a href={item.openSourceURL}>Open Source</a>
                ) : (
                  "Private"
                )}
              </span> */}
            </div>
            <span>
              <i className={item.cetagories.nodes[0].cetaAttr.icon}></i>
            </span>
          </div>
        </a>
      </Link>
    </motion.figure>
  );
};
export default WorkItem;
