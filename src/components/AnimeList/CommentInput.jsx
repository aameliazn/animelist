"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

export default function CommentInput({
  user_email,
  user_name,
  anime_id,
  anime_title,
}) {
  const router = useRouter();

  const [comment, setComment] = useState("");

  const handleInput = (e) => {
    setComment(e.target.value);
  };

  const handlePosting = async (e) => {
    e.preventDefault();
    const data = { user_email, user_name, anime_id, anime_title, comment };
    const response = await fetch("/api/v1/comment", {
      method: "POST",
      body: JSON.stringify(data),
    });
    const postComment = await response.json();
    if (postComment.isCreated) {
      setComment("");
      router.refresh();
    }
    return;
  };

  return (
    <div className="flex flex-col gap-2">
      <textarea
        onChange={handleInput}
        value={comment}
        className="h-32 w-full text-xl p-4"
      />
      <button
        onClick={handlePosting}
        className="w-52 py-2 px-3 bg-color-accent"
      >
        Posting Komentar
      </button>
    </div>
  );
}
