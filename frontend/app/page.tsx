import styles from "./home.module.css";

export default function HomePage() {
  return (
    <main className={styles.container}>
      <h1 className={styles.title}>Travel App</h1>

      <p className={styles.subtitle}>Discover and share the best places around the world.</p>
    </main>
  );
}