"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "../../contexts/AuthContext";
import UserHeader from "../../components/UserHeader";

export default function UserAuth() {
  const { login, register, error: authError } = useAuth();
  const [mode, setMode] = useState<"login" | "register">("login");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email || !password) return;
    const success = mode === "login"
      ? await login(email, password)
      : await register(email, password);
    if (success) {
      setEmail("");
      setPassword("");
      router.push("/user/portal");
    }
  }

  return (
    <div className="min-h-screen flex flex-col bg-gray-50 font-sans">
      <UserHeader />
      <div className="flex-1 flex flex-col items-center justify-center px-2 py-8">
        <div className="w-full max-w-md bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-bold text-center mb-6 text-black">
            {mode === "login" ? "User Login" : "Register"}
          </h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="email"
              placeholder="Email"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 text-black"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              autoComplete="username"
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 text-black"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              autoComplete={mode === "login" ? "current-password" : "new-password"}
            />
            {authError && <div className="text-red-500 text-sm text-center">{authError}</div>}
            <button
              type="submit"
              className="w-full py-2 px-4 bg-indigo-600 text-white rounded-md font-semibold hover:bg-indigo-700"
            >
              {mode === "login" ? "Login" : "Register"}
            </button>
          </form>
          <div className="mt-4 text-center">
            {mode === "login" ? (
              <span>
                Don&apos;t have an account?{' '}
                <button
                  className="text-indigo-600 hover:underline"
                  onClick={() => setMode("register")}
                >
                  Register
                </button>
              </span>
            ) : (
              <span>
                Already have an account?{' '}
                <button
                  className="text-indigo-600 hover:underline"
                  onClick={() => setMode("login")}
                >
                  Login
                </button>
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
} 