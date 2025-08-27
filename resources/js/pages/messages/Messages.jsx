import React from "react";
import Sidebar from "../../components/navigations/Sidebar";
import Contacts from "./Contacts";
import Conversations from "./Conversations";

export default function Messages() {
    return (
        <div className="flex bg-black text-white h-screen">
            {/* Tablet Sidebar only */}
            <aside className="w-20 bg-black border-r border-gray-700">
                <Sidebar forceTablet />
            </aside>

            {/* Messages Layout */}
            <div className="flex flex-1">
                {/* Contacts list */}
                <div className="w-80 border-r border-gray-700 overflow-y-auto">
                    <Contacts />
                </div>

                {/* Conversation */}
                <div className="flex-1">
                    <Conversations />
                </div>
            </div>
        </div>
    );
}
