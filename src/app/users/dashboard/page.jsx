import React from "react";
import Link from "next/link";
import Image from "next/image";
import { authUserSession } from "@/libs/auth";

export default async function page() {
  const user = await authUserSession();

  return (
    <div className="mt-8 text-color-primary flex flex-col justify-center items-center">
      <h5 className="text-2xl font-bold mb-2">Welcome, {user?.name}</h5>
      <Image
        src={user?.image}
        alt={`Image ${user?.name}`}
        width={250}
        height={250}
      />
      <div className="flex flex-wrap gap-4 py-8">
        <Link
          href={"/users/dashboard/collections"}
          className="bg-color-accent text-color-dark font-bold py-3 px-4 text-xl"
        >
          My Collection
        </Link>
        <Link
          href={"/users/dashboard/comments"}
          className="bg-color-accent text-color-dark font-bold py-3 px-4 text-xl"
        >
          My Comment
        </Link>
      </div>
    </div>
  );
}
