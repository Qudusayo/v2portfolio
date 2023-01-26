import Head from "next/head";
import styles from "@/styles/Home.module.scss";

export default function Home() {
  return (
    <>
      <Head>
        <title>Qudusayo - Home</title>
        <meta name="description" content="Hello from Qudusayo" />
      </Head>
      <main className={styles.main}>
        <div className={styles.mainInfo}>
          <div>
            <span className={styles.hi}>Hi all. I am</span>
            <h1>Qudusayo</h1>
            <h2>&gt; Front-end developer</h2>
          </div>

          <div>
            <span className={styles.comment}>
              {`//`} find my profile on Github:
            </span>
            <p className={styles.githubLink}>
              <span>const</span> <span>githubLink</span> ={" "}
              <span>
                &quot;
                <a
                  target="_blank"
                  href="https://github.com/qudusayo"
                  rel="noreferrer"
                >
                  https://github.com/qudusayo
                </a>
                &quot;
              </span>
            </p>
          </div>
        </div>
      </main>
    </>
  );
}
