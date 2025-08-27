// pages/messages/Contacts.jsx
import React from "react";

export default function Contacts() {
    const contacts = [
        {
            id: 1,
            name: "aya",
            status: "Active 8h ago",
            avatar: "https://i.pravatar.cc/100?img=11",
        },
        {
            id: 2,
            name: "sam",
            status: "Sent an attachment",
            avatar: "https://i.pravatar.cc/100?img=12",
        },
        {
            id: 3,
            name: "nonie",
            status: "You sent an attachment",
            avatar: "https://i.pravatar.cc/100?img=13",
        },
    ];

    return (
        <div className="flex flex-col h-full">
            <div className="px-4 py-3 border-b border-gray-700">
                <h2 className="text-lg font-bold">Messages</h2>
            </div>
            <div className="flex-1 overflow-y-auto">
                {contacts.map((c) => (
                    <div
                        key={c.id}
                        className="flex items-center gap-3 px-4 py-3 hover:bg-zinc-800 cursor-pointer"
                    >
                        <img
                            src={c.avatar}
                            alt={c.name}
                            className="w-10 h-10 rounded-full"
                        />
                        <div>
                            <p className="font-medium">{c.name}</p>
                            <p className="text-sm text-gray-400">{c.status}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
