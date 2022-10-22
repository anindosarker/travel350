import "../styles/globals.css";
import type { AppProps } from "next/app";
import Header from "../components/Header";
import { SessionProvider } from "next-auth/react";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div>
      <SessionProvider>
        <Header />
        <Component {...pageProps} />
      </SessionProvider>
    </div>
  );
}

export default MyApp;
