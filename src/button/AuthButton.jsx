"use client";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import React from "react";

const AuthButton = () => {
  const { status } = useSession();

  return (
    <div>
      {status === "authenticated" ? (
        <>
          <button onClick={() => signOut()} className="btn btn-outline text-primary">
            Logout
          </button>
        </>
      ) : (
        <>
          <Link href="/login" className="btn btn-outline text-primary">
            Login/Register
          </Link>
        </>
      )}
    </div>
  );
};

export default AuthButton;