import type { AppProps } from "next/app";
import "../globals.css";
import NavBar from "@/movie/components/NavBar";
import Footer from "@/movie/components/Footer";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <NavBar />
      <div className="container mx-auto">
        <Component {...pageProps} />
      </div>
      <Footer />
    </>
  );
}
