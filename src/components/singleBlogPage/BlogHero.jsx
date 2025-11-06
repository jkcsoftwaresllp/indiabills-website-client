import React from "react";
import styles from "./styles/BlogHero.module.css";

const BlogHero = ({
    title = "Untitled Blog",
    author = "Joy Dhon",
    date,
    category = "General",
    readingTime = "5 min read",
    coverImage,
}) => {
    return (
        <section className={styles.blogHero}>
            {coverImage ? (
                <div className={styles.coverImageWrapper}>
                    <img src={coverImage} alt={title} className={styles.coverImage} />
                </div>
            ) : (
                <div className={styles.coverPlaceholder}>No Image Available</div>
            )}

            <div className={styles.contentWrapper}>
                <h1 className={styles.title}>{title || "Untitled Blog"}</h1>

                <div className={styles.metaInfo}>
                    <span>
                        By <span className={styles.author}>{author || "Joy Dhon"}</span>
                    </span>

                    {date && (
                        <>
                            <span className={styles.dot}>•</span>
                            <span>{new Date(date).toLocaleDateString() || "Unknown Date"}</span>
                        </>
                    )}

                    {category && (
                        <>
                            <span className={styles.dot}>•</span>
                            <span className={styles.category}>{category || "General"}</span>
                        </>
                    )}

                    {readingTime && (
                        <>
                            <span className={styles.dot}>•</span>
                            <span>{readingTime || "5 min read"}</span>
                        </>
                    )}
                </div>
            </div>
        </section>
    );
};

export default BlogHero;
