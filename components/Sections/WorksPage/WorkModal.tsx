import React, { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import Modal from "react-modal";
import WorkDetails from "../../ListItems/WorkDetails";
import useSWR from "swr";
import { useRouter } from "next/router";
import useQuery from "../../../Hooks/UseQuery";
import { GetWorkById } from "../../../Queries";

interface WorkModalTypes extends Modal.Props {}

const WorkModal: React.FC<WorkModalTypes> = (props) => {
  const router = useRouter();
  const [workData, setWorkData] = useState(null);
  useEffect(() => {
    if (router.query.workID)
      useQuery(GetWorkById, { ID: router.query.workID }).then(({ data }) => {
        setWorkData(data.work);
      });
  }, [router.query.workID]);

  return (
    <AnimatePresence>
      <Modal {...props}>
        <WorkDetails workData={workData} />
      </Modal>
    </AnimatePresence>
  );
};

export default WorkModal;
