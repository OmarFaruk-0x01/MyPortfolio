import Head from "next/head";
import { useEffect } from "react";
import Layout from "../../components/Layout";
import CertificatesSection from "../../components/Sections/ResumePage/Certificates";
import QualificationsSection from "../../components/Sections/ResumePage/Qualifications";
import SkillSection from "../../components/Sections/ResumePage/Skills";
import useQuery from "../../Hooks/UseQuery";
import { AllCertificates, AllTechnologies } from "../../Queries";
import { useCertificateStore } from "../../Store";
const ResumePage = ({ certificates, backEndTech, frontEndTech }) => {
  return (
    <Layout pageTitle={"Resume"} pageHeader={"My Resume"}>
      <Head>
        <title>Resume | Omar Faruk</title>
      </Head>
      <QualificationsSection />
      <SkillSection frontEndTech={frontEndTech} backEndTech={backEndTech} />
      <CertificatesSection certificates={certificates} />
    </Layout>
  );
};

export default ResumePage;


export async function getServerSideProps(ctx) {
  const {
    data: { certificates },
    error,
  } = await useQuery(AllCertificates);
  const {
    data: { technologies },
  } = await useQuery(AllTechnologies, {filter: "count > 0"});
    
  const frontEndTech = technologies.nodes.filter(tech => tech.techAttr.techtype == 'front')
  const backEndTech = technologies.nodes.filter(tech => tech.techAttr.techtype == 'back')
  return {
    props: {
      certificates: certificates.nodes.map((cert) => ({
        featuredImage: cert.featuredImage.node.mediaItemUrl,
        ...cert.certificate,
      })),
      frontEndTech,
      backEndTech
    },
  };
}