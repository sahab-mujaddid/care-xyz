"use client";
import React, { useState } from "react";
import Link from "next/link";
import { signIn } from "next-auth/react";
import { useSearchParams } from "next/navigation";

export default function LoginPage() {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const params = useSearchParams();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!formData.email || !formData.password) {
      setError("Email and password are required.");
      return;
    }

    
    const callbackUrl = params.get("callbackUrl") || "/";

    const res = await signIn("credentials", {
      email: formData.email,
      password: formData.password,
      callbackUrl,  
      redirect: true 
    });

    if (res?.error) {
      setError("Invalid email or password.");
    }
  };

  return (

    
    <div className="min-h-screen flex justify-center items-center text-center mx-auto">
      <form
        onSubmit={handleLogin}
        className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4"
      >
        <legend className="fieldset-legend text-primary text-2xl font-bold pt-6">
          Login
        </legend>

        {/* Email */}
        <label className="label">Email</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="input input-bordered"
          placeholder="Email"
          required
        />

        {/* Password */}
        <label className="label mt-2">Password</label>
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          className="input input-bordered"
          placeholder="Password"
          required
        />

        {/* Error message */}
        {error && <p className="text-error text-sm mt-2">{error}</p>}

        {/* Login button */}
        <button type="submit" className="btn btn-neutral w-full mt-4">
          Login
        </button>

        {/* Social login */}
        <div className="divider">OR</div>
        <button
          type="button"
          className="btn btn-outline w-full"
          onClick={() =>
            signIn("google", { callbackUrl: params.get("callbackUrl") || "/" })
          }
        >
          Continue with Google
        </button>

        {/* Registration link */}
        <p className="text-center text-sm mt-4">
          Don’t have an account?{" "}
          <span className="text-primary font-semibold cursor-pointer hover:underline">
            <Link href="/register">Register</Link>
          </span>
        </p>
      </form>
    </div>
  );
}