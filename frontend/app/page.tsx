import Link from "next/link";
import styles from "./home.module.css";
import PostCard from "./components/PostCard";

export default function HomePage() {
  const featured = [
    {
      title: "Hong Kong Bar",
      city: "District",
      country: "Hong Kong",
      description: "Speakeasy bar in Hong Kong with insane interior.",
      imageUrl: "/hongkongspeak.jpg",
    },
    {
      title: "Jiu Fen",
      city: "Jiu Fen",
      country: "Taiwan",
      description: "Small shopping district with food vendors and shops on a mountain.",
      imageUrl: "/jiufen.jpg",
    },
    {
      title: "Raohe Night Market",
      city: "Raohe",
      country: "Taiwan",
      description: "Night market with numerous food stalls of unique and cheap food.",
      imageUrl: "/raohe.jpg",
    },
    {
      title: "Taipei 101",
      city: "Taipei",
      country: "Taiwan",
      description: "Tower in Taipei with nice views and cafe on the 86th floor.",
      imageUrl: "/taipei101.jpg",
    },
  ];

  return (
    <main className={styles.container}>
      <section className={styles.hero}>
        <div className={styles.heroText}>
          <h1 className={styles.title}>Waypoint</h1>
          <p className={styles.subtitle}>
            Discover and share the best places around the world.
          </p>

          <div className={styles.actions}>
            <Link className={styles.primaryBtn} href="/browse">
              Browse Posts
            </Link>
            <Link className={styles.secondaryBtn} href="/post">
              Create a Post
            </Link>
          </div>

          <p className={styles.note}>
            Tip: Posting requires login (coming soon). For now, browse featured spots.
          </p>
        </div>

        <div className={styles.heroCard}>
          <div className={styles.statRow}>
            <div className={styles.stat}>
              <div className={styles.statNumber}>5</div>
              <div className={styles.statLabel}>Featured Posts</div>
            </div>
            <div className={styles.stat}>
              <div className={styles.statNumber}>2</div>
              <div className={styles.statLabel}>Countries</div>
            </div>
            <div className={styles.stat}>
              <div className={styles.statNumber}>1</div>
              <div className={styles.statLabel}>App MVP</div>
            </div>
          </div>

          <div className={styles.miniPreview}>
            <div className={styles.miniTitle}>Featured right now</div>
            <div className={styles.miniGrid}>
              {featured.slice(0, 2).map((p, i) => (
                <div key={i} className={styles.miniItem}>
                  <img className={styles.miniImg} src={p.imageUrl} alt={p.title} />
                  <div className={styles.miniText}>
                    <div className={styles.miniName}>{p.title}</div>
                    <div className={styles.miniMeta}>
                      {p.city}, {p.country}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Featured Posts</h2>
          <Link className={styles.sectionLink} href="/browse">
            View all →
          </Link>
        </div>

        <div className={styles.grid}>
          {featured.map((post, index) => (
            <PostCard
              key={index}
              title={post.title}
              city={post.city}
              country={post.country}
              description={post.description}
              imageUrl={post.imageUrl}
            />
          ))}
        </div>
      </section>
    </main>
  );
}