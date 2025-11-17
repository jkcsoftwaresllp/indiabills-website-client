import React, { useEffect, useState } from "react";
import styles from "./styles/BlogContent.module.css";
import { Twitter, Linkedin, Facebook, ArrowLeft, ArrowRight } from "lucide-react";

const BlogContent = ({
  content,
  authorName,
  authorBio,
  authorImage,
  prevBlog,
  nextBlog,
}) => {
  const [visibleSections, setVisibleSections] = useState({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections((prev) => ({
              ...prev,
              [entry.target.dataset.section]: true,
            }));
          }
        });
      },
      { threshold: 0.15 }
    );

    document
      .querySelectorAll("[data-section]")
      .forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const handleShare = (platform) => {
    const url = window.location.href;
    const shareText = encodeURIComponent(document.title);

    const links = {
      twitter: `https://twitter.com/intent/tweet?url=${url}&text=${shareText}`,
      linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${url}`,
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${url}`,
    };

    window.open(links[platform], "_blank");
  };

  return (
    <section className={styles.blogContent}>
      {/* Blog Main Content */}
      <div
        className={`${styles.contentBody} ${visibleSections.content ? styles.fadeIn : ""
          }`}
        data-section="content"
        dangerouslySetInnerHTML={{ __html: content }}
      />

      {/* Highlighted Quote */}
      <blockquote
        className={`${styles.quote} ${visibleSections.quote ? styles.fadeInUp : ""
          }`}
        data-section="quote"
      >
        “Good writing is clear thinking made visible.”
      </blockquote>

      {/* Share Section */}
      <div
        className={`${styles.shareSection} ${visibleSections.share ? styles.fadeInUp : ""
          }`}
        data-section="share"
      >
        <p className={styles.shareTitle}>Share this article</p>
        <div className={styles.shareButtons}>
          <button
            onClick={() => handleShare("twitter")}
            className={`${styles.shareBtn} ${styles.twitter}`}
          >
            <Twitter size={18} /> Twitter
          </button>
          <button
            onClick={() => handleShare("linkedin")}
            className={`${styles.shareBtn} ${styles.linkedin}`}
          >
            <Linkedin size={18} /> LinkedIn
          </button>
          <button
            onClick={() => handleShare("facebook")}
            className={`${styles.shareBtn} ${styles.facebook}`}
          >
            <Facebook size={18} /> Facebook
          </button>
        </div>
      </div>

      {/* Author Info */}
      {authorName && (
        <div
          className={`${styles.authorBox} ${visibleSections.author ? styles.fadeIn : ""
            }`}
          data-section="author"
        >
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

      {/* Navigation */}
      <div
        className={`${styles.navigation} ${visibleSections.nav ? styles.fadeIn : ""
          }`}
        data-section="nav"
      >
        {prevBlog ? (
          <a href={`/blogs/${prevBlog.id}`} className={styles.navLink}>
            <ArrowLeft size={16} /> {prevBlog.title}
          </a>
        ) : (
          <div></div>
        )}

        {nextBlog && (
          <a href={`/blogs/${nextBlog.id}`} className={styles.navLink}>
            {nextBlog.title} <ArrowRight size={16} />
          </a>
        )}
      </div>
    </section>
  );
};

export default BlogContent;
