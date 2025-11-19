import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import styles from "./styles/AdminLogin.module.css";
import api from "../api/api";
import { AdminContext } from "../context/AdminContext";

function AdminLogin() {
    const { loginAdmin } = useContext(AdminContext);
    const navigate = useNavigate();

    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
    } = useForm();

    const onSubmit = async (data) => {
        try {
            const res = await api.post(
                "/admin/login",
                {
                    email: data.email,
                    password: data.password,
                },
                { withCredentials: true }
            );

            // Update context → admin is now logged in
            loginAdmin();

            // Navigate home
            navigate("/");
        } catch (err) {
            console.log(err);
            alert("Invalid Admin Credentials");
        }
    };

    return (
        <div className={styles.container}>
            <div className={styles.card}>
                <h2 className={styles.title}>Admin Login</h2>

                <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>

                    <input
                        type="email"
                        placeholder="Admin Email"
                        className={styles.input}
                        {...register("email", {
                            required: "Email is required",
                        })}
                    />
                    {errors.email && <p className={styles.error}>{errors.email.message}</p>}

                    <input
                        type="password"
                        placeholder="Admin Password"
                        className={styles.input}
                        {...register("password", {
                            required: "Password is required",
                        })}
                    />
                    {errors.password && <p className={styles.error}>{errors.password.message}</p>}

                    <button
                        type="submit"
                        className={styles.button}
                        disabled={isSubmitting}
                    >
                        {isSubmitting ? "Logging in..." : "Login"}
                    </button>
                </form>
            </div>
        </div>
    );
}

export default AdminLogin;
