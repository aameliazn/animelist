import React from "react";
import Link from "next/link";
import prisma from "@/libs/prisma";
import { authUserSession } from "@/libs/auth";
import Header from "@/components/Dashboard/Header";

export default async function page() {
  const user = await authUserSession();
  const comments = await prisma.comment.findMany({
    where: { user_email: user?.email },
  });

  return (
    <section className="w-full mt-4 px-4">
      <Header title={"My Comments"} />
      <div className="grid grid-cols-1 py-2 gap-4">
        {comments?.map((comment) => {
          return (
            <Link
              href={`/anime/${comment?.anime_id}`}
              key={comment?.id}
              className="bg-color-primary p-4"
            >
              <p className="text-sm">{comment?.anime_title}</p>
              <p className="italic">{comment?.comment}</p>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
