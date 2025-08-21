import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "./Sidebar"; // make sure the path is correct

export default function Feed() {
    const navigate = useNavigate();

    useEffect(() => {
        // Check if user is logged in (has token)
        const token = localStorage.getItem("token");
        if (!token) {
            navigate("/"); // Redirect to login if not logged in
        }
    }, [navigate]);

    const handleLogout = () => {
        localStorage.removeItem("token"); // Clear token
        navigate("/"); // Redirect to login
    };

    return (
        <div className="flex min-h-screen bg-black text-white">
            {/* Sidebar */}
            <Sidebar />

            {/* Main Feed Area */}
            <main className="flex-1 p-6 flex flex-col items-center justify-start">
                <h1 className="text-3xl font-bold mb-4">
                    Welcome to Instagram Feed!
                </h1>
                <p className="text-gray-300 mb-6">
                    This is a placeholder for posts, stories, and feeds.
                </p>

                {/* Logout Button */}
                <button
                    onClick={handleLogout}
                    className="px-6 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition"
                >
                    Logout
                </button>

                {/* Example placeholder for posts */}
                <div className="mt-8 w-full max-w-3xl space-y-4">
                    <div className="bg-zinc-900 p-4 rounded">Post 1</div>
                    <div className="bg-zinc-900 p-4 rounded">Post 2</div>
                    <div className="bg-zinc-900 p-4 rounded">Post 3</div>
                </div>
            </main>
        </div>
    );
}
