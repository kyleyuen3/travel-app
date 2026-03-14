import styles from "./browse.module.css";
import PostCard from "../components/PostCard";

export default function BrowsePage(){
    const posts = [
        {
            title: "Hong Kong Bar",
            city: "District",
            country: "Hong Kong",
            description: "Speakeasy Bar in Hong Kong with insane interior.",
            imageUrl: "/hongkongspeak.jpg"
        },
        {
            title: "Jiu Fen",
            city: "Jiu Fen",
            country: "Taiwan",
            description: "Small shopping district with food vendors and shops on a mountain.",
            imageUrl: "/jiufen.jpg"
        },
        {
            title: "Raohe Night Market",
            city: "Raohe",
            country: "Taiwan",
            description: "Night Markete with numerous food stalls of unique and cheap food",
            imageUrl: "/raohe.jpg"
        },
        {
            title: "Taipei 101",
            city: "Taipei",
            country: "Taiwan",
            description: "Tower in Taipei with nice views and cafe on the 86th floor",
            imageUrl: "/taipei101.jpg"
        },
        {
            title: "Elephant Peak",
            city: "Taipei",
            country: "Taiwan",
            description: "Peaceful hike with a bit of incline.",
            imageUrl: "/elephantpeak.jpg"
        }
    ];
    return (
        <main className={styles.container}>
            <h1 className={styles.title}>Explore Destinations</h1>
            <p className={styles.text}>Discover places shared by travelers around the world</p>
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