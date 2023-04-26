import Header from "@/components/header";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={"container-lg h-screen bg-white flex flex-col"}>
      <Header>
        <Component {...pageProps} />
      </Header>
    </div>
  );
}
