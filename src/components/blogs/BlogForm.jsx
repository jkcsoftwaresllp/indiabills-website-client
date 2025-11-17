import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import api from "../../api/api";
import styles from "./styles/BlogForm.module.css";

const BlogForm = ({ mode = "create", blogId }) => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm();

  const [preview, setPreview] = useState(null);
  const [selectedFile, setSelectedFile] = useState(null);

  const backendUrl = import.meta.env.VITE_BACKEND_URL || "http://localhost:3000";

  // Fetch blog details for edit mode
  useEffect(() => {
    if (mode === "edit" && blogId) {
      (async () => {
        try {
          const res = await api.get(`/blogs/${blogId}`);
          const blog = res.data;
          reset({
            title: blog.title,
            description: blog.description || "",
            content: blog.content || "",
            category: blog.category || "",
            author: blog.author || "",
            featured: blog.featured ? "true" : "false",
          });
          setPreview(`${backendUrl}${blog.image_url}` || blog.imageUrl || "");
        } catch (error) {
          console.error("Error fetching blog:", error);
        }
      })();
    }
  }, [mode, blogId, reset]);

  // Handle form submission
  const onSubmit = async (data) => {
    try {
      const formData = new FormData();
      formData.append("title", data.title);
      formData.append("description", data.description);
      formData.append("content", data.content);
      formData.append("category", data.category);
      formData.append("author", data.author);
      formData.append("featured", data.featured === "true" ? 1 : 0);
      formData.append("date", new Date().toISOString());
      if (selectedFile) {
        formData.append("image", selectedFile)
      } else if (mode === "edit" && preview) {
        // If editing and no new file selected, keep existing image URL
        formData.append("image_url", preview.replace(backendUrl, ""));
      }

      if (mode === "create") {
        await api.post("/blogs", formData, {
          headers: { "Content-Type": "multipart/form-data" },
        });
      } else {
        await api.put(`/blogs/${blogId}`, formData, {
          headers: { "Content-Type": "multipart/form-data" },
        });
      }
      navigate("/blogs");
    } catch (error) {
      console.error("Error submitting blog:", error);
    }
  };

  // Handle image preview
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setPreview(URL.createObjectURL(file));
      setSelectedFile(file);
    }
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>
        {mode === "edit" ? "Edit Blog" : "Create New Blog"}
      </h2>

      <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
        {/* Title */}
        <div className={styles.field}>
          <label>Title</label>
          <input
            type="text"
            placeholder="Enter blog title"
            {...register("title", { required: "Title is required" })}
          />
          {errors.title && <p className={styles.error}>{errors.title.message}</p>}
        </div>

        {/* Description */}
        <div className={styles.field}>
          <label>Short Description</label>
          <input
            type="text"
            placeholder="Enter short description"
            {...register("description", {
              required: "Description is required",
              minLength: {
                value: 10,
                message: "At least 10 characters required",
              },
            })}
          />
          {errors.description && (
            <p className={styles.error}>{errors.description.message}</p>
          )}
        </div>

        {/* Content */}
        <div className={styles.field}>
          <label>Full Content</label>
          <textarea
            rows={8}
            placeholder="Write your full blog content here..."
            {...register("content", {
              required: "Content is required",
              minLength: {
                value: 30,
                message: "At least 30 characters required",
              },
            })}
          />
          {errors.content && (
            <p className={styles.error}>{errors.content.message}</p>
          )}
        </div>

        {/* Category */}
        <div className={styles.field}>
          <label>Category</label>
          <input
            type="text"
            placeholder="e.g. Technology, Business..."
            {...register("category", { required: "Category is required" })}
          />
          {errors.category && (
            <p className={styles.error}>{errors.category.message}</p>
          )}
        </div>

        {/* Author */}
        <div className={styles.field}>
          <label>Author</label>
          <input
            type="text"
            placeholder="Enter author name"
            {...register("author", { required: "Author is required" })}
          />
          {errors.author && (
            <p className={styles.error}>{errors.author.message}</p>
          )}
        </div>

        {/* Featured Toggle */}
        <div className={styles.field}>
          <label>Featured</label>
          <select {...register("featured")}>
            <option value="false">No</option>
            <option value="true">Yes</option>
          </select>
        </div>

        {/* Image */}
        <div className={styles.field}>
          <label>Image</label>
          <input
            type="file"
            accept="image/*"
            {...register("image")}
            onChange={handleImageChange}
          />
          {preview && <img src={preview} alt="Preview" className={styles.preview} />}
        </div>

        {/* Buttons */}
        <div className={styles.btnRow}>
          <button
            type="submit"
            className={styles.submitBtn}
            disabled={isSubmitting}
          >
            {isSubmitting
              ? "Saving..."
              : mode === "edit"
                ? "Update Blog"
                : "Create Blog"}
          </button>
          <button
            type="button"
            className={styles.cancelBtn}
            onClick={() => navigate("/blogs")}
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default BlogForm;
