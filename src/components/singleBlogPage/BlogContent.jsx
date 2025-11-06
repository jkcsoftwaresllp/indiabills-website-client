import React from "react";
import styles from "./styles/BlogContent.module.css";

const BlogContent = ({
    content,
    authorName,
    authorBio,
    authorImage,
    onShare,
    prevBlog,
    nextBlog,
}) => {
    return (
        <section className={styles.blogContent}>
            {/* Main Blog Body */}
            <div
                className={styles.contentBody}
                dangerouslySetInnerHTML={{ __html: content }}
            />

            {/* Highlighted Quote (Optional) */}
            <blockquote className={styles.quote}>
                “Good writing is clear thinking made visible.”
            </blockquote>

            {/* Share Buttons */}
            <div className={styles.shareSection}>
                <p className={styles.shareTitle}>Share this article:</p>
                <div className={styles.shareButtons}>
                    <button
                        onClick={() => onShare("twitter")}
                        className={`${styles.shareBtn} ${styles.twitter}`}
                    >
                        Twitter
                    </button>
                    <button
                        onClick={() => onShare("linkedin")}
                        className={`${styles.shareBtn} ${styles.linkedin}`}
                    >
                        LinkedIn
                    </button>
                    <button
                        onClick={() => onShare("facebook")}
                        className={`${styles.shareBtn} ${styles.facebook}`}
                    >
                        Facebook
                    </button>
                </div>
            </div>

            {/* Author Info Box */}
            {authorName && (
                <div className={styles.authorBox}>
                    {authorImage && (
                        <img
                            src={authorImage}
                            alt={authorName}
                            className={styles.authorImage}
                        />
                    )}
                    <div>
                        <h4 className={styles.authorName}>{authorName}</h4>
                        <p className={styles.authorBio}>{authorBio}</p>
                    </div>
                </div>
            )}

            {/* Prev / Next Blog Navigation */}
            <div className={styles.navigation}>
                {prevBlog && (
                    <a href={`/blog/${prevBlog.id}`} className={styles.navLink}>
                        ← {prevBlog.title}
                    </a>
                )}
                {nextBlog && (
                    <a href={`/blog/${nextBlog.id}`} className={styles.navLink}>
                        {nextBlog.title} →
                    </a>
                )}
            </div>
        </section>
    );
};

export default BlogContent;
