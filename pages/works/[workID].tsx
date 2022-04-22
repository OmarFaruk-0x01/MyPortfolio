import React, { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import ImagePreview from "../../components/Sections/WorkPage/ImagesPreview";

import { GetStaticPathsContext, GetStaticPropsContext } from "next";
import axios from "axios";
import { WorkDataItem } from "../../types/Works";
import WorkTitleHeader from "../../components/Sections/WorkPage/WorkTitleHeader";
import { useRouter } from "next/router";
import { BsDownload, BsCode, BsCompass } from "react-icons/bs";
const fadeVariant = {
  hidden: {
    opacity: 0,
  },
  visiable: {
    opacity: 1,
  },
};

import useSWR from "swr";
import Head from "next/head";
import WorkDetails from "../../components/ListItems/WorkDetails";
import useQuery from "../../Hooks/UseQuery";
import { CustomFieldsGQL, GetWorkById } from "../../Queries";

const WorkPage: React.FC<{ workData }> = ({ workData }) => {
  console.log(workData.content.trim() + 'WorkPage');
  
  return <WorkDetails workData={workData} />;
};

export default WorkPage;

export async function getStaticPaths(ctx: GetStaticPathsContext){
  const { data } = await useQuery(CustomFieldsGQL(`
  works{
    nodes{
      id
    }
  }
  `));
  const paths = data.works.nodes.map(node => `/works/${node.id}`)
  
  return {
    paths,
    fallback: false,
  }
  
}

export async function getStaticProps(ctx) {
  const { data: WorkData } = await useQuery(GetWorkById, {
    'ID': ctx.params.workID
  })
  return {
    props: { workData: WorkData.work },
  };
}