import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>

    <Head>
      <title>Ninja List | Home</title>
      <meta name="keywords" content="ninjas" />
    </Head>
      <div>
        <h1 className={styles.title}>HOME PAGE</h1>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore enim
          doloribus quas fugiat accusamus hic voluptate. Velit impedit tempore
          harum, ex reiciendis libero a laboriosam? Illo nihil quo eaque
          similique.
        </p>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore enim
          doloribus quas fugiat accusamus hic voluptate. Velit impedit tempore
          harum, ex reiciendis libero a laboriosam? Illo nihil quo eaque
          similique.
        </p>
        <Link href="/ninjas">
          <span className={styles.btn}>See Ninja Listing</span>
        </Link>
      </div>
    </>
  );
}
