import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <div className={styles.card}>
          <h1 className="text-3xl font-bold underline">Hello world!</h1>
        </div>
      </main>
    </div>
  );
}
