import Head from "next/head";
import Layout from "../../components/Layout";
import BlogListSection from "../../components/Sections/BlogPage/BlogList";

const Blogs = () => {
  return (
    <Layout pageHeader={"My Blogs"} pageTitle={"Blogs"}>
      <Head>
        <title>Blogs | Omar Faruk</title>
      </Head>
      <BlogListSection />
      <div className="all-btn">
        <a href="#">See All Posts</a>
      </div>
    </Layout>
  );
};

export default Blogs;
