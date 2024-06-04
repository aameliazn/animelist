import React from "react";
import prisma from "@/libs/prisma";

export default async function CommentBox({ anime_id }) {
  const comments = await prisma.comment.findMany({ where: { anime_id } });

  return (
    <div className="grid grid-cols-4 gap-4 mb-4">
      {comments?.map((comment) => {
        return (
          <div key={comment?.id} className="bg-color-primary p-4">
            <p>{comment?.user_name}</p>
            <p>{comment?.comment}</p>
          </div>
        );
      })}
    </div>
  );
}
