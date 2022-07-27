import "../styles/globals.css";
import type { AppProps } from "next/app";
import Router, { useRouter } from "next/router";
import { ContentProvider, useContent } from "../src/contexts/content.context";
import { useEffect } from "react";
import { ThemeProvider } from "next-themes";

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  // useEffect(() => {
  //   const handleRouteChangeStart = (url: string) => {
  //     setPageExit(true);
  //     setPageLoaded(false);
  //   };
  //   const handleRouteChangeComplete = (url: string) => {
  //     console.log("route change complete");
  //     setPageExit(false);
  //     setPageLoaded(true);
  //   };
  //   router.events.on("routeChangeStart", handleRouteChangeStart);
  //   router.events.on("routeChangeComplete", handleRouteChangeComplete);
  // }, []);

  // useEffect(() => {
  //   setPageExit(false);
  //   setPageLoaded(true);
  // }, []);

  return (
    <ThemeProvider>
      <ContentProvider>
        <Component {...pageProps} />
      </ContentProvider>
    </ThemeProvider>
  );
}

export default MyApp;
