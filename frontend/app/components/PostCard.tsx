import styles from "./PostCard.module.css";

type PostCardProps = {
  title: string;
  city: string;
  country: string;
  description: string;
  imageUrl: string;
};

export default function PostCard(props: PostCardProps) {
  return (
    <article className={styles.card}>
      <img src={props.imageUrl} alt={props.title} className={styles.image}
      />

      <div className={styles.body}>
        <h3 className={styles.title}> {props.title} </h3>

        <p className={styles.meta}> {props.city}, {props.country} </p>

        <p className={styles.description}> {props.description} </p>
      </div>
    </article>
  );
}