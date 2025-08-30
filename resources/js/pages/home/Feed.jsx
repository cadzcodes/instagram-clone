// Feed.jsx
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "../../components/navigations/Sidebar";
import Stories from "./Stories";
import Rightbar from "./Rightbar";
import Posts from "./Posts";

export default function Feed() {
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (!token) navigate("/");
    }, [navigate]);

    return (
        <div className="flex min-h-screen bg-black text-white">
            <Sidebar />

            <div
                className="flex flex-1 justify-center gap-10 w-full
  max-[765px]:ml-0
  min-[766px]:ml-20
  min-[1024px]:ml-64
  transition-all duration-300"
            >
                <main className="flex-1 w-full p-4 sm:p-6 sm:max-w-2xl">
                    <div className="mb-10">
                        <Stories />
                    </div>
                    <Posts />
                </main>
                <div className="w-80 hidden lg:block">
                    <Rightbar />
                </div>
            </div>
        </div>
    );
}
