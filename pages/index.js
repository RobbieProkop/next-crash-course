import Head from "next/head"; // used for cutoms titles, meta, etc
import Image from "next/image";
import styles from "../styles/Layout.module.css";

export default function Home() {
  return (
    <div>
      <Head>
        <title>WebDev Next</title>
        <meta name="keywords" content="web development, programming, next" />
      </Head>
      <h1>Welcome to Next</h1>
    </div>
  );
}
