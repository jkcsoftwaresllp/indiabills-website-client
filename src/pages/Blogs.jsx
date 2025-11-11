import React, { useEffect, useState } from "react";
import HeroSection2 from "../components/containers/HeroSection2";
import FeaturedBlog from "../components/blogs/FeaturedBlog";
import FilterTabs from "../components/blogs/FilterTabs";
import BlogCard from "../components/blogs/BlogCard";
import styles from "./styles/Blogs.module.css";
import ScrollingTextCTA from "./home/homeSections/CTASection";
import api from "../api/api";

function Blogs() {
  const [blogsData, setBlogsData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeCategory, setActiveCategory] = useState("All");
  const categories = ["All", "Product Updates", "Tips", "Business", "Guides"];

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await api.get("/blogs");
        setBlogsData(res.data);
      } catch (error) {
        console.error("Error fetching blogs data:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchBlogs();
  }, []);

  if (loading) return <div>Loading...</div>;

  const filteredBlogs =
    activeCategory === "All"
      ? blogsData
      : blogsData.filter((blog) => blog.category === activeCategory);

  // Handle blog deletion (called from BlogCard)
  const handleDelete = (id) => {
    setBlogsData((prev) => prev.filter((blog) => blog.id !== id));
  };

  // Featured blog (optional)
  const featuredBlog = blogsData.find((blog) => blog.featured);

  return (
    <div className={styles.blogsPage}>
      {/* Hero Section */}
      <HeroSection2
        title="Insights, Updates & Product Tips"
        subtitle="Explore expert articles, product updates, and success stories from IndiaBills."
      />

      {/* Featured Blog */}
      {featuredBlog && (
        <section className={styles.featuredSection}>
          <FeaturedBlog {...featuredBlog} />
        </section>
      )}

      {/* Filter Tabs */}
      <FilterTabs
        categories={categories}
        activeCategory={activeCategory}
        onFilterChange={setActiveCategory}
      />

      {/* Blog Grid */}
      <section className={styles.blogGridSection}>
        <div className={styles.blogGrid}>
          {filteredBlogs.map((blog) => (
            <BlogCard key={blog.id} {...blog} onDelete={handleDelete} />
          ))}
        </div>
      </section>

      <ScrollingTextCTA />
    </div>
  );
}

export default Blogs;
