import { motion } from "framer-motion";
import { useRouter } from "next/router";
import React from "react";
import { BiLeftArrowAlt } from "react-icons/bi";
const WorkTitleHeader: React.FC<{ headerText: string }> = ({ headerText }) => {
  const router = useRouter();
  function goBack() {
   router.replace('/works')
  }
  return (
    <div className="workTitleHeader">
      <motion.button
        transition={{ delay: 0.5 }}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        onClick={goBack}
        className="backAction"
      >
        <BiLeftArrowAlt color="inherit" />
      </motion.button>
      <motion.h2
        initial={{ opacity: 0, x: -400 }}
        animate={{ opacity: 1, x: 0 }}
      >
        {headerText}
      </motion.h2>
    </div>
  );
};

export default WorkTitleHeader;
