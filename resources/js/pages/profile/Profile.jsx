// Profile.jsx
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "../../components/navigations/Sidebar";
import UserDetails from "./UserDetails";
import Featured from "./Featured";
import SelfPosts from "./SelfPosts";

export default function Profile() {
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (!token) navigate("/");
    }, [navigate]);

    return (
        <div className="flex min-h-screen bg-black text-white">
            <Sidebar />

            <div
                className="flex flex-1 justify-center w-full
          max-[765px]:ml-0
          min-[766px]:ml-20
          min-[1024px]:ml-64
          transition-all duration-300"
            >
                <main className="w-full max-w-4xl p-4 sm:p-6">
                    {/* User Details Section */}
                    <div className="mb-8">
                        <UserDetails />
                    </div>

                    {/* Featured Section */}
                    <div className="mb-8">
                        <Featured />
                    </div>

                    {/* Posts Section */}
                    <div>
                        <SelfPosts />
                    </div>
                </main>
            </div>
        </div>
    );
}
