import React, { useEffect, useState } from "react";
import styles from "./styles/TestimonialsAdmin.module.css";
import api from "../api/api";
import TestimonialTileAdmin from "../components/Testimonials/TestimonialTileAdmin";

function TestimonialsAdmin() {
  const [testimonials, setTestimonials] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeFilter, setActiveFilter] = useState("all");
  const [search, setSearch] = useState("");

  // Fetch All Testimonials
  const fetchTestimonials = async () => {
    try {
      setLoading(true);
      const res = await api.get("/testimonials/admin/all" , { withCredentials: true } );
      setTestimonials(res.data);
      setFiltered(res.data);
    } catch (error) {
      console.error("Failed to load testimonials", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTestimonials();
  }, []);

  // Filtering
  useEffect(() => {
    let data = [...testimonials];

    // if (activeFilter !== "all") {
    //   data = data.filter((t) => t.approved === activeFilter);
    // }
    if (activeFilter === "pending") {
      data = data.filter((t) => t.approved === 0 );
    }
    if (activeFilter === "approved") {
      data = data.filter((t) => t.approved === 1);
    }

    ////
    if (search.trim() !== "") {
      data = data.filter((t) =>
        t.name.toLowerCase().includes(search.toLowerCase())
      );
    }

    setFiltered(data);
  }, [activeFilter, search, testimonials]);

  // Approve
  const handleApprove = async (id) => {
    await api.patch(`/testimonials/admin/approve/${id}` , { withCredentials: true } );
    fetchTestimonials();
  };

  // Reject
  const handleReject = async (id) => {
    await api.delete(`/testimonials/admin/reject/${id}` , { withCredentials: true } );
    fetchTestimonials();
  };

  // Delete (Confirm)
  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to permanently delete this testimonial?")) {
      return;
    }

    console.log("app", id )
    await api.delete(`/testimonials/admin/reject/${id}` , { withCredentials: true } );
    fetchTestimonials();
  };

  return (
    <div className={styles.page}>
      <h2 className={styles.heading}>Manage Testimonials</h2>

      {/* Search + Filters */}
      <div className={styles.controls}>
        <input
          className={styles.searchBox}
          type="text"
          placeholder="Search by name..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <div className={styles.filters}>
          {["all", "pending", "approved", "rejected"].map((f) => (
            <button
              key={f}
              className={`${styles.filterBtn} ${
                activeFilter === f ? styles.activeFilter : ""
              }`}
              onClick={() => setActiveFilter(f)}
            >
              {f.charAt(0).toUpperCase() + f.slice(1)}
            </button>
          ))}
        </div>
      </div>

      {/* Loader */}
      {loading && (
        <div className={styles.loaderContainer}>
          <div className={styles.loader} />
          <p>Loading testimonials...</p>
        </div>
      )}

      {/* Testimonials */}
      <div className={styles.grid}>
        {!loading && filtered.length === 0 ? (
          <p>No testimonials found.</p>
        ) : (
          filtered.map((t) => (
            <TestimonialTileAdmin
              key={t.id}
              name={t.name}
              role={t.role}
              text={t.text}
              rating={t.rating}
              status={t.approved}
              onApprove={() => handleApprove(t.id)}
              onReject={() => handleReject(t.id)}
              onDelete={() => handleDelete(t.id)}
            />
          ))
        )}
      </div>
    </div>
  );
}

export default TestimonialsAdmin;
