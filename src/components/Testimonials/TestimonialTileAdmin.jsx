import React from "react";
import styles from "./styles/TestimonialTileAdmin.module.css";

function TestimonialTileAdmin({
    name,
    role,
    text,
    rating,
    status,
    onApprove,
    onReject,
    onDelete,
}) {
    return (
        <div className={styles.tile}>
            <div className={styles.header}>
                <h3>{name}</h3>
                <span className={styles.role}>{role}</span>
            </div>

            <p className={styles.message}>{text}</p>

            <div className={styles.rating}>
                {"⭐".repeat(rating)}
                <span className={styles.ratingNumber}>({rating})</span>
            </div>

            <div className={`${styles.status} ${styles[status]}`}>{status}</div>

            <div className={styles.actions}>
                {status === 0 && (
                    <>
                        <button className={styles.approveBtn} onClick={onApprove}>
                            Approve
                        </button>
                        <button className={styles.rejectBtn} onClick={onReject}>
                            Reject
                        </button>
                    </>
                )}

                {(status === 1 || status === "rejected") && (
                    <button className={styles.deleteBtn} onClick={onDelete}>
                        Delete
                    </button>
                )}
            </div>
        </div>
    );
}

export default TestimonialTileAdmin;
