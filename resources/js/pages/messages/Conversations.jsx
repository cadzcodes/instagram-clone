// pages/messages/Conversations.jsx
import React from "react";

export default function Conversations() {
    const messages = [
        { from: "them", text: "Hey! How’s it going?" },
        { from: "me", text: "All good! Working on my project." },
        { from: "them", text: "Nice! Let’s catch up later." },
    ];

    return (
        <div className="flex flex-col h-full">
            {/* Header */}
            <div className="px-4 py-3 border-b border-gray-700 flex items-center justify-between">
                <h2 className="font-bold">sam</h2>
                <button className="text-sm text-blue-400">View Profile</button>
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
                            className={`px-3 py-2 rounded-xl max-w-xs ${
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

            {/* Input */}
            <div className="p-3 border-t border-gray-700 flex gap-2">
                <input
                    type="text"
                    placeholder="Message..."
                    className="flex-1 bg-zinc-900 text-white px-3 py-2 rounded-lg outline-none"
                />
                <button className="bg-blue-500 px-4 py-2 rounded-lg font-medium">
                    Send
                </button>
            </div>
        </div>
    );
}
