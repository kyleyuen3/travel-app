import styles from "./browse.module.css";
import PostCard from "../components/PostCard";

export default function BrowsePage(){
    const posts = [
        {
            title: "Taiwan Night Life",
            city: "Taipei",
            country: "Taiwan",
            description: "Club in taiwan.",
            imageUrl: "https://images.unsplash.com/photo-1542528180-a1208c5169a5?auto=format&fit=crop&w=1200&q=80"
        },
        {
            title: "Jiu Fen",
            city: "Jiu Fen",
            country: "Taiwan",
            description: "Small shopping district with food vendors and shops on a mountain.",
            imageUrl: "https://images.unsplash.com/photo-1542528180-a1208c5169a5?auto=format&fit=crop&w=1200&q=80"
        },
        {
            title: "Raohe Night Market",
            city: "Raohe",
            country: "Taiwan",
            description: "Night Markete with numerous food stalls of unique and cheap food",
            imageUrl: "https://images.unsplash.com/photo-1542528180-a1208c5169a5?auto=format&fit=crop&w=1200&q=80"
        },
        {
            title: "Taipei 101",
            city: "Taipei",
            country: "Taiwan",
            description: "Tower in Taipei with nice views and cafe on the 86th floor",
            imageUrl: "https://images.unsplash.com/photo-1542528180-a1208c5169a5?auto=format&fit=crop&w=1200&q=80"
        },
        {
            title: "Elephant Peak",
            city: "Taipei",
            country: "Taiwan",
            description: "Peaceful hike with a bit of incline.",
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