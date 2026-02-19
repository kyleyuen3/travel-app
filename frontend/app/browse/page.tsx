import styles from "./browse.module.css";
import PostCard from "../components/PostCard";

export default function BrowsePage(){
    const posts = [
        {
            title: "Best Ramen in Tokyo",
            city: "Tokyo",
            country: "Japan",
            description: "Small shop near Shinjuku — rich broth, fast line.",
            imageUrl: "https://images.unsplash.com/photo-1542528180-a1208c5169a5?auto=format&fit=crop&w=1200&q=80"
        },
        {
            title: "Sunset Beach Walk",
            city: "Oahu",
            country: "USA",
            description: "Peaceful walk with unreal sunsets.",
            imageUrl: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=1200&q=80"
        }
    ];
    return (
        <main className={styles.container}>
            <h1 className={styles.title}>Browse</h1>
            <p className={styles.text}>View and upload travel posts.</p>
            <div className={styles.grid}>
                {posts.map((post, index) => (
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
        </main>
    );
}