import "../styles/globals.css";
import type { AppProps } from "next/app";
import { SessionProvider } from "next-auth/react";
import { ApolloProvider } from "@apollo/client";
import client from "../apollo-client";
import Header from "../components/Header";
import { Toaster } from "react-hot-toast";
import { createBrowserSupabaseClient } from "@supabase/auth-helpers-nextjs";
import { SessionContextProvider, Session } from "@supabase/auth-helpers-react";
import { useState } from "react";

function MyApp({
  Component,
  pageProps,
}: AppProps<{
  initialSession: Session;
}>) {
  // client.clearStore();
  const [supabase] = useState(() => createBrowserSupabaseClient());
  return (
    <ApolloProvider client={client}>
        <SessionContextProvider
          supabaseClient={supabase}
          initialSession={pageProps.initialSession}
        >
          <Toaster />
          <div className="h-screen overflow-y-scroll bg-slate-200">
            <Header />
            <Component {...pageProps} />
          </div>
        </SessionContextProvider>
    </ApolloProvider>
  );
}

export default MyApp;
