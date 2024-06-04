import React from "react";
import Image from "next/image";
import prisma from "@/libs/prisma";
import { apiDataAnime } from "@/libs/api";
import { authUserSession } from "@/libs/auth";
import CommentBox from "@/components/AnimeList/CommentBox";
import VideoPlayer from "@/components/Utilities/VideoPlayer";
import CommentInput from "@/components/AnimeList/CommentInput";
import CollectionButton from "@/components/AnimeList/CollectionButton";

export default async function page({ params: { id } }) {
  const anime = await apiDataAnime(`anime/${id}`);
  const user = await authUserSession();

  const collection = await prisma.collection.findFirst({
    where: { user_email: user?.email, anime_id: id },
  });

  return (
    <>
      <div className="pt-4 px-4">
        <h3 className="text-2xl text-color-primary">{anime.data.title}</h3>
        {user && (
          <CollectionButton
            user_email={user?.email}
            anime_id={id}
            anime_title={anime.data.title}
            anime_image={anime.data.images.webp.image_url}
            collection={collection}
          />
        )}
      </div>
      <div className="pt-4 px-4 flex gap-4 text-color-primary overflow-x-auto">
        <div className="w-44 flex flex-col justify-center items-center text-center rounded border border-color-primary p-2">
          <h3>PERINGKAT</h3>
          <p>{anime.data.rank}</p>
        </div>
        <div className="w-44 flex flex-col justify-center items-center text-center rounded border border-color-primary p-2">
          <h3>SKOR</h3>
          <p>{anime.data.score}</p>
        </div>
        <div className="w-44 flex flex-col justify-center items-center text-center rounded border border-color-primary p-2">
          <h3>POPULARITAS</h3>
          <p>{anime.data.popularity}</p>
        </div>
        <div className="w-44 flex flex-col justify-center items-center text-center rounded border border-color-primary p-2">
          <h3>EPISODE</h3>
          <p>{anime.data.episodes}</p>
        </div>
        <div className="w-44 flex flex-col justify-center items-center text-center rounded border border-color-primary p-2">
          <h3>TAHUN</h3>
          <p>{anime.data.year}</p>
        </div>
        <div className="w-44 flex flex-col justify-center items-center text-center rounded border border-color-primary p-2">
          <h3>STATUS</h3>
          <p>{anime.data.status}</p>
        </div>
        <div className="w-44 flex flex-col justify-center items-center text-center rounded border border-color-primary p-2">
          <h3>DEMOGRAFI</h3>
          <p>{anime.data.demographics[0]?.name}</p>
        </div>
        <div className="w-44 flex flex-col justify-center items-center text-center rounded border border-color-primary p-2">
          <h3>RATING</h3>
          <p>{anime.data.rating}</p>
        </div>
      </div>
      <div className="pt-4 px-4 flex sm:flex-nowrap flex-wrap gap-2 text-color-primary">
        <Image
          src={anime.data.images.webp.image_url}
          alt={`Image ${anime.data.title}`}
          width={250}
          height={250}
          className="w-full rounded object-cover"
        />
        <p className="text-justify text-xl">{anime.data.synopsis}</p>
      </div>
      <div className="p-4">
        <h3 className="text-color-primary text-2xl mb-2">Komentar</h3>
        <CommentBox anime_id={id} />
        {user && (
          <CommentInput
            user_email={user?.email}
            user_name={user?.name}
            anime_id={id}
            anime_title={anime?.data?.title}
          />
        )}
      </div>
      <div>
        <VideoPlayer youtubeId={anime.data.trailer.youtube_id} />
      </div>
    </>
  );
}
