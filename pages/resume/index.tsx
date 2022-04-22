import Head from "next/head";
import Layout from "../../components/Layout";
import CertificatesSection from "../../components/Sections/ResumePage/Certificates";
import QualificationsSection from "../../components/Sections/ResumePage/Qualifications";
import SkillSection from "../../components/Sections/ResumePage/Skills";
const ResumePage = () => {
  return (
    <Layout pageTitle={"Resume"} pageHeader={"My Resume"}>
      <Head>
        <title>Resume | Omar Faruk</title>
      </Head>
      <QualificationsSection />
      <CertificatesSection />
      {/* <SkillSection /> */}
    </Layout>
  );
};

export default ResumePage;
