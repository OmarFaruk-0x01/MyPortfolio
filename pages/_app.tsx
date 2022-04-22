import type { AppProps } from "next/app";
import { useEffect, useState } from "react";
import "../styles/scss/main.scss";
import "react-image-lightbox/style.css";
import LoaderContext from "../Contexts/LoaderContext";
import Router from "next/router";
import NextNProgress from "nextjs-progressbar";

const MyApp = ({ Component, pageProps }: AppProps) => {
  const [isLoad, setIsLoad] = useState(false);
  return (
    <LoaderContext.Provider value={{ isLoad, setIsLoad }}>
      <NextNProgress options={{ showSpinner: false }} />
      <Component {...pageProps} />
    </LoaderContext.Provider>
  );
};
export default MyApp;
