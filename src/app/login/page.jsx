import React, { Suspense } from "react";
import LoginForm from "./LoginForm";

export default function Page() {
  return (
    <Suspense fallback={<p className="text-center mt-10">Loading login...</p>}>
      <LoginForm />
    </Suspense>
  );
}
