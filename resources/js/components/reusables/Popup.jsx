import React, { useEffect } from "react";
import { gsap } from "gsap";

export default function Popup({ items, popupRef, show }) {
    useEffect(() => {
        if (show && popupRef.current) {
            gsap.fromTo(
                popupRef.current,
                { opacity: 0, y: 10 },
                { opacity: 1, y: 0, duration: 0.25, ease: "power2.out" }
            );
        }
    }, [show, popupRef]);

    if (!show) return null;

    return (
        <div
            ref={popupRef}
            className="absolute bottom-full left-0 mb-2 w-64 bg-zinc-900 rounded-xl shadow-lg py-2 px-2 z-50"
        >
            {items.map((subItem, index) => {
                if (subItem.type === "separator") {
                    return (
                        <div
                            key={index}
                            className="my-1 border-t border-zinc-700"
                        />
                    );
                }

                return (
                    <button
                        key={index}
                        onClick={subItem.onClick || (() => {})} // ✅ trigger action
                        className="flex items-center gap-4 rounded-xl w-full px-5 py-4 hover:bg-zinc-800 text-base justify-start"
                    >
                        {subItem.icon && <subItem.icon size={22} />}
                        <span className="text-left font-medium">
                            {subItem.name}
                        </span>
                    </button>
                );
            })}
        </div>
    );
}
