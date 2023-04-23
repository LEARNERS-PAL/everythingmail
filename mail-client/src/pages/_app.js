import "@/styles/globals.css";
import "react-toastify/dist/ReactToastify.css";

import { ToastContainer } from "react-toastify";

export default function App({ Component, pageProps }) {
  return (
    <>
      <ToastContainer autoClose={3000} hideProgressBar />
      <Component {...pageProps} />
    </>
  );
}
