
import type { AppProps } from "next/app";
import "@rainbow-me/rainbowkit/styles.css";
import NextNProgress from "nextjs-progressbar";
import { Toaster } from "react-hot-toast";


import { Footer } from "~~/components/Footer";
import { Header } from "~~/components/Header";



import "~~/styles/globals.css";
import { UserProvider } from '@auth0/nextjs-auth0/client';
const ScaffoldEthApp = ({ Component, pageProps }: AppProps) => {



  return (

      <UserProvider>
     <NextNProgress />


        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="relative flex flex-col flex-1">
            <Component {...pageProps} />
          </main>
          <Footer />
        </div>
        <Toaster />

      </UserProvider>

  );
};

export default ScaffoldEthApp;
