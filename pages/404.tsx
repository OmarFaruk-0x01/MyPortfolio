import Head from "next/head";
import Layout from "../components/Layout";

const _404Page = () => {
  return (
    <Layout pageHeader={"Nothing Found"} pageTitle={"404"}>
      <Head>
        <title>Not Found</title>
      </Head>
      <div
        style={{
          // marginTop: 50,
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <img style={{ width: 300 }} src="/imgs/404.svg" alt="404" />
        <p style={{ fontSize: 30, color: "#fff" }}>Nothing Found</p>
      </div>
    </Layout>
  );
};

export default _404Page;
