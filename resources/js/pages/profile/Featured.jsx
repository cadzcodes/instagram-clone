// Featured.jsx
import React from "react";
import { Plus } from "lucide-react";

const highlights = [
    {
        id: 1,
        title: "♡ ⌗ ⌐ymu ⌐_.",
        image: "https://picsum.photos/100/100?random=1",
    },
    {
        id: 2,
        title: "(☆▽☆)",
        image: "https://picsum.photos/100/100?random=2",
    },
    {
        id: 3,
        title: "◀‿‿◀))➤",
        image: "https://picsum.photos/100/100?random=3",
    },
    {
        id: 4,
        title: "◕‿◕ arts • ...",
        image: "https://picsum.photos/100/100?random=4",
    },
    {
        id: 5,
        title: "(.ö__ö)",
        image: "https://picsum.photos/100/100?random=5",
    },
];

export default function Featured() {
    return (
        <div className="w-full">
            {/* Desktop Featured */}
            <div className="hidden md:block">
                <div className="flex gap-6 overflow-x-auto scrollbar-hide pb-2">
                    {/* Add New Highlight */}
                    <div className="flex flex-col items-center gap-2 flex-shrink-0">
                        <div className="w-20 h-20 border-2 border-dashed border-gray-600 rounded-full flex items-center justify-center cursor-pointer hover:border-gray-500 transition-colors">
                            <Plus className="w-8 h-8 text-gray-400" />
                        </div>
                        <p className="text-xs text-gray-400 text-center max-w-[80px] truncate">
                            New
                        </p>
                    </div>

                    {/* Existing Highlights */}
                    {highlights.map((highlight) => (
                        <div
                            key={highlight.id}
                            className="flex flex-col items-center gap-2 flex-shrink-0"
                        >
                            <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-gray-600 cursor-pointer hover:border-gray-500 transition-colors">
                                <img
                                    src={highlight.image}
                                    alt={highlight.title}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <p className="text-xs text-center max-w-[80px] truncate">
                                {highlight.title}
                            </p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Mobile Featured */}
            <div className="md:hidden">
                <div className="flex gap-4 overflow-x-auto scrollbar-hide pb-4">
                    {/* Add New Highlight */}
                    <div className="flex flex-col items-center gap-2 flex-shrink-0">
                        <div className="w-16 h-16 border-2 border-dashed border-gray-600 rounded-full flex items-center justify-center cursor-pointer">
                            <Plus className="w-6 h-6 text-gray-400" />
                        </div>
                        <p className="text-xs text-gray-400 text-center max-w-[64px] truncate">
                            New
                        </p>
                    </div>

                    {/* Existing Highlights */}
                    {highlights.map((highlight) => (
                        <div
                            key={highlight.id}
                            className="flex flex-col items-center gap-2 flex-shrink-0"
                        >
                            <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-gray-600 cursor-pointer">
                                <img
                                    src={highlight.image}
                                    alt={highlight.title}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <p className="text-xs text-center max-w-[64px] truncate">
                                {highlight.title}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
