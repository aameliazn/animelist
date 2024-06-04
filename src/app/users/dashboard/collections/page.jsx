import React from "react";
import Link from "next/link";
import Image from "next/image";
import prisma from "@/libs/prisma";
import { authUserSession } from "@/libs/auth";
import Header from "@/components/Dashboard/Header";

export default async function page() {
  const user = await authUserSession();
  const collection = await prisma.collection.findMany({
    where: { user_email: user?.email },
  });

  return (
    <section className="mt-4 px-4 w-full">
      <Header title={"My Collections"} />
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {collection.map((collection, index) => {
          return (
            <Link
              key={index}
              href={`/anime/${collection?.anime_id}`}
              className="relative"
            >
              <Image
                src={collection?.anime_image}
                alt={`Image ${collection?.anime_title}`}
                width={350}
                height={350}
                className="w-full"
              />
              <div className="absolute bottom-0 flex items-center justify-center w-full bg-color-accent h-16">
                <h5 className="text-xl text-center">
                  {collection?.anime_title}
                </h5>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
