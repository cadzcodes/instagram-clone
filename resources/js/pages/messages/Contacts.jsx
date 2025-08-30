// pages/messages/Contacts.jsx
import React from "react";
import { FiEdit } from "react-icons/fi";
import { IoChevronDown, IoSearchOutline } from "react-icons/io5";

export default function Contacts() {
    const contacts = [
        {
            id: 1,
            name: "aya",
            status: "Active 8h ago",
            avatar: "https://i.pravatar.cc/100?img=15",
            note: "LEAP OF FAITH ✊",
        },
        {
            id: 2,
            name: "sam",
            status: "Sent an attachment",
            avatar: "https://i.pravatar.cc/100?img=12",
            note: "Pfifin",
        },
        {
            id: 3,
            name: "nonie",
            status: "You sent an attachment",
            avatar: "https://i.pravatar.cc/100?img=13",
            note: "My Heart 💔",
        },
    ];

    return (
        <div className="flex flex-col h-full w-full">
            {/* ─── FULL CONTACTS (desktop only - lg and above) ─── */}
            <div className="hidden lg:flex flex-col h-full">
                {/* Header */}
                <div className="flex items-center justify-between px-6 py-2 mt-6">
                    <div className="flex items-center gap-1 cursor-pointer">
                        <h2 className="font-bold text-xl">cadzfellforit</h2>
                        <IoChevronDown className="text-gray-400" />
                    </div>
                    <FiEdit className="text-xl cursor-pointer" />
                </div>

                {/* Searchbar */}
                <div className="px-5 py-1">
                    <div className="flex items-center bg-zinc-900 rounded-lg px-3 py-2">
                        <IoSearchOutline className="text-gray-400 text-lg" />
                        <input
                            type="text"
                            placeholder="Search"
                            className="bg-transparent outline-none px-2 text-sm flex-1 text-gray-200 placeholder-gray-400"
                        />
                    </div>
                </div>

                {/* Notes Carousel */}
                <div className="px-4 py-3 border-b border-gray-400/30">
                    <div className="flex gap-4 overflow-x-auto no-scrollbar">
                        {/* Your Note */}
                        <div className="flex flex-col items-center flex-shrink-0 w-16">
                            <div className="relative">
                                <img
                                    src="https://i.pravatar.cc/100?img=1"
                                    alt="Your note"
                                    className="w-14 h-14 rounded-full border-2 border-gray-600"
                                />
                                <div className="absolute bottom-0 right-0 bg-blue-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold">
                                    +
                                </div>
                            </div>
                            <p className="text-xs mt-1">Your note</p>
                        </div>

                        {/* Other Notes */}
                        {contacts.map((c) => (
                            <div
                                key={c.id}
                                className="flex flex-col items-center flex-shrink-0 w-16"
                            >
                                <div className="relative group">
                                    <img
                                        src={c.avatar}
                                        alt={c.name}
                                        className="w-14 h-14 rounded-full border-2 border-pink-500"
                                    />
                                    {/* Floating note text */}
                                    <div className="absolute -top-7 left-1/2 -translate-x-1/2 bg-zinc-900 text-white text-xs px-2 py-1 rounded-lg hidden group-hover:block whitespace-nowrap">
                                        {c.note}
                                    </div>
                                </div>
                                <p className="text-xs mt-1 truncate w-full text-center">
                                    {c.name}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Messages Section */}
                <div className="px-6 py-3 flex items-center justify-between">
                    <h3 className="font-bold">Messages</h3>
                    <h3 className="font-semibold text-gray-400">Requests</h3>
                </div>

                {/* Contacts List */}
                <div className="flex-1 overflow-y-auto pb-20 md:pb-0">
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
                                <p className="text-sm text-gray-400">
                                    {c.status}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* ─── TABLET/MOBILE MODE (just circles, perfectly centered) ─── */}
            <div className="flex lg:hidden flex-col items-center justify-start h-full w-full py-6 gap-4 pb-20 md:pb-6">
                {/* Create Icon - centered */}
                <div className="p-2 rounded-full hover:bg-zinc-800 cursor-pointer transition-colors">
                    <FiEdit className="text-2xl" />
                </div>

                {/* Profile Circles - centered vertically and horizontally */}
                <div className="flex flex-col items-center gap-4 flex-1 justify-start max-h-full overflow-y-auto no-scrollbar">
                    {/* Your Note */}
                    <div className="flex flex-col items-center flex-shrink-0">
                        <div className="relative">
                            <img
                                src="https://i.pravatar.cc/100?img=1"
                                alt="Your note"
                                className="w-12 h-12 rounded-full border-2 border-gray-600 hover:scale-105 transition-transform cursor-pointer"
                            />
                            <div className="absolute bottom-0 right-0 bg-blue-500 text-white rounded-full w-4 h-4 flex items-center justify-center text-xs font-bold">
                                +
                            </div>
                        </div>
                    </div>

                    {/* Contact Circles */}
                    {contacts.map((c) => (
                        <img
                            key={c.id}
                            src={c.avatar}
                            alt={c.name}
                            className="w-12 h-12 rounded-full hover:scale-105 transition-transform cursor-pointer flex-shrink-0"
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}
