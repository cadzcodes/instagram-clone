import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/auth/Login";
import Signup from "./pages/auth/Signup";
import Feed from "./pages/home/Feed";
import Explore from "./pages/home/Explore";
import Messages from "./pages/messages/Messages";
import React from "react";

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/feed" element={<Feed />} />
                <Route path="/explore" element={<Explore />} />
                <Route path="/messages" element={<Messages />} />
            </Routes>
        </BrowserRouter>
    );
}
