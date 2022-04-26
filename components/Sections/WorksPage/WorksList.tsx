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
const WorkList = ({ data=[], activeValue }) => {
  if (data) {

    
  function renderWorks(){
    let filteredWork;
    if (activeValue === 'All'){
      filteredWork = [...data]
    }
    else{
      filteredWork = data.filter(item => (item.cetagories.nodes.includes(activeValue)))
    }
    
    return filteredWork.map((item,i) => (
      <WorkItem
        index={i}
        key={item.id}
        activeValue={activeValue}
        item={item}
        />
    ))
  }


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
        {renderWorks()}
      </motion.div>
      </AnimatePresence>
    );
  }
};

export default WorkList;
