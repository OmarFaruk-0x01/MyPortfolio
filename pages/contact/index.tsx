import Head from "next/head";
import Layout from "../../components/Layout";
import ContactFormSection from "../../components/Sections/ContactPage/ContactForm";
import MapBox from "../../components/Sections/ContactPage/MapBox";

const ContactPage = () => {
  return (
    <Layout pageTitle={"Contact"} pageHeader={"\n"}>
      <Head>
        <title>Contact | Omar Faruk</title>
      </Head>
      <MapBox />
      <ContactFormSection />
    </Layout>
  );
};

export default ContactPage;
