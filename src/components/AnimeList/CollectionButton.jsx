"use client";
import React from "react";
import { useRouter } from "next/navigation";

export default function CollectionButton({
  user_email,
  anime_id,
  anime_title,
  anime_image,
  collection,
}) {
  const router = useRouter();

  const handleCollection = async (event) => {
    event.preventDefault();
    const data = { user_email, anime_id, anime_title, anime_image };
    const response = await fetch("/api/v1/collection", {
      method: "POST",
      body: JSON.stringify(data),
    });
    const collection = await response.json();
    if (collection.isCreated) {
      router.refresh();
    }
    return;
  };

  return (
    <div>
      {collection ? (
        <button
          disabled
          className="px-3 py-1 rounded bg-[#B48205] text-[#362B10]"
        >
          Added To Collection
        </button>
      ) : (
        <button
          onClick={handleCollection}
          className="px-3 py-1 bg-color-accent rounded"
        >
          Add To Collection
        </button>
      )}
    </div>
  );
}
