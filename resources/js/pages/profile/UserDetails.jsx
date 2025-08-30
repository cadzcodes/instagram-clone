// UserDetails.jsx
import React, { useState } from "react";
import { Settings, UserCheck, MoreHorizontal } from "lucide-react";

export default function UserDetails() {
    const [isFollowing, setIsFollowing] = useState(false);

    const userStats = {
        posts: 6,
        followers: 55,
        following: 49,
    };

    const userInfo = {
        username: "ahiamf__",
        displayName: "aya",
        pronouns: "she/her",
        bio: "tiktok: its_ahiaa",
        followedBy: ["ruu_samm_", "micklobinstakin", "3 more"],
    };

    return (
        <div className="w-full">
            {/* Desktop Layout */}
            <div className="hidden md:flex items-start gap-8 lg:gap-16">
                {/* Profile Picture */}
                <div className="flex-shrink-0">
                    <img
                        src="https://i.pravatar.cc/300?img=1"
                        alt={userInfo.username}
                        className="w-32 h-32 lg:w-40 lg:h-40 rounded-full object-cover"
                    />
                </div>

                {/* User Info */}
                <div className="flex-1 min-w-0">
                    {/* Username and Actions */}
                    <div className="flex items-center gap-4 mb-5">
                        <h1 className="text-xl font-light">
                            {userInfo.username}
                        </h1>
                        <button className="bg-gray-700 hover:bg-gray-600 px-4 py-1.5 rounded-lg text-sm font-semibold transition-colors">
                            Edit profile
                        </button>
                        <button className="bg-gray-700 hover:bg-gray-600 px-4 py-1.5 rounded-lg text-sm font-semibold transition-colors">
                            View archive
                        </button>
                        <Settings className="w-6 h-6 cursor-pointer hover:opacity-70 transition-opacity" />
                    </div>

                    {/* Stats */}
                    <div className="flex gap-8 mb-5">
                        <div className="text-center md:text-left">
                            <span className="font-semibold">
                                {userStats.posts}
                            </span>
                            <span className="ml-1 text-gray-300">posts</span>
                        </div>
                        <div className="text-center md:text-left cursor-pointer hover:opacity-70">
                            <span className="font-semibold">
                                {userStats.followers}
                            </span>
                            <span className="ml-1 text-gray-300">
                                followers
                            </span>
                        </div>
                        <div className="text-center md:text-left cursor-pointer hover:opacity-70">
                            <span className="font-semibold">
                                {userStats.following}
                            </span>
                            <span className="ml-1 text-gray-300">
                                following
                            </span>
                        </div>
                    </div>

                    {/* Bio Section */}
                    <div className="space-y-1">
                        <div className="flex items-center gap-2">
                            <p className="font-semibold">
                                {userInfo.displayName}
                            </p>
                            <span className="text-gray-400 text-sm">
                                {userInfo.pronouns}
                            </span>
                        </div>
                        <p className="text-sm">{userInfo.bio}</p>
                        <div className="flex items-center gap-1 text-sm text-gray-400">
                            <span>Followed by</span>
                            {userInfo.followedBy.map((user, index) => (
                                <span key={index}>
                                    <span className="text-white font-medium hover:underline cursor-pointer">
                                        {user}
                                    </span>
                                    {index < userInfo.followedBy.length - 1 &&
                                        ", "}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Mobile Layout */}
            <div className="md:hidden">
                {/* Mobile Header */}
                <div className="flex items-center justify-between mb-4">
                    <h1 className="text-xl font-semibold">
                        {userInfo.username}
                    </h1>
                    <div className="flex items-center gap-3">
                        <Settings className="w-6 h-6 cursor-pointer" />
                        <MoreHorizontal className="w-6 h-6 cursor-pointer" />
                    </div>
                </div>

                {/* Mobile Profile Info */}
                <div className="flex items-center gap-4 mb-4">
                    <img
                        src="https://i.pravatar.cc/300?img=1"
                        alt={userInfo.username}
                        className="w-20 h-20 rounded-full object-cover"
                    />
                    <div className="flex-1">
                        <div className="flex justify-around text-center">
                            <div>
                                <p className="font-semibold text-lg">
                                    {userStats.posts}
                                </p>
                                <p className="text-gray-400 text-sm">posts</p>
                            </div>
                            <div className="cursor-pointer">
                                <p className="font-semibold text-lg">
                                    {userStats.followers}
                                </p>
                                <p className="text-gray-400 text-sm">
                                    followers
                                </p>
                            </div>
                            <div className="cursor-pointer">
                                <p className="font-semibold text-lg">
                                    {userStats.following}
                                </p>
                                <p className="text-gray-400 text-sm">
                                    following
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Mobile Bio */}
                <div className="mb-4 space-y-1">
                    <div className="flex items-center gap-2">
                        <p className="font-semibold">{userInfo.displayName}</p>
                        <span className="text-gray-400 text-sm">
                            {userInfo.pronouns}
                        </span>
                    </div>
                    <p className="text-sm">{userInfo.bio}</p>
                    <div className="flex items-center gap-1 text-sm text-gray-400">
                        <span>Followed by</span>
                        {userInfo.followedBy.map((user, index) => (
                            <span key={index}>
                                <span className="text-white font-medium">
                                    {user}
                                </span>
                                {index < userInfo.followedBy.length - 1 && ", "}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Mobile Action Buttons */}
                <div className="flex gap-2 mb-6">
                    <button className="flex-1 bg-gray-700 hover:bg-gray-600 py-2 rounded-lg text-sm font-semibold transition-colors">
                        Edit profile
                    </button>
                    <button className="flex-1 bg-gray-700 hover:bg-gray-600 py-2 rounded-lg text-sm font-semibold transition-colors">
                        View archive
                    </button>
                </div>
            </div>
        </div>
    );
}
