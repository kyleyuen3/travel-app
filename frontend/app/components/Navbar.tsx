import Link from "next/link"
import styles from "./Navbar.module.css";

export default function Navbar(){
    return(
        <nav className={styles.nav}>
            <Link className={styles.link} href="/">Home</Link>
            <Link className={styles.link} href="/browse">Browse</Link>
            <Link className={styles.link} href="/post">Post</Link>
            <Link className={styles.link} href="/profile">Profile</Link>
        </nav>
    );
}

