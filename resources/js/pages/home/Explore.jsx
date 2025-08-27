import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "../../components/navigations/Sidebar";
import { FaHeart, FaComment } from "react-icons/fa"; // solid filled versions

// Mock image data with likes & comments
const images = Array.from({ length: 15 }, (_, i) => ({
    src: `/images/image-${i + 1}.jpg`,
    likes: Math.floor(Math.random() * 500) + 50,
    comments: Math.floor(Math.random() * 100) + 10,
}));

export default function Explore() {
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (!token) navigate("/");
    }, [navigate]);

    return (
        <div className="flex min-h-screen bg-black text-white">
            <Sidebar />

            <main
                className="flex justify-center w-full p-4 sm:p-6
                    max-[765px]:ml-0
                    min-[766px]:ml-20
                    min-[1260px]:ml-64
                    transition-all duration-300"
            >
                <div className="flex justify-center w-full overflow-hidden">
                    {/* Wrapper for scaling */}
                    <div
                        className="grid grid-cols-3 gap-1"
                        style={{
                            width: "900px",
                            gridAutoRows: "300px",
                            transform: "scale(calc(min(1, 100vw / 900px)))",
                            transformOrigin: "top center",
                        }}
                    >
                        {images.map((img, idx) => {
                            const mod = idx % 6;
                            const isDoubleHeight = mod === 2 || mod === 5;

                            return (
                                <div
                                    key={idx}
                                    className={`relative overflow-hidden group ${
                                        isDoubleHeight
                                            ? "row-span-2"
                                            : "row-span-1"
                                    }`}
                                >
                                    {/* Image */}
                                    <img
                                        src={img.src}
                                        alt={`explore-${idx}`}
                                        className="w-full h-full object-cover"
                                    />

                                    {/* Hover Overlay */}
                                    <div
                                        className="absolute inset-0 bg-black/40 opacity-0 
                                                   group-hover:opacity-100 flex items-center 
                                                   justify-center gap-6 text-white font-semibold 
                                                   text-lg transition-opacity duration-300"
                                    >
                                        {/* Likes */}
                                        <div className="flex items-center gap-2">
                                            <FaHeart className="w-6 h-6 text-white" />
                                            {img.likes}
                                        </div>

                                        {/* Comments */}
                                        <div className="flex items-center gap-2">
                                            <FaComment className="w-6 h-6 text-white" />
                                            {img.comments}
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </main>
        </div>
    );
}
