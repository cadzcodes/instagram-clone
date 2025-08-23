import React, { useState, useRef, useEffect } from "react";
import Popup from "../../components/reusables/Popup";
import SearchDialog from "../../components/navigations/SearchDialog";
import {
    Home,
    Search,
    Compass,
    Video,
    Menu,
    Heart,
    PlusSquare,
    User,
    Grid,
    Zap,
    Cpu,
    Rose,
    Send,
    Settings,
    Activity,
    Bookmark,
    MessageSquare,
} from "lucide-react";
import { NavLink, useNavigate } from "react-router-dom";
import { gsap } from "gsap";

export default function Sidebar({ showSearch, setShowSearch }) {
    const [openPopup, setOpenPopup] = useState(null);

    const mutaRef = useRef(null);
    const moreRef = useRef(null);
    const popupRef = useRef(null);
    const navigate = useNavigate();

    const mainMenu = [
        { name: "Home", icon: Home, to: "/feed" },
        { name: "Search", icon: Search, action: () => setShowSearch(true) },
        { name: "Explore", icon: Compass, to: "/explore" },
        { name: "Reels", icon: Video, to: "/reels" },
        { name: "Messages", icon: Send, to: "/messages", badge: 2 },
        {
            name: "Notifications",
            icon: Heart,
            action: () => console.log("Open notifications"),
        },
        {
            name: "Create",
            icon: PlusSquare,
            action: () => console.log("Open create modal"),
        },
        { name: "Profile", icon: User, to: "/profile" },
    ];

    const bottomMenu = [
        { name: "More", icon: Menu },
        { name: "Also from Muta", icon: Grid },
    ];

    const handleLogout = () => {
        localStorage.removeItem("token");
        navigate("/");
    };

    const moreItems = [
        {
            name: "Settings",
            icon: Settings,
            onClick: () => console.log("Go to Settings"),
        },
        {
            name: "Your activity",
            icon: Activity,
            onClick: () => console.log("Activity"),
        },
        { name: "Saved", icon: Bookmark, onClick: () => console.log("Saved") },
        {
            name: "Report a problem",
            icon: MessageSquare,
            onClick: () => console.log("Report problem"),
        },
        { type: "separator" },
        {
            name: "Switch accounts",
            onClick: () => console.log("Switch account"),
        },
        { name: "Log out", onClick: handleLogout },
    ];

    const mutaItems = [
        {
            name: "Muta AI",
            icon: Zap,
            onClick: () => console.log("Muta AI clicked"),
        },
        {
            name: "AI Studio",
            icon: Cpu,
            onClick: () => console.log("AI Studio clicked"),
        },
        {
            name: "Bhreads",
            icon: Rose,
            onClick: () => console.log("Bhreads clicked"),
        },
    ];

    useEffect(() => {
        if (openPopup && popupRef.current) {
            gsap.fromTo(
                popupRef.current,
                { opacity: 0, y: 10 },
                { opacity: 1, y: 0, duration: 0.25, ease: "power2.out" }
            );
        }
    }, [openPopup]);

    useEffect(() => {
        function handleClickOutside(e) {
            if (
                popupRef.current &&
                !popupRef.current.contains(e.target) &&
                !mutaRef.current?.contains(e.target) &&
                !moreRef.current?.contains(e.target)
            ) {
                setOpenPopup(null);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () =>
            document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    // --- Desktop / Tablet Sidebar ---
    const renderSidebar = () => (
        <aside
            className="
    hidden
    min-[766px]:flex                     
    max-[1259px]:w-20                    
    min-[1260px]:w-64                    
    bg-black text-white 
    fixed top-0 left-0 h-screen           /* 👈 pin to viewport */
    px-2 lg:px-4 py-6 
    flex-col justify-between 
    border-r border-gray-500/40 
    transition-all duration-300
    z-40                                   /* stay above content */
  "
        >
            {/* Logo */}
            <div className="flex justify-center min-[1260px]:justify-start mb-6">
                <img
                    src="/images/instagram-text.png"
                    alt="Instagram"
                    className="hidden min-[1260px]:block w-28"
                />
                <img
                    src="/images/instagram-icon.png"
                    alt="Instagram"
                    className="block min-[1260px]:hidden w-8"
                />
            </div>

            {/* Main Menu */}
            <div className="space-y-2">
                {mainMenu.map((item, idx) => {
                    const commonClasses =
                        "flex items-center justify-center min-[1260px]:justify-start gap-0 min-[1260px]:gap-4 px-3 py-3 rounded-lg transition-colors duration-300 hover:bg-zinc-800/60";

                    const content = (
                        <>
                            <div className="relative">
                                <item.icon size={22} />
                                {item.badge && (
                                    <span className="absolute -top-1 -right-3 bg-red-500 text-[10px] font-bold px-1.5 py-0.5 rounded-full">
                                        {item.badge}
                                    </span>
                                )}
                            </div>
                            <span className="hidden min-[1260px]:inline font-medium ml-2">
                                {item.name}
                            </span>
                        </>
                    );

                    if (item.action) {
                        return (
                            <button
                                key={idx}
                                onClick={item.action}
                                className={`${commonClasses} w-full`}
                            >
                                {content}
                            </button>
                        );
                    }

                    return (
                        <NavLink
                            key={idx}
                            to={item.to}
                            className={({ isActive }) =>
                                `${commonClasses} ${
                                    isActive ? "bg-zinc-800" : ""
                                }`
                            }
                        >
                            {content}
                        </NavLink>
                    );
                })}
            </div>

            {/* Bottom Menu */}
            <div className="space-y-3 mt-6 relative">
                {bottomMenu.map((item, idx) => {
                    const isMuta = item.name === "Also from Muta";
                    const isMore = item.name === "More";
                    const isActive =
                        openPopup ===
                        (isMuta ? "muta" : isMore ? "more" : null);

                    const commonClasses =
                        "flex items-center justify-center min-[1260px]:justify-start gap-0 min-[1260px]:gap-4 px-3 py-3 rounded-lg transition hover:bg-zinc-800 w-full";

                    return (
                        <div
                            key={idx}
                            className="relative"
                            ref={isMuta ? mutaRef : isMore ? moreRef : null}
                        >
                            <button
                                onClick={() =>
                                    setOpenPopup(
                                        isActive
                                            ? null
                                            : isMuta
                                            ? "muta"
                                            : "more"
                                    )
                                }
                                className={`${commonClasses} ${
                                    isActive ? "font-bold bg-zinc-800" : ""
                                }`}
                            >
                                <item.icon
                                    size={22}
                                    className={isActive ? "fill-white" : ""}
                                />
                                <span
                                    className={`hidden min-[1260px]:inline ml-2 ${
                                        isActive ? "font-bold" : "font-medium"
                                    }`}
                                >
                                    {item.name}
                                </span>
                            </button>

                            {isMuta && openPopup === "muta" && (
                                <Popup
                                    items={mutaItems}
                                    popupRef={popupRef}
                                    show
                                />
                            )}
                            {isMore && openPopup === "more" && (
                                <Popup
                                    items={moreItems}
                                    popupRef={popupRef}
                                    show
                                />
                            )}
                        </div>
                    );
                })}

                <div className="hidden min-[1260px]:block text-xs text-gray-400 mt-6 space-y-1">
                    <p>© 2025 Instagram-Clone by Cadz</p>
                </div>
            </div>
        </aside>
    );

    // --- Mobile Bottom Navigation ---
    const renderMobileNav = () => {
        const mobileMenu = mainMenu.filter(
            (item) => item.name !== "Notifications" && item.name !== "Reels"
        );

        return (
            <nav className="fixed bottom-0 left-0 w-full bg-black border-t border-gray-500/40 flex justify-around items-center py-2 max-[765px]:flex hidden z-50">
                {mobileMenu.map((item, idx) => {
                    const content = (
                        <div className="relative flex flex-col items-center">
                            <item.icon size={24} />
                            {item.badge && (
                                <span className="absolute -top-1 -right-3 bg-red-500 text-[10px] font-bold px-1.5 py-0.5 rounded-full">
                                    {item.badge}
                                </span>
                            )}
                        </div>
                    );

                    if (item.action) {
                        return (
                            <button
                                key={idx}
                                onClick={item.action}
                                className="text-white"
                            >
                                {content}
                            </button>
                        );
                    }

                    return (
                        <NavLink
                            key={idx}
                            to={item.to}
                            className={({ isActive }) =>
                                `text-white ${isActive ? "text-red-500" : ""}`
                            }
                        >
                            {content}
                        </NavLink>
                    );
                })}
            </nav>
        );
    };

    return (
        <>
            {renderSidebar()}
            {renderMobileNav()}
        </>
    );
}
