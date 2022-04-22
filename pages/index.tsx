import HomeSection from "../components/Sections/HomePage/Home";
import ServicesSection from "../components/Sections/HomePage/Services";
import Layout from "../components/Layout";
import Head from "next/head";

const Home = () => {
  
  
  return (
    <Layout>
      <Head>
        <title>Omar Faruk</title>
      </Head>
      <HomeSection />
      <ServicesSection />
      {/* <ClientsSection />
      <FunFactsSection />
      <PricingSection /> */}
    </Layout>
  );
};

export default Home;
