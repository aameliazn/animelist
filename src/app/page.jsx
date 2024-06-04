import React from "react";
import AnimeList from "@/components/AnimeList";
import Header from "@/components/AnimeList/Header";
import { apiDataAnime, apiNestedDataAnime, reproduce } from "../libs/api";

export default async function Home() {
  const topAnime = await apiDataAnime("top/anime", "limit=6");
  let recommendedAnime = await apiNestedDataAnime(
    "recommendations/anime",
    "entry"
  );
  recommendedAnime = await reproduce(recommendedAnime, 6);

  return (
    <>
      <section>
        <Header
          title={"Paling Populer"}
          linkTitle={"Lihat Semua"}
          linkHref={"/populer"}
        />
        <AnimeList api={topAnime} />
      </section>
      <section>
        <Header title={"Rekomendasi"} />
        <AnimeList api={recommendedAnime} />
      </section>
    </>
  );
}
