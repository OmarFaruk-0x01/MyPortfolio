import { motion } from "framer-motion";
import { useContext, ReactChild, ReactChildren } from "react";
import LoaderContext from "../Contexts/LoaderContext";
import Footer from "./Foorter";
import Header from "./Header";
type LayoutProps = {
  children?: ReactChildren | ReactChild | ReactChild[] | ReactChildren[];
  pageHeader?: String;
  pageTitle?: String;
};

const Layout = ({ children, pageHeader, pageTitle }: LayoutProps) => {
  const { isLoad } = useContext(LoaderContext);
  function renderPreLoader() {
    if (isLoad) {
      return (
        <div className="preloader">
          <span></span>
        </div>
      );
    } else {
      <></>;
    }
  }
  function renderPageCon() {
    if (pageHeader && pageTitle) {
      return (
        <div className="page" style={{ marginTop: 80 }}>
          <div className="page-header">
            <motion.h2
              transition={{ delay: 0.1 }}
              initial={{ opacity: 0, x: -200 }}
              animate={{ opacity: 1, x: 0 }}
            >
              {pageTitle}
            </motion.h2>
            <motion.span
              transition={{ delay: 0.3 }}
              initial={{ opacity: 0, x: 200 }}
              animate={{ opacity: 1, x: 0 }}
            >
              {pageHeader}
            </motion.span>
          </div>
          <div className="page-con">{children}</div>
        </div>
      );
    }
    return <div className="page-con">{children}</div>;
  }
  return (
    <>
      {renderPreLoader()}
      {!isLoad && (
        <>
          <div className="overlay"></div>
          <Header />
          {renderPageCon()}
          <Footer />
        </>
      )}
    </>
  );
};

export default Layout;
