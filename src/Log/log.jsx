import "./log.css";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast,ToastContainer } from "react-toastify";

const Login = () => {
    const [isLogin, setIsLogin] = useState(true);
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [mobile, setMobile] = useState('');
    const [email, setMail] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!isLogin) {
            if (!name || !password || !mobile || !email) {
                toast.warning("Please fill all fields");
                return;
            }

            const userData = { name, password, mobile, email };
            localStorage.setItem("user", JSON.stringify(userData));
            toast.success("Registered successfully!");
            setIsLogin(true);
            setName('');
            setPassword('');
            setMobile('');
            setMail('');
        } else {
         
            const storedUser = JSON.parse(localStorage.getItem('user'));
            if (
                storedUser &&
                storedUser.name === name &&
                storedUser.password === password
            ) {
                localStorage.setItem("loginuser", JSON.stringify(storedUser));
                toast.success("Login successful!");
                window.location.href = "/";
                navigate("/");
            } else {
                toast.error("Invalid username or password");
            }
        }
    };

    return (
        <div className="login min-h-screen flex items-center justify-center">
            <div className="bg-white rounded-2xl shadow-lg flex flex-col md:flex-row overflow-hidden w-full max-w-5xl">
                <div className="md:w-1/2 bg-blue-400 flex flex-col justify-center p-10">
                    <h2 className="text-3xl font-bold font-serif">Welcome.....</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                </div>

                <div className="md:w-1/2 p-10">
                    <h1 className="text-2xl font-bold font-serif">
                        {isLogin ? "Login" : "Signup"}
                    </h1>
                    <p className="pt-4 text-xl">Welcome to ByteBolt</p>

                    <form onSubmit={handleSubmit} className="space-y-4 pt-4">
                        <div>
                            <label>User Name</label>
                            <input
                                type="text"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                placeholder="Enter your name"
                                className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>

                        {!isLogin && (
                            <>
                                <div>
                                    <label>Email</label>
                                    <input
                                        type="email"
                                        value={email}
                                        onChange={(e) => setMail(e.target.value)}
                                        placeholder="Enter your email"
                                        className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    />
                                </div>
                                <div>
                                    <label>Mobile Number</label>
                                    <input
                                        type="text"
                                        value={mobile}
                                        onChange={(e) => setMobile(e.target.value)}
                                        placeholder="Enter your mobile number"
                                        className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    />
                                </div>
                            </>
                        )}

                        <div>
                            <label>Password</label>
                            <input
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="Enter your password"
                                className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>

                        <button
                            type="submit"
                            className="w-full h-10 bg-blue-400 hover:bg-blue-600 text-white font-semibold rounded-2xl transition"
                        >
                            {isLogin ? "Login" : "Sign Up"}
                        </button>

                        <p className="text-sm text-center mt-4 mb-0">
                            {isLogin ? "New user?" : "Already have an account?"}{" "}
                            <Link
                                className="text-blue-600 underline cursor-pointer"
                                onClick={() => setIsLogin(!isLogin)}
                            >
                                {isLogin ? "Sign Up" : "Login"}
                            </Link>
                        </p>

                        <p className="text-xs text-blue-400 text-center underline mt-2">
                            Forgot password?
                        </p>
                    </form>
                </div>
            </div>
            <ToastContainer position="top-center" autoClose={1500} />
        </div>
    );
};

export default Login;
