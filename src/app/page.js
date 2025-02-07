import Image from "next/image";
import styles from "./page.module.css";
// pages/_app.js
import 'bootstrap/dist/css/bootstrap.min.css';

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default function Home() {
  return (
    <div >
      <h1>Hello</h1>
    </div>
  );
}
