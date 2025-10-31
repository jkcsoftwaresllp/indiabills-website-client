import React, { useState } from "react";
import HeroSection2 from "../components/containers/HeroSection2";
import FeaturedBlog from "../components/blogs/FeaturedBlog";
import FilterTabs from "../components/blogs/FilterTabs";
import BlogCard from "../components/blogs/BlogCard";
// import CTASection from "../components/sections/CTASection";
import { blogsData } from "./helper/blogsData";
import styles from "./styles/Blogs.module.css";
import ScrollingTextCTA from "./home/homeSections/CTASection";

function Blogs() {
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = ["All", "Product Updates", "Tips", "Business", "Guides"];

  const filteredBlogs =
    activeCategory === "All"
      ? blogsData
      : blogsData.filter((blog) => blog.category === activeCategory);

  // Featured blog (you can mark one as featured in blogsData)
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
            <BlogCard key={blog.id} {...blog} />
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <ScrollingTextCTA />
    </div>
  );
}

export default Blogs;
