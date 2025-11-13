import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import BlogForm from "../components/blogs/BlogForm";
import BlogHero from "../components/singleBlogPage/BlogHero";
import api from "../api/api";

export default function EditBlogPage() {
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
  if (loading) return <p >Loading...</p>;
  if (!blog) return <p >Blog not found.</p>;

  return (
    <>
      <BlogHero
        title={blog.title}
        author={blog.author}
        date={blog.created_at}
        category={blog.category}
        readingTime={blog.readingTime || "5 min read"}
        coverImage={blog.image_url ? `${backendUrl}${blog.image_url}` : exImage} />
      <BlogForm mode="edit" blogId={id} />
    </>
  );
}
