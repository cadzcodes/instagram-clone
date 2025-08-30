import React from "react";
import {
    FiHeart,
    FiMessageCircle,
    FiSend,
    FiBookmark,
    FiMoreHorizontal,
} from "react-icons/fi";
import { BsThreeDots } from "react-icons/bs";

const posts = [
    {
        id: 1,
        username: "feiryrej",
        userImg: "https://i.pravatar.cc/150?img=1",
        postImg: "https://picsum.photos/600/600?random=4",
        likes: 120,
        caption: "Exploring new vibes ✨",
        time: "2 hours ago",
    },
    {
        id: 2,
        username: "nicoiosaki",
        userImg: "https://i.pravatar.cc/150?img=2",
        postImg: "https://picsum.photos/600/600?random=2",
        likes: 84,
        caption: "Beach day 🏖️ #sunny",
        time: "5 hours ago",
    },
    {
        id: 3,
        username: "marvelhero",
        userImg: "https://i.pravatar.cc/150?img=3",
        postImg: "https://picsum.photos/600/600?random=3",
        likes: 430,
        caption: "Training never stops 💪",
        time: "1 day ago",
    },
];

export default function Posts() {
    return (
        <div className="flex flex-col gap-10">
            {posts.map((post) => (
                <div
                    key={post.id}
                    className="
    bg-black border-b border-gray-800 rounded-lg
    w-full sm:max-w-[500px] mx-0 sm:mx-auto
  "
                >
                    {/* Header */}
                    <div className="flex items-center justify-between p-3">
                        <div className="flex items-center gap-3">
                            <img
                                src={post.userImg}
                                alt={post.username}
                                className="w-10 h-10 rounded-full"
                            />
                            <p className="font-semibold">{post.username}</p>
                        </div>
                        <BsThreeDots className="text-xl cursor-pointer" />
                    </div>

                    {/* Post Image */}
                    <img
                        src={post.postImg}
                        alt="post"
                        className="w-full object-cover"
                    />

                    {/* Actions */}
                    <div className="flex justify-between items-center px-3 pt-3">
                        <div className="flex gap-4 text-2xl">
                            <FiHeart className="cursor-pointer hover:opacity-70" />
                            <FiMessageCircle className="cursor-pointer hover:opacity-70" />
                            <FiSend className="cursor-pointer hover:opacity-70" />
                        </div>
                        <FiBookmark className="text-2xl cursor-pointer hover:opacity-70" />
                    </div>

                    {/* Likes */}
                    <div className="px-3 pt-2">
                        <p className="font-semibold">{post.likes} likes</p>
                    </div>

                    {/* Caption */}
                    <div className="px-3 pt-1">
                        <p>
                            <span className="font-semibold">
                                {post.username}
                            </span>{" "}
                            {post.caption}
                        </p>
                    </div>

                    {/* Time */}
                    <div className="px-3 py-2 text-sm text-gray-400 uppercase">
                        {post.time}
                    </div>

                    {/* Add Comment Input */}
                    <div className=" flex items-center px-3 py-2">
                        <input
                            type="text"
                            placeholder="Add a comment..."
                            className="bg-transparent flex-1 outline-none text-sm"
                        />
                        <button className="text-blue-500 font-semibold text-sm">
                            Post
                        </button>
                    </div>
                </div>
            ))}
        </div>
    );
}
