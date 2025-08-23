import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "./Sidebar";
import Stories from "./Stories";
import Rightbar from "./Rightbar";
import Posts from "./Posts";
import SearchDialog from "../../components/navigations/SearchDialog";

// Feed.jsx
export default function Feed() {
    const navigate = useNavigate();
    const [showSearch, setShowSearch] = useState(false);

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (!token) navigate("/");
    }, [navigate]);

    return (
        <div className="flex min-h-screen bg-black text-white">
            <Sidebar showSearch={showSearch} setShowSearch={setShowSearch} />

            <div
                className="flex flex-1 justify-center gap-10 w-full
          max-[765px]:ml-0
          min-[766px]:ml-20
          min-[1260px]:ml-64
          transition-all duration-300"
            >
                <main className="flex-1 w-full max-w-2xl p-4 sm:p-6">
                    <div className="mb-10">
                        {" "}
                        <Stories />
                    </div>
                    <Posts />
                </main>
                <div className="w-80 hidden lg:block">
                    <Rightbar />
                </div>
            </div>

            {/* Render SearchDialog at root */}
            <SearchDialog
                open={showSearch}
                onClose={() => setShowSearch(false)}
                results={[
                    {
                        img: "https://i.pravatar.cc/100?img=12",
                        username: "el0n_rev_musk",
                        name: "Elon Musk • Following",
                    },
                    {
                        img: "https://i.pravatar.cc/100?img=13",
                        username: "tech_guru",
                        name: "Tech Guru • Suggested",
                    },
                    {
                        img: "https://i.pravatar.cc/100?img=14",
                        username: "code_master",
                        name: "Code Master • Following",
                    },
                ]}
            />
        </div>
    );
}
