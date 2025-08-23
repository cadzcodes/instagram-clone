import React, { useEffect, useRef } from "react";
import { X } from "lucide-react";
import { gsap } from "gsap";

export default function SearchDialog({ open, onClose, results = [], onClear }) {
    const inputRef = useRef(null);
    const contentRef = useRef(null);

    useEffect(() => {
        if (open && inputRef.current) inputRef.current.focus();
    }, [open]);

    useEffect(() => {
        if (open && contentRef.current) {
            gsap.fromTo(
                contentRef.current,
                { opacity: 0, scale: 1.1 },
                { opacity: 1, scale: 1, duration: 0.35, ease: "power3.out" }
            );
        }
    }, [open]);

    if (!open) return null;

    return (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex flex-col z-50 p-2 sm:p-0">
            {/* Close button */}
            <button
                onClick={onClose}
                className="absolute top-2 sm:top-6 right-2 sm:right-6 text-gray-300 hover:text-white z-50"
            >
                <X size={28} />
            </button>

            {/* Scrollable wrapper for mobile */}
            <div className="flex justify-center items-start w-full h-full overflow-y-auto pt-12 sm:pt-24">
                <div
                    ref={contentRef}
                    className="flex flex-col w-full max-w-full sm:max-w-2xl px-2 sm:px-0"
                >
                    {/* Search input */}
                    <div className="relative w-full mb-10">
                        <div className="absolute -inset-[2px] rounded-2xl bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-600 animate-gradient-x blur-sm"></div>
                        <input
                            ref={inputRef}
                            type="text"
                            placeholder="Search..."
                            className="relative w-full px-4 py-3 sm:px-6 sm:py-4 rounded-2xl bg-zinc-900/90 border border-transparent text-white text-base sm:text-lg placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-lg"
                        />
                    </div>

                    {/* Results */}
                    <div className="w-full bg-zinc-900/80 rounded-xl shadow-xl border border-zinc-700 overflow-y-auto max-h-[70vh]">
                        {results.length > 0 ? (
                            <>
                                <div className="flex items-center justify-between px-4 py-2 border-b border-zinc-700">
                                    <span className="text-sm font-semibold text-gray-300">
                                        Recent
                                    </span>
                                    <button
                                        onClick={onClear}
                                        className="text-xs font-medium text-blue-400 hover:text-blue-300"
                                    >
                                        Clear All
                                    </button>
                                </div>
                                <ul className="divide-y divide-zinc-700 max-h-[60vh] sm:max-h-96 overflow-y-auto">
                                    {results.map((item, idx) => (
                                        <li
                                            key={idx}
                                            className="flex items-center gap-3 p-3 hover:bg-zinc-800 cursor-pointer transition"
                                        >
                                            <img
                                                src={item.img}
                                                alt={item.name}
                                                className="w-10 h-10 rounded-full object-cover border border-gray-600"
                                            />
                                            <div className="flex flex-col overflow-hidden">
                                                <span className="text-sm font-semibold text-white truncate">
                                                    {item.username}
                                                </span>
                                                <span className="text-xs text-gray-400 truncate">
                                                    {item.name}
                                                </span>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </>
                        ) : (
                            <div className="p-6 text-center text-gray-400 text-sm">
                                No recent searches
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
