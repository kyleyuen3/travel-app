import styles from "./post.module.css";

export default function PostPage(){
    const isLoggedIn = false;

    if (!isLoggedIn){
        return (
            <main>
                <h1 className={styles.title}>Post
                    <p>You must login to create a post</p>
                </h1>
            </main>
        );
    }

    
}