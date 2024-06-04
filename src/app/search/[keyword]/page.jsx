import React from "react";
import { apiDataAnime } from "@/libs/api";
import AnimeList from "@/components/AnimeList";
import HeaderMenu from "@/components/Utilities/HeaderMenu";

export default async function page({ params }) {
  const { keyword } = params;
  const decodedKeyword = decodeURI(keyword);
  const searchAnime = await apiDataAnime("anime", `q=${decodedKeyword}`);

  return (
    <>
      <section>
        <HeaderMenu title={`Anime ${decodedKeyword}`} />
        <AnimeList api={searchAnime} />
      </section>
    </>
  );
}
