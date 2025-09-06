"use client";

import { useState } from "react";
import Nav from "./components/nav";
import AuthScreen from "./components/account";

export default function Home() {
  const [view, setView] = useState("home"); // home | auth | studentDashboard | teacherDashboard
  const [userRole, setUserRole] = useState(null);

  const handleAuthOpen = () => setView("auth");
  const handleBackToHome = () => setView("home");

  const handleLoginSuccess = (role) => {
    setUserRole(role);
    if (role === "student") setView("studentDashboard");
    else if (role === "teacher") setView("teacherDashboard");
  };

  return (
    <div className="w-screen min-h-screen bg-white flex flex-col">
      <Nav onAuthOpen={handleAuthOpen} />

      <main className="flex-grow flex flex-col items-center justify-center px-4 text-center">
        {view === "home" && (
          <>
            <h1 className="text-5xl font-extrabold text-blue-800 mb-6">
              Welcome to EduQuest
            </h1>
            <p className="text-lg max-w-xl mb-8">
              Track your progress, earn points, and customize your character!
            </p>
            <button
              onClick={handleAuthOpen}
              className="px-6 py-3 bg-blue-700 text-white rounded-md hover:bg-blue-800 transition"
            >
              Get Started
            </button>
          </>
        )}

        {view === "auth" && (
          <AuthScreen
            onBack={handleBackToHome}
            onLoginSuccess={handleLoginSuccess}
          />
        )}
      </main>
    </div>
  );
}
