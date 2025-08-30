// SelfPosts.jsx
import React, { useState } from "react";
import { Grid, User, Bookmark, Play } from "lucide-react";

const userPosts = [
    {
        id: 1,
        image: "https://picsum.photos/400/400?random=1",
        type: "image",
        likes: 120,
        comments: 15,
    },
    {
        id: 2,
        image: "https://picsum.photos/400/400?random=2",
        type: "video",
        likes: 84,
        comments: 8,
    },
    {
        id: 3,
        image: "https://picsum.photos/400/400?random=3",
        type: "image",
        likes: 430,
        comments: 25,
    },
    {
        id: 4,
        image: "https://picsum.photos/400/400?random=4",
        type: "carousel",
        likes: 200,
        comments: 12,
    },
    {
        id: 5,
        image: "https://picsum.photos/400/400?random=5",
        type: "image",
        likes: 156,
        comments: 9,
    },
    {
        id: 6,
        image: "https://picsum.photos/400/400?random=6",
        type: "video",
        likes: 320,
        comments: 18,
    },
];

export default function SelfPosts() {
    const [activeTab, setActiveTab] = useState("posts");

    const tabs = [
        { id: "posts", label: "POSTS", icon: Grid, count: userPosts.length },
        { id: "tagged", label: "TAGGED", icon: User, count: 0 },
    ];

    return (
        <div className="w-full">
            {/* Tab Navigation */}
            <div className="border-t border-gray-800">
                <div className="flex justify-center">
                    {tabs.map((tab) => (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            className={`
                                flex items-center gap-2 px-6 py-3 text-xs font-semibold tracking-wider
                                border-t-2 transition-colors
                                ${
                                    activeTab === tab.id
                                        ? "border-white text-white"
                                        : "border-transparent text-gray-400 hover:text-gray-300"
                                }
                            `}
                        >
                            <tab.icon className="w-3 h-3" />
                            <span>{tab.label}</span>
                        </button>
                    ))}
                </div>
            </div>

            {/* Content */}
            <div className="mt-4">
                {activeTab === "posts" && (
                    <>
                        {userPosts.length > 0 ? (
                            <div className="grid grid-cols-3 gap-1 md:gap-4">
                                {userPosts.map((post) => (
                                    <div
                                        key={post.id}
                                        className="relative aspect-square cursor-pointer group overflow-hidden"
                                    >
                                        <img
                                            src={post.image}
                                            alt="Post"
                                            className="w-full h-full object-cover transition-transform group-hover:scale-105"
                                        />

                                        {/* Post Type Indicators */}
                                        {post.type === "video" && (
                                            <div className="absolute top-2 right-2">
                                                <Play className="w-4 h-4 fill-white text-white" />
                                            </div>
                                        )}
                                        {post.type === "carousel" && (
                                            <div className="absolute top-2 right-2">
                                                <div className="flex space-x-1">
                                                    <div className="w-1 h-1 bg-white rounded-full"></div>
                                                    <div className="w-1 h-1 bg-white rounded-full"></div>
                                                    <div className="w-1 h-1 bg-white rounded-full"></div>
                                                </div>
                                            </div>
                                        )}

                                        {/* Hover Overlay */}
                                        <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                            <div className="flex items-center gap-6 text-white font-semibold">
                                                <div className="flex items-center gap-1">
                                                    <svg
                                                        className="w-5 h-5 fill-white"
                                                        viewBox="0 0 24 24"
                                                    >
                                                        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                                                    </svg>
                                                    <span>{post.likes}</span>
                                                </div>
                                                <div className="flex items-center gap-1">
                                                    <svg
                                                        className="w-5 h-5 fill-white"
                                                        viewBox="0 0 24 24"
                                                    >
                                                        <path d="M21 6h-2l-1.27-1.27c-.38-.38-.89-.59-1.41-.59H7.68c-.53 0-1.04.21-1.42.59L5 6H3c-.55 0-1 .45-1 1s.45 1 1 1h1v11c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V8h1c.55 0 1-.45 1-1s-.45-1-1-1zM7 19c-1.1 0-2-.9-2-2V8h2v11zm10 0V8h2v9c0 1.1-.9 2-2 2z" />
                                                    </svg>
                                                    <span>{post.comments}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <div className="flex flex-col items-center justify-center py-16 text-center">
                                <div className="w-16 h-16 border-2 border-gray-600 rounded-full flex items-center justify-center mb-4">
                                    <Grid className="w-8 h-8 text-gray-400" />
                                </div>
                                <h3 className="text-xl font-light mb-2">
                                    No Posts Yet
                                </h3>
                                <p className="text-gray-400 text-sm">
                                    When you share photos and videos, they'll
                                    appear on your profile.
                                </p>
                            </div>
                        )}
                    </>
                )}

                {activeTab === "tagged" && (
                    <div className="flex flex-col items-center justify-center py-16 text-center">
                        <div className="w-16 h-16 border-2 border-gray-600 rounded-full flex items-center justify-center mb-4">
                            <User className="w-8 h-8 text-gray-400" />
                        </div>
                        <h3 className="text-xl font-light mb-2">
                            Photos of you
                        </h3>
                        <p className="text-gray-400 text-sm">
                            When people tag you in photos, they'll appear here.
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
}
