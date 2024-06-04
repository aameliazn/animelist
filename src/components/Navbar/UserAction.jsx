import React from "react";
import Link from "next/link";
import { authUserSession } from "@/libs/auth";

export default async function UserAction() {
  const user = await authUserSession();

  const actionLabel = user ? "Sign Out" : "Sign In";
  const actionURL = user ? "/api/auth/signout" : "/api/auth/signin";

  return (
    <div className="flex justify-between gap-3">
      {user ? (
        <Link href={"/users/dashboard"} className="py-1">
          Dashboard
        </Link>
      ) : null}
      <Link
        href={actionURL}
        className="bg-color-dark text-color-accent py-1 px-6 rounded inline-block"
      >
        {actionLabel}
      </Link>
    </div>
  );
}
