import React, { useEffect, useState } from "react";
import styles from "./styles/BlogHero.module.css";
import exImage from "../../assets/images/headerImg.jpg";
import { Calendar, Clock, User } from "lucide-react"; // icons

const BlogHero = ({
    title = "Untitled Blog",
    author = "Joy Dhon",
    date,
    category = "General",
    readingTime = "5 min read",
    coverImage = exImage,
}) => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const timeout = setTimeout(() => setIsVisible(true), 100);
        return () => clearTimeout(timeout);
    }, []);

    return (
        <section className={`${styles.blogHero} ${isVisible ? styles.visible : ""}`}>
            <div className={styles.coverImageWrapper}>
                <img src={coverImage} alt={title} className={styles.coverImage} />

                <div className={styles.infoBox}>
                    <span className={styles.category}>{category}</span>
                    <h1 className={styles.title}>{title}</h1>

                    <div className={styles.metaInfo}>
                        <span className={styles.metaItem}>
                            <User size={16} className={styles.icon} />
                            {author}
                        </span>

                        {date && (
                            <span className={styles.metaItem}>
                                <Calendar size={16} className={styles.icon} />
                                {new Date(date).toLocaleDateString()}
                            </span>
                        )}

                        <span className={styles.metaItem}>
                            <Clock size={16} className={styles.icon} />
                            {readingTime}
                        </span>
                    </div>
                </div>
            </div>
        </section>
    );
};
// ,,
export default BlogHero;
