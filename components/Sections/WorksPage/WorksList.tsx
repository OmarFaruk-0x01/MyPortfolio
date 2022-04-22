import { useEffect, useRef } from "react";
import Link from "next/link";
import WorkItem from "../../ListItems/WorkItem";
import { WorkListProps } from "../../../types/Works";
import { AnimatePresence, motion } from "framer-motion";
const listItem = {
  hidden: { opacity: 0, scale: 0 },
  show: {
    opacity: 1,
    scale: 1,
  },
};
const WorkList = ({ data, activeValue }) => {

  
  if (data) {
    return (
      <AnimatePresence>
        <motion.div
          layout
        style={{ minHeight: 500 }}
        className="works-list"
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
        }}
      >
        {data.filter(item => (activeValue == 'All' || false) || item.cetagories.nodes[0].name == activeValue).map((item, i) => {
          return (
            <WorkItem
              index={i}
              key={item.id}
              activeValue={activeValue}
              item={item}
            />
          );
        })}
      </motion.div>
      </AnimatePresence>
    );
  }
};

export default WorkList;
