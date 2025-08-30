// pages/messages/Conversations.jsx
import React, { useState } from "react";
import {
    FiPhone,
    FiVideo,
    FiInfo,
    FiSmile,
    FiMic,
    FiImage,
    FiHeart,
} from "react-icons/fi";

import { RiEmojiStickerLine } from "react-icons/ri";

export default function Conversations() {
    const [message, setMessage] = useState("");

    const messages = [
        { from: "them", text: "Hi pogiiii" },
        { from: "me", text: "Hi ganda. Cute mo talagaaa" },
        { from: "them", text: "Eme ka na naman." },
    ];

    return (
        <div className="flex flex-col h-full">
            {/* Header */}
            <div className="px-5 py-4 border-b border-gray-400/30 flex items-center justify-between">
                <div className="flex items-center gap-3">
                    <img
                        src="https://i.pravatar.cc/100?img=1" // replace with actual profile image
                        alt="profile"
                        className="w-8 h-8 rounded-full"
                    />
                    <div className="flex flex-col">
                        <span className="font-semibold">aya</span>
                        <span className="text-xs text-gray-400">
                            Active 52m ago
                        </span>
                    </div>
                </div>
                <div className="flex items-center gap-4 text-2xl text-gray-300">
                    <button>
                        <FiPhone className="cursor-pointer" />
                    </button>
                    <button>
                        <FiVideo className="cursor-pointer" />
                    </button>
                    <button>
                        <FiInfo className="cursor-pointer" />
                    </button>
                </div>
            </div>

            {/* Chat Area */}
            <div className="flex-1 overflow-y-auto p-4 space-y-3">
                {messages.map((msg, i) => (
                    <div
                        key={i}
                        className={`flex ${
                            msg.from === "me" ? "justify-end" : "justify-start"
                        }`}
                    >
                        <div
                            className={`px-3 py-2 rounded-full max-w-xs ${
                                msg.from === "me"
                                    ? "bg-blue-500 text-white"
                                    : "bg-zinc-800 text-gray-200"
                            }`}
                        >
                            {msg.text}
                        </div>
                    </div>
                ))}
            </div>

            {/* Instagram-style Input */}
            <div className="p-4">
                <div className="flex items-center bg-transparent border border-gray-400/50 rounded-full px-4 py-2 w-full">
                    <FiSmile className="text-gray-300 text-2xl mr-2" />
                    <input
                        type="text"
                        placeholder="Message..."
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        className="flex-1 bg-transparent text-white placeholder-gray-400 text-lg outline-none"
                    />
                    {message.trim() === "" ? (
                        <div className="flex items-center gap-3 text-gray-300 text-2xl">
                            <FiMic className="cursor-pointer" />
                            <FiImage className="cursor-pointer" />
                            <RiEmojiStickerLine className="cursor-pointer" />
                            <FiHeart className="cursor-pointer" />
                        </div>
                    ) : (
                        <button
                            className="ml-2 text-sm font-semibold"
                            style={{ color: "#3A57E8" }} // Instagram blue
                        >
                            Send
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
}
