import "../styles/globals.css";
import type { AppProps } from "next/app";
import FacebookProvider from "../context/Facebook/FacebookProvider";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <FacebookProvider>
        <Component {...pageProps} />
      </FacebookProvider>
    </>
  );
}

export default MyApp;
