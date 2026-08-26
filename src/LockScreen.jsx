import { useState, useEffect, useRef } from "react";
import "./LockScreen.css";

export default function LockScreen({ onUnlock }) {
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const inputRef = useRef(null);

  // Auto-focus password input on mount
  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const handlePasswordSubmit = (e) => {
    e.preventDefault();
    if (password === "12345678") {
      onUnlock();
    } else {
      setError(true);
      setPassword("");
      setTimeout(() => setError(false), 500); // Shake/Error reset
    }
  };

  return (
    <div className="lock-screen flex flex-col items-center justify-between py-12 h-screen w-screen bg-cover bg-center select-none">
      {/* Top Date & Time */}
      <div className="lock-top text-center text-white space-y-1 mt-4">
        <div className="lock-date text-lg font-medium opacity-90">
          {new Date().toLocaleDateString(undefined, {
            weekday: "long",
            month: "long",
            day: "numeric",
          })}
        </div>
        <div className="lock-time text-7xl font-bold tracking-tight">
          {new Date().toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          })}
        </div>
      </div>

      {/* Bottom Profile & macOS Password Field */}
      <div className="lock-bottom flex flex-col items-center mb-10 w-full max-w-xs">
        <img
          src={`${import.meta.env.BASE_URL}profile.jpg`}
          alt="Shubham Patel"
          className="profile-pic w-24 h-24 rounded-full border-2 border-white/30 object-cover shadow-2xl mb-4"
        />
        <div className="profile-name text-white text-xl font-semibold mb-1">
          Shubham Patel
        </div>

        {/* Password Hint */}
        <div className="text-xs text-gray-300/80 mb-3 font-mono bg-black/30 px-3 py-1 rounded-full backdrop-blur-md">
          Hint: Password = <span className="text-white font-bold">12345678</span>
        </div>

        {/* macOS Style Password Form */}
        <form
          onSubmit={handlePasswordSubmit}
          className={`relative flex items-center w-64 ${
            error ? "animate-shake" : ""
          }`}
        >
          <input
            ref={inputRef}
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-2 text-sm text-center text-white bg-white/20 backdrop-blur-xl border border-white/30 rounded-full outline-none placeholder-gray-300 focus:bg-white/30 transition-all shadow-lg"
          />
          <button
            type="submit"
            className="absolute right-2 p-1.5 rounded-full bg-white/30 hover:bg-white/50 text-white text-xs transition-colors"
          >
            ➔
          </button>
        </form>

        {error && (
          <p className="text-red-400 text-xs mt-2 font-medium">
            Incorrect Password! Try 12345678
          </p>
        )}
      </div>
    </div>
  );
}