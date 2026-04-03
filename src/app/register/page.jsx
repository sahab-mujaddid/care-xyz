"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { signIn } from "next-auth/react";

const RegisterPage = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    nid: "",
    name: "",
    email: "",
    contact: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState("");

  
  const validatePassword = (password) => {
    const regex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
    return regex.test(password);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validatePassword(formData.password)) {
      setError(
        "Password must be at least 6 characters, include 1 uppercase and 1 lowercase letter."
      );
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    try {
      const res = await fetch("/api", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          nid: formData.nid,
          name: formData.name,
          email: formData.email,
          contact: formData.contact,
          password: formData.password,
        }),
      });

      const data = await res.json();

      if (!data.success) {
        setError(data.message);
        return;
      }

      setError("");

  
      const loginRes = await signIn("credentials", {
        email: formData.email,
        password: formData.password,
        redirect: false,
      });

      if (loginRes?.error) {
        setError("Registration succeeded, but login failed.");
        router.push("/login"); 
      } else {
        router.push("/"); 
      }
    } catch (err) {
      setError("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center pb-10">
      <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border -mt-2 p-4">
        <legend className="fieldset-legend text-primary text-2xl font-bold mb-6 pt-20 text-center">
          Registration
        </legend>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* NID */}
          <div className="form-control">
            <label className="label">NID No</label>
            <input
              type="text"
              className="input input-bordered w-full"
              placeholder="Enter your NID number"
              value={formData.nid}
              onChange={(e) =>
                setFormData({ ...formData, nid: e.target.value })
              }
              required
            />
          </div>

          {/* Name */}
          <div className="form-control">
            <label className="label">Name</label>
            <input
              type="text"
              className="input input-bordered w-full"
              placeholder="Enter your name"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              required
            />
          </div>

          {/* Email */}
          <div className="form-control">
            <label className="label">Email</label>
            <input
              type="email"
              className="input input-bordered w-full"
              placeholder="Enter your email"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              required
            />
          </div>

          {/* Contact */}
          <div className="form-control">
            <label className="label">Contact</label>
            <input
              type="text"
              className="input input-bordered w-full"
              placeholder="Enter your contact number"
              value={formData.contact}
              onChange={(e) =>
                setFormData({ ...formData, contact: e.target.value })
              }
              required
            />
          </div>

          {/* Password */}
          <div className="form-control">
            <label className="label">Password</label>
            <input
              type="password"
              className="input input-bordered w-full"
              placeholder="Enter your password"
              value={formData.password}
              onChange={(e) =>
                setFormData({ ...formData, password: e.target.value })
              }
              required
            />
          </div>

          {/* Confirm Password */}
          <div className="form-control">
            <label className="label">Confirm Password</label>
            <input
              type="password"
              className="input input-bordered w-full"
              placeholder="Confirm your password"
              value={formData.confirmPassword}
              onChange={(e) =>
                setFormData({ ...formData, confirmPassword: e.target.value })
              }
              required
            />
          </div>

          {error && (
            <p className="text-error text-sm font-semibold mt-2">{error}</p>
          )}

          <button type="submit" className="btn btn-primary w-full mt-4">
            Register
          </button>
        </form>

        <p className="text-center text-sm mt-4">
          Already have an account?{" "}
          <span className="text-primary font-semibold cursor-pointer hover:underline">
            <Link href={"/login"}>Login</Link>
          </span>
        </p>
      </fieldset>
    </div>
  );
};

export default RegisterPage;