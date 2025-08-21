import React, { useState, useRef, useEffect } from "react";
import { gsap } from "gsap";
import { FaFacebook } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import AlertDialog from "../../components/reusables/AlertDialog";
import { Eye, EyeOff } from "lucide-react";

export default function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [alert, setAlert] = useState(null);
    const [showPassword, setShowPassword] = useState(false);

    const navigate = useNavigate();

    const leftRef = useRef(null);
    const rightRef = useRef(null);
    const formElementsRef = useRef([]);
    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");
        setLoading(true);

        try {
            const res = await fetch("/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "X-CSRF-TOKEN": document.querySelector(
                        'meta[name="csrf-token"]'
                    ).content,
                },
                body: JSON.stringify({ email: username, password }),
            });

            if (!res.ok) {
                const data = await res.json();
                throw new Error(data.error || "Login failed");
            }

            const data = await res.json();
            localStorage.setItem("token", data.token);

            // Show success state
            setSuccess(true);

            // Navigate after a short delay
            setTimeout(() => {
                navigate("/feed");
            }, 1000);
        } catch (err) {
            setAlert({ type: "error", message: err.message });
            setLoading(false);
        }
    };

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (token) {
            navigate("/feed");
        }

        // Only one GSAP context, animate after refs exist
        const ctx = gsap.context(() => {
            const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

            if (leftRef.current && rightRef.current) {
                tl.from(leftRef.current, {
                    x: -100,
                    opacity: 0,
                    duration: 0.8,
                });
                tl.from(
                    rightRef.current,
                    { x: 100, opacity: 0, duration: 0.8 },
                    "-=0.5"
                );
            }
        });

        return () => ctx.revert();
    }, [navigate]);

    return (
        <div className="min-h-screen flex flex-col bg-black">
            {alert && (
                <AlertDialog
                    type={alert.type}
                    message={alert.message}
                    onClose={() => setAlert(null)}
                />
            )}

            <div className="flex flex-col md:flex-row gap-3 items-center justify-center flex-1 w-full max-w-6xl mx-auto">
                {/* Left Side */}
                <div
                    ref={leftRef}
                    className="hidden md:flex w-1/2 justify-center relative"
                >
                    <img
                        src="/images/landing-2x.png"
                        alt="Instagram mockup"
                        className="w-72 md:w-96 lg:w-[28rem] xl:w-[32rem] relative z-10"
                    />
                    <div className="absolute bottom-16 right-16 z-20">
                        <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                            ✓
                        </div>
                    </div>
                </div>

                {/* Right Side */}
                <div
                    ref={rightRef}
                    className="w-full md:w-1/2 max-w-sm bg-black p-6 rounded-lg text-white shadow-lg"
                >
                    <img
                        ref={(el) => el && formElementsRef.current.push(el)}
                        src="/images/instagram-text.png"
                        alt="App logo"
                        className="mx-auto mb-6 w-32 h-auto"
                    />

                    <form className="space-y-3" onSubmit={handleSubmit}>
                        <div className="relative">
                            <input
                                type="text"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                className="peer w-full px-3 pt-4 pb-2 text-sm border rounded bg-zinc-900 border-zinc-700 
                                   focus:outline-none focus:ring-0 focus:border-gray-500 placeholder-transparent"
                                placeholder="Username or email"
                                disabled={loading}
                            />
                            <label
                                className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm 
                                   transition-all duration-200 
                                   peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-placeholder-shown:text-gray-500 
                                   peer-focus:top-2 peer-focus:text-xs peer-focus:text-gray-300 
                                   peer-not-placeholder-shown:top-2 peer-not-placeholder-shown:text-xs 
                                   pointer-events-none"
                            >
                                Phone number, username, or email
                            </label>
                        </div>

                        <div className="relative">
                            <input
                                type={showPassword ? "text" : "password"}
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="peer w-full px-3 pt-4 pb-2 text-sm border rounded bg-zinc-900 border-zinc-700 
           focus:outline-none focus:ring-0 focus:border-gray-500 placeholder-transparent pr-10"
                                placeholder="Password"
                                disabled={loading || success}
                            />
                            <label
                                className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm 
           transition-all duration-200 
           peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-placeholder-shown:text-gray-500 
           peer-focus:top-2 peer-focus:text-xs peer-focus:text-gray-300 
           peer-not-placeholder-shown:top-2 peer-not-placeholder-shown:text-xs 
           pointer-events-none"
                            >
                                Password
                            </label>

                            {/* Show icon only if there's text in the password field */}
                            {password && (
                                <div
                                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 cursor-pointer select-none"
                                    onClick={() =>
                                        setShowPassword(!showPassword)
                                    }
                                >
                                    {showPassword ? (
                                        <EyeOff size={18} />
                                    ) : (
                                        <Eye size={18} />
                                    )}
                                </div>
                            )}
                        </div>
                        <button
                            type="submit"
                            className={`w-full py-2 rounded-lg text-sm font-semibold transition flex justify-center items-center ${
                                loading || success
                                    ? "bg-gray-600 cursor-not-allowed"
                                    : "bg-blue-600 hover:bg-blue-700"
                            }`}
                            disabled={loading || success}
                        >
                            {loading ? (
                                <span className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                            ) : success ? (
                                "Logged In Successful"
                            ) : (
                                "Log In"
                            )}
                        </button>
                    </form>

                    {/* Divider */}
                    <div
                        ref={(el) => el && formElementsRef.current.push(el)}
                        className="flex items-center my-6"
                    >
                        <div className="flex-1 h-px bg-gray-700"></div>
                        <span className="px-3 text-xs text-gray-500 font-medium">
                            OR
                        </span>
                        <div className="flex-1 h-px bg-gray-700"></div>
                    </div>

                    {/* Alt login */}
                    <button
                        ref={(el) => el && formElementsRef.current.push(el)}
                        className="w-full flex items-center justify-center gap-2 text-blue-500 text-sm font-semibold mb-4 cursor-pointer"
                    >
                        <FaFacebook size={18} />
                        <span>Log in with Facebook</span>
                    </button>

                    {/* Forgot password */}
                    <p
                        ref={(el) => el && formElementsRef.current.push(el)}
                        className="text-center text-xs text-gray-300 font-bold mt-3 cursor-pointer hover:underline"
                    >
                        Forgot password?
                    </p>

                    {/* Sign Up (inside same box) */}
                    <div
                        ref={(el) => el && formElementsRef.current.push(el)}
                        className="mt-6 pt-4"
                    >
                        <p className="text-sm text-gray-300 text-center">
                            Don&apos;t have an account?{" "}
                            <Link
                                to="/signup"
                                className="text-blue-500 font-semibold cursor-pointer hover:underline"
                            >
                                Sign up
                            </Link>
                        </p>
                    </div>
                </div>
            </div>

            {/* Footer */}
            <footer className="mt-10 mb-6 text-gray-300 text-xs text-center space-y-3">
                <div className="flex flex-wrap justify-center gap-5 px-4">
                    {[
                        "About",
                        "Help",
                        "Press",
                        "API",
                        "Jobs",
                        "Privacy",
                        "Terms",
                        "Locations",
                        "Language",
                        "Meta Verified",
                    ].map((item, index) => (
                        <button
                            key={index}
                            type="button"
                            className="hover:underline focus:outline-none cursor-pointer"
                        >
                            {item}
                        </button>
                    ))}
                </div>
                <p>© 2025 Instagram-Clone by Cadz</p>
            </footer>
        </div>
    );
}
