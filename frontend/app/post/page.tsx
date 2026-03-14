import styles from "./post.module.css";

export default function PostPage(){
    const isLoggedIn = false;

    if (!isLoggedIn){
        return (
            <main className={styles.container}>
                <h1 className={styles.title}>Create a Travel Post</h1>
                <p>Share a place you visited.</p>

                <form className={styles.form}>

                    <div className={styles.field}>
                        <label htmlFor="title">Title</label>
                        <input id="title" type="text" className={styles.input} />
                    </div>

                    <div className={styles.field}>
                        <label htmlFor="city">City</label>
                        <input id="city" type="text" className={styles.input} />
                    </div>

                    <div className={styles.field}>
                        <label htmlFor="country">Country</label>
                        <input id="country" type="text" className={styles.input} />
                    </div>

                    <div className={styles.field}>
                        <label htmlFor="description">Description</label>
                        <textarea id="description" className={styles.textarea}/>
                    </div>

                    <div className={styles.field}>
                        <label htmlFor="imageUrl">Image URL</label>
                        <input id="imageUrl" type="text" className={styles.input} />
                    </div>
                    
                    <button type="submit" className={styles.button}> Create Post </button>
                </form>
            </main>
        );
    }

    
}