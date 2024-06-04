import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function index({ api }) {
  return (
    <div className="grid md:grid-cols-6 sm:grid-cols-3 grid-cols-2 gap-4 px-4">
      {api.data?.map((anime, index) => {
        return (
          <Link
            key={index}
            href={`/anime/${anime.mal_id}`}
            className="cursor-pointer text-color-primary hover:text-color-accent transition-all"
          >
            <Image
              src={anime.images.webp.image_url}
              height={350}
              width={350}
              alt={`Image ${anime.title}`}
              className="w-full max-h-60 object-cover rounded"
            />
            <h3 className="font-bold text-md p-4">{anime.title}</h3>
          </Link>
        );
      })}
    </div>
  );
}
