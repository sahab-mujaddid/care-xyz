"use client";
import React from "react";
import { useRouter } from "next/navigation";

export default function NotFound() {
  const router = useRouter();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-base-200 text-center p-8">
      <h1 className="text-6xl font-extrabold text-primary mb-4">404</h1>
      <h2 className="text-2xl font-semibold mb-2">Page Not Found</h2>
      <p className="text-gray-600 mb-6">
        Sorry, the page you are looking for doesn’t exist or has been moved.
      </p>
      <button
        onClick={() => router.push("/")}
        className="btn btn-primary text-lg font-semibold shadow-md hover:scale-105 transition-transform"
      >
        Go Back Home
      </button>
    </div>
  );
}
