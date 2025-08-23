import React from "react";

const suggestions = [
    { id: 1, name: "instagram", img: "https://i.pravatar.cc/100?img=11" },
    { id: 2, name: "alizaa11arizy", img: "https://i.pravatar.cc/100?img=12" },
    { id: 3, name: "loveeaddie", img: "https://i.pravatar.cc/100?img=13" },
    { id: 4, name: "lewioj", img: "https://i.pravatar.cc/100?img=14" },
    { id: 5, name: "seemanpatrick", img: "https://i.pravatar.cc/100?img=15" },
];

export default function Rightbar() {
    return (
        <aside className="hidden lg:flex flex-col w-80 p-6 text-sm text-gray-300">
            {/* Profile Switch Section */}
            <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                    <img
                        src="https://i.pravatar.cc/100?img=5"
                        alt="profile"
                        className="w-12 h-12 rounded-full"
                    />
                    <div>
                        <p className="font-semibold text-white">
                            cadzfellforit
                        </p>
                        <p className="text-gray-400 text-xs">cadz</p>
                    </div>
                </div>
                <button className="text-blue-500 text-xs font-bold">
                    Switch
                </button>
            </div>

            {/* Suggestions Section */}
            <div className="flex justify-between mb-3">
                <p className="text-gray-400 text-sm font-semibold">
                    Suggestions For You
                </p>
                <button className="text-white text-xs">See All</button>
            </div>

            <div className="space-y-4">
                {suggestions.map((s) => (
                    <div
                        key={s.id}
                        className="flex items-center justify-between"
                    >
                        <div className="flex items-center gap-3">
                            <img
                                src={s.img}
                                alt={s.name}
                                className="w-9 h-9 rounded-full"
                            />
                            <p className="text-white text-sm">{s.name}</p>
                        </div>
                        <button className="text-blue-500 text-xs font-bold">
                            Follow
                        </button>
                    </div>
                ))}
            </div>

            {/* Footer */}
            <div className="text-[11px] text-gray-500 mt-10 space-y-2">
                <p>About · Help · Press · API · Jobs · Privacy · Terms</p>
                <p>Locations · Language · Meta Verified</p>
                <p className="mt-2">© 2025 INSTAGRAM FROM META</p>
            </div>
        </aside>
    );
}
