import { Children, createContext, useEffect, useState } from "react";
import api from "../api/api";

export const AdminContext = createContext();

export const AdminProvider = ({ children }) => {
    const [isAdmin, setIsAdmin] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const checkAuth = async () => {
            try {
                await api.get('/admin/checkAuth', { withCredentials: true })
                setIsAdmin(true);
                setLoading(false);
                console.log("Welcome Admin!")
            } catch (error) {
                setIsAdmin(false);
                setLoading(false);
            }
        };
        checkAuth();
    }, []);

    const loginAdmin = () => {
        setIsAdmin(true);
    };

    return (
        <AdminContext.Provider value={{ isAdmin, loading, loginAdmin, }}>
            {children}
        </AdminContext.Provider>
    );
};