import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styles from "./styles/SingleBlogPage.module.css";
import BlogHero from "../components/singleBlogPage/BlogHero";
import HeroSection2 from "../components/containers/HeroSection2";
import api from "../api/api";
import BlogContent from "../components/singleBlogPage/BlogContent";
import exImage from '../assets/images/headerImg.jpg'

const SingleBlogPage = () => {
    const { id } = useParams();
    const [blog, setBlog] = useState(null);
    const [loading, setLoading] = useState(true);

    const backendUrl = import.meta.env.VITE_BACKEND_URL || "http://localhost:3000";

    useEffect(() => {
        const fetchBlog = async () => {
            try {
                const res = await api.get(`/blogs/${id}`)
                console.log(res)
                setBlog(res.data)
            } catch (error) {
                console.error("Error fetching blog data:", error)
            } finally {
                setLoading(false)
            }
        }
        fetchBlog()
    }, [id])

    if (loading) return <p className={styles.loading}>Loading...</p>;
    if (!blog) return <p className={styles.error}>Blog not found.</p>;

    return (
        <div className={styles.singleBlog}>
            <HeroSection2 title={"Every Blog Has a Story"} subtitle={"Thoughts, ideas, and experiences shared to inspire and connect."} />
            <BlogHero
                title={blog.title}
                author={blog.author}
                date={blog.created_at}
                category={blog.category}
                readingTime={blog.readingTime || "5 min read"}
                coverImage={blog.image_url ? `${backendUrl}${blog.image_url}` : exImage}
            />
            {/* <div className={styles.blogContent}>
                <div dangerouslySetInnerHTML={{ __html: blog.content }} />
            </div> */}
            <BlogContent
                content={blog.content}
                authorName={blog.author}
                authorBio="A passionate writer who loves exploring technology and creativity."
                authorImage={blog.image_url ? `${backendUrl}${blog.image_url}` : exImage}
                // onShare={handleShare}
                prevBlog={null}
                nextBlog={null}
            />
        </div>
    );
};

export default SingleBlogPage;
