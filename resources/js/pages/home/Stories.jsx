import React, { useState, useRef, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const stories = [
    { id: 1, name: "feiryrej", img: "https://i.pravatar.cc/100?img=1" },
    { id: 2, name: "nicoiosaki", img: "https://i.pravatar.cc/100?img=2" },
    { id: 3, name: "grnzdaradar", img: "https://i.pravatar.cc/100?img=3" },
    { id: 4, name: "maybe_jui", img: "https://i.pravatar.cc/100?img=4" },
    { id: 5, name: "sasucchi95", img: "https://i.pravatar.cc/100?img=5" },
    { id: 6, name: "shaira_neri", img: "https://i.pravatar.cc/100?img=6" },
    { id: 7, name: "extra1", img: "https://i.pravatar.cc/100?img=7" },
    { id: 8, name: "extra2", img: "https://i.pravatar.cc/100?img=8" },
    { id: 9, name: "extra3", img: "https://i.pravatar.cc/100?img=9" },
];

export default function Stories() {
    const [offset, setOffset] = useState(0);
    const containerRef = useRef(null);
    const [ITEM_WIDTH, setItemWidth] = useState(0);
    const [VISIBLE, setVISIBLE] = useState(6);

    const GAP = 8; // Tailwind gap-2

    // Update visible items and item width on resize
    useEffect(() => {
        const updateDimensions = () => {
            const width = containerRef.current?.offsetWidth || 0;

            // Decide how many items should be visible based on screen width
            let visibleCount = 6;
            if (width < 480) visibleCount = 4;
            else if (width < 768) visibleCount = 5;
            else visibleCount = 6;

            setVISIBLE(visibleCount);

            const storyWidth =
                (width - GAP * (visibleCount - 1)) / visibleCount;
            setItemWidth(storyWidth);
        };

        updateDimensions();
        window.addEventListener("resize", updateDimensions);
        return () => window.removeEventListener("resize", updateDimensions);
    }, []);

    const STEP = ITEM_WIDTH * 2 + GAP * 2;
    const maxOffset = Math.max(
        0,
        (ITEM_WIDTH + GAP) * stories.length - (ITEM_WIDTH + GAP) * VISIBLE
    );

    const scroll = (direction) => {
        setOffset((prev) => {
            const newOffset =
                direction === "left"
                    ? Math.max(prev - STEP, 0)
                    : Math.min(prev + STEP, maxOffset);
            return newOffset;
        });
    };

    return (
        <div
            ref={containerRef}
            className="relative w-full px-2 sm:px-0 max-w-3xl mx-auto mt-6 overflow-hidden"
        >
            {/* Left Button */}
            {offset > 0 && (
                <button
                    onClick={() => scroll("left")}
                    className="absolute left-0 top-1/2 -translate-y-1/2 bg-white p-1 rounded-full z-10 shadow hover:bg-gray-200"
                >
                    <ChevronLeft className="text-black w-5 h-5" />
                </button>
            )}

            {/* Track */}
            <div className="overflow-hidden">
                <div
                    className="flex gap-2 transition-transform duration-500 ease-in-out"
                    style={{ transform: `translateX(-${offset}px)` }}
                >
                    {stories.map((story) => (
                        <div
                            key={story.id}
                            className="flex flex-col items-center flex-shrink-0"
                            style={{ width: `${ITEM_WIDTH}px` }}
                        >
                            <div className="w-16 h-16 md:w-20 md:h-20 rounded-full p-[2.5px] bg-gradient-to-tr from-pink-500 to-yellow-400">
                                <img
                                    src={story.img}
                                    alt={story.name}
                                    className="w-full h-full rounded-full border-2 border-black object-cover"
                                />
                            </div>
                            <span className="text-xs mt-1 truncate w-full text-center">
                                {story.name}
                            </span>
                        </div>
                    ))}
                </div>
            </div>

            {/* Right Button */}
            {offset < maxOffset && (
                <button
                    onClick={() => scroll("right")}
                    className="absolute right-0 top-1/2 -translate-y-1/2 bg-white p-1 rounded-full z-10 shadow hover:bg-gray-200"
                >
                    <ChevronRight className="text-black w-5 h-5" />
                </button>
            )}
        </div>
    );
}
