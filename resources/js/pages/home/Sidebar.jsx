import React, { useState, useRef, useEffect } from "react";
import {
    Home,
    Search,
    Compass,
    Video,
    Menu,
    Heart,
    PlusSquare,
    User,
    MoreHorizontal,
    Grid,
    Zap,
    Cpu,
    Rose,
    Send,
} from "lucide-react";
import { NavLink } from "react-router-dom";
import { gsap } from "gsap";

export default function Sidebar() {
    const [showMutaPopup, setShowMutaPopup] = useState(false);
    const mutaRef = useRef(null);
    const [popupVisible, setPopupVisible] = useState(false);
    const popupRef = useRef(null);

    const mainMenu = [
        { name: "Home", icon: Home, to: "/feed" },
        { name: "Search", icon: Search, to: "/#" },
        { name: "Explore", icon: Compass, to: "/#" },
        { name: "Reels", icon: Video, to: "/#" },
        { name: "Messages", icon: Send, to: "/#", badge: 2 },
        { name: "Notifications", icon: Heart, to: "/#" },
        { name: "Create", icon: PlusSquare, to: "/#" },
        { name: "Profile", icon: User, to: "/#" },
    ];

    const bottomMenu = [
        { name: "More", icon: Menu, to: "/#" },
        { name: "Also from Muta", icon: Grid, to: "/#" },
    ];

    const mutaItems = [
        { name: "Muta AI", icon: Zap },
        { name: "AI Studio", icon: Cpu },
        { name: "Threads", icon: Rose },
    ];

    const togglePopup = () => {
        if (!showMutaPopup) {
            setPopupVisible(true); // mount first
            setShowMutaPopup(true); // then animate in
        } else {
            // animate out first
            if (popupRef.current) {
                gsap.to(popupRef.current, {
                    opacity: 0,
                    y: 10,
                    duration: 0.25,
                    ease: "power2.in",
                    onComplete: () => {
                        setShowMutaPopup(false);
                        setPopupVisible(false); // unmount after animation
                    },
                });
            }
        }
    };

    useEffect(() => {
        if (showMutaPopup && popupRef.current) {
            gsap.fromTo(
                popupRef.current,
                { opacity: 0, y: 10 },
                { opacity: 1, y: 0, duration: 0.25, ease: "power2.out" }
            );
        }
    }, [showMutaPopup]);

    // Close popup when clicking outside
    useEffect(() => {
        function handleClickOutside(event) {
            if (mutaRef.current && !mutaRef.current.contains(event.target)) {
                setShowMutaPopup(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [mutaRef]);

    return (
        <aside className="w-64 bg-black text-white min-h-screen px-4 py-6 flex flex-col justify-between border-r border-gray-500/40 relative">
            {/* Top/Main Menu */}
            <div className="space-y-2">
                <div className="flex justify-left mb-6">
                    <img
                        src="/images/instagram-text.png"
                        alt="Instagram"
                        className="w-29"
                    />
                </div>

                {mainMenu.map((item, index) => (
                    <NavLink
                        key={index}
                        to={item.to}
                        className={({ isActive }) =>
                            `flex items-center gap-4 px-3 py-3 rounded-lg
     transition-colors duration-300 ease-in-out
     ${isActive ? "bg-zinc-800" : "hover:bg-zinc-800/60"}`
                        }
                    >
                        <item.icon
                            size={22}
                            className="transition-colors duration-300 ease-in-out"
                        />
                        <span className="font-medium transition-colors duration-300 ease-in-out">
                            {item.name}
                        </span>
                        {item.badge && (
                            <span className="ml-auto bg-red-500 text-xs font-bold px-2 py-1 rounded-full">
                                {item.badge}
                            </span>
                        )}
                    </NavLink>
                ))}
            </div>

            {/* Bottom Menu */}
            <div className="space-y-3 mt-6 relative">
                {bottomMenu.map((item, index) => {
                    const isMuta = item.name === "Also from Muta";
                    return (
                        <div
                            key={index}
                            className="relative"
                            ref={isMuta ? mutaRef : null}
                        >
                            <button
                                onClick={() =>
                                    isMuta
                                        ? setShowMutaPopup(!showMutaPopup)
                                        : null
                                }
                                className={`w-full flex items-center gap-4 px-3 py-3 rounded-lg hover:bg-zinc-800 transition ${
                                    isMuta && showMutaPopup
                                        ? "font-bold bg-zinc-800"
                                        : ""
                                }`}
                            >
                                <item.icon
                                    size={22}
                                    className={
                                        isMuta && showMutaPopup
                                            ? "fill-white"
                                            : ""
                                    }
                                />
                                <span
                                    className={
                                        isMuta && showMutaPopup
                                            ? "font-bold"
                                            : "font-medium"
                                    }
                                >
                                    {item.name}
                                </span>
                            </button>

                            {/* Muta Popup */}
                            {isMuta && showMutaPopup && (
                                <div
                                    ref={popupRef}
                                    className="absolute bottom-full left-0 mb-2 w-64 bg-zinc-900 rounded-xl shadow-lg py-2 px-2 z-50"
                                >
                                    {mutaItems.map((subItem, subIndex) => (
                                        <button
                                            key={subIndex}
                                            className="flex items-center gap-4 rounded-xl w-full px-5 py-4 hover:bg-zinc-800 text-base justify-start"
                                        >
                                            <subItem.icon size={24} />
                                            <span className="text-left font-medium">
                                                {subItem.name}
                                            </span>
                                        </button>
                                    ))}
                                </div>
                            )}
                        </div>
                    );
                })}

                {/* Footer */}
                <div className="text-xs text-gray-400 mt-6 space-y-1">
                    <p>© 2025 Instagram-Clone by Cadz</p>
                </div>
            </div>
        </aside>
    );
}
