import React, { useState, useRef, useLayoutEffect } from "react";
import { Link } from "react-router-dom";
import { gsap } from "gsap";
import { FaFacebookSquare, FaLock, FaUser } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function Signup() {
    const [formData, setFormData] = useState({
        email: "",
        password: "",
        fullname: "",
        username: "",
    });

    const cardRef = useRef(null); // main signup card
    const footerRef = useRef(null); // bottom "Have an account?" card

    const handleChange = (e) => {
        setFormData((s) => ({ ...s, [e.target.name]: e.target.value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const res = await fetch("/signup", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "X-CSRF-TOKEN": document
                        .querySelector('meta[name="csrf-token"]')
                        .getAttribute("content"),
                },
                body: JSON.stringify(formData),
            });

            if (!res.ok) throw new Error("Signup failed");
            const data = await res.json();
            console.log("Signup success:", data);
            // maybe redirect to home or login
        } catch (err) {
            console.error(err);
        }
    };

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

            // Main card animation
            tl.from(cardRef.current, {
                autoAlpha: 0,
                y: 20,
                scale: 0.98,
                duration: 0.5,
            });

            // Footer animation
            tl.from(footerRef.current, {
                autoAlpha: 0,
                y: 16,
                duration: 0.4,
            });
        });

        return () => ctx.revert();
    }, []);

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-black text-white">
            {/* Main card */}
            <div
                ref={cardRef}
                className="w-full max-w-sm border border-gray-800 rounded-lg bg-black p-6"
            >
                {/* Logo */}
                <div className="flex justify-center mb-6">
                    <img
                        src="/images/instagram-text.png"
                        alt="Instagram"
                        className="w-40"
                    />
                </div>

                <p className="text-gray-300 text-center text-sm mb-4">
                    Sign up to see photos and videos from your friends.
                </p>

                {/* Facebook Login */}
                <button className="w-full flex items-center justify-center gap-2 bg-blue-600 text-white py-2 rounded-lg font-semibold mb-4 hover:bg-blue-700 transition">
                    <FaFacebookSquare />
                    Log in with Facebook
                </button>

                {/* Divider */}
                <div className="flex items-center my-4">
                    <div className="flex-1 h-px bg-gray-700" />
                    <span className="px-3 text-xs text-gray-500 font-medium">
                        OR
                    </span>
                    <div className="flex-1 h-px bg-gray-700" />
                </div>

                {/* Form */}
                <form className="space-y-3" onSubmit={handleSubmit}>
                    <div className="relative">
                        <MdEmail className="absolute left-3 top-3 text-gray-400" />
                        <input
                            type="text"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Mobile Number or Email"
                            className="w-full pl-10 pr-3 py-2 text-sm border rounded bg-zinc-900 border-zinc-700 focus:outline-none focus:border-gray-500"
                        />
                    </div>

                    <div className="relative">
                        <FaLock className="absolute left-3 top-3 text-gray-400" />
                        <input
                            type="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            placeholder="Password"
                            className="w-full pl-10 pr-3 py-2 text-sm border rounded bg-zinc-900 border-zinc-700 focus:outline-none focus:border-gray-500"
                        />
                    </div>

                    <div className="relative">
                        <FaUser className="absolute left-3 top-3 text-gray-400" />
                        <input
                            type="text"
                            name="fullname"
                            value={formData.fullname}
                            onChange={handleChange}
                            placeholder="Full Name"
                            className="w-full pl-10 pr-3 py-2 text-sm border rounded bg-zinc-900 border-zinc-700 focus:outline-none focus:border-gray-500"
                        />
                    </div>

                    <div className="relative">
                        <FaUser className="absolute left-3 top-3 text-gray-400" />
                        <input
                            type="text"
                            name="username"
                            value={formData.username}
                            onChange={handleChange}
                            placeholder="Username"
                            className="w-full pl-10 pr-3 py-2 text-sm border rounded bg-zinc-900 border-zinc-700 focus:outline-none focus:border-gray-500"
                        />
                    </div>

                    <p className="text-xs text-gray-400 text-center leading-relaxed">
                        People who use our service may have uploaded your
                        contact information to Instagram.{" "}
                        <span className="text-blue-500 cursor-pointer hover:underline">
                            Learn More
                        </span>
                    </p>

                    <p className="text-xs text-gray-400 text-center leading-relaxed">
                        By signing up, you agree to our{" "}
                        <span className="text-blue-500 cursor-pointer hover:underline">
                            Terms
                        </span>
                        ,{" "}
                        <span className="text-blue-500 cursor-pointer hover:underline">
                            Privacy Policy
                        </span>{" "}
                        and{" "}
                        <span className="text-blue-500 cursor-pointer hover:underline">
                            Cookies Policy
                        </span>
                        .
                    </p>

                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white py-2 rounded-lg text-sm font-semibold hover:bg-blue-700 transition"
                    >
                        Sign up
                    </button>
                </form>
            </div>

            {/* Footer card */}
            <div
                ref={footerRef}
                className="w-full max-w-sm border border-gray-800 rounded-lg bg-black p-4 mt-4 text-center"
            >
                <p className="text-sm text-gray-300">
                    Have an account?{" "}
                    <Link
                        to="/"
                        className="text-blue-500 font-semibold hover:underline"
                    >
                        Log in
                    </Link>
                </p>
            </div>
        </div>
    );
}
