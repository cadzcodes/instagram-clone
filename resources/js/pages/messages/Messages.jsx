// pages/messages/Messages.jsx
import React from "react";
import Sidebar from "../../components/navigations/Sidebar";
import Contacts from "./Contacts";
import Conversations from "./Conversations";

export default function Messages() {
    return (
        <div className="flex bg-black text-white h-screen">
            {/* Sidebar - always show for desktop/tablet, mobile nav for mobile */}
            <Sidebar forceTablet />

            {/* Messages Layout */}
            <div className="flex flex-1 ml-0 md:ml-20">
                {/* Desktop Contacts list (full width) */}
                <div className="hidden lg:block w-[350px] xl:w-[380px] border-r border-gray-400/30 overflow-y-auto">
                    <Contacts />
                </div>

                {/* Tablet/Mobile Contacts (just circles, centered) */}
                <div className="flex lg:hidden w-20 border-r border-gray-400/30">
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
