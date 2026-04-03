"use client";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function withAuth(Component) {
  return function ProtectedPage(props) {
    const { data: session, status } = useSession();
    const router = useRouter();

    useEffect(() => {
      if (status === "unauthenticated") {
        router.replace("/login"); 
      }
    }, [status, router]);

    if (status === "loading") {
      return <p className="text-center mt-10">Checking authentication...</p>;
    }

   return session ? <Component {...props} user={session.user} /> : null;

  };
}
