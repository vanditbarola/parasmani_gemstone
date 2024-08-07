"use client";
import { useEffect, useState } from 'react';
import Loader from '@/components/admin-panel/Loader';
import Sidebar from "@/components/admin-panel/Sidebar";

const Layout = ({ children }: { children: React.ReactNode }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const storedPassword = localStorage.getItem('admin_password');
        if (storedPassword === process.env.NEXT_PUBLIC_ADMIN_PASSWORD) {
            setIsAuthenticated(true);
        } else {
            const password = prompt("Enter admin password:");
            if (password === process.env.NEXT_PUBLIC_ADMIN_PASSWORD) {
                localStorage.setItem('admin_password', password);
                setIsAuthenticated(true);
            }
        }
        setIsLoading(false);
    }, []);

    if (isLoading) {
        return <Loader />;
    }

    if (!isAuthenticated) {
        return (
            <div className="flex items-center justify-center h-screen">
                <p>Authentication failed. Please refresh the page to try again.</p>
            </div>
        );
    }

    return (
        <div className="flex h-screen">
            <Sidebar />
            <div className="flex-1 overflow-y-auto">
                <div className="bg-gray-200 p-4 min-h-screen">{children}</div>
            </div>
            {isLoading && <Loader />}
        </div>
    );
};

export default Layout;
