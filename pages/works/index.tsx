import Head from "next/head";
import { useRouter } from "next/router";
import { useState } from "react";
import Layout from "../../components/Layout";
import FilterButtonSection from "../../components/Sections/WorksPage/FilterButtons";
import WorkList from "../../components/Sections/WorksPage/WorksList";
import { WorkDataItem } from "../../types/Works";
import useSWR from "swr";
import Modal from 'react-modal';
import WorkModal from "../../components/Sections/WorksPage/WorkModal";
import useQuery from '../../Hooks/UseQuery';
import { AllCetagories, AllWorks } from '../../Queries/index';

Modal.setAppElement("#__next");

const allCetagories = ["All", "Web-Apps", "Android", "Web-Design", "Software"];
const fetcher = (url) => fetch(url).then((res) => res.json());
const WorksPage: React.FC<{ works, cetagories }> = ({ cetagories, works }) => {
  const router = useRouter();
  const [activeButton, setActiveButton] = useState("All");
  return (
    <Layout pageTitle={"Works"} pageHeader={"My Works"}>
      <Head>
        <title>Works | Omar Faruk</title>
      </Head>
      {cetagories && (
        <FilterButtonSection
          data={[{ name: "All" }].concat(cetagories)}
          activeButton={activeButton}
          onChange={setActiveButton}
        />
      )}

      {works && <WorkList data={works} activeValue={activeButton} />}

      {router.query.workID && <WorkModal isOpen={!!router.query.workID} />}
    </Layout>
  );
};

export default WorksPage;

export async function getServerSideProps() {
  const { data: {cetagories} } = await useQuery(AllCetagories);
  const { data: { works } } = await useQuery(AllWorks);
    
  if (cetagories && works) {
    
    return {
      props: {cetagories: cetagories.nodes, works: works.nodes },
    };
  }
  return {
    props: { cetagories: [], works: [] }
  };
}