// EditBlogPage.jsx
import { useParams } from "react-router-dom";
import BlogForm from "../components/blogs/BlogForm";

export default function EditBlogPage() {
  const { id } = useParams();
  return <BlogForm mode="edit" blogId={id} />;
}
