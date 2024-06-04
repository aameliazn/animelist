import React from "react";
import Link from "next/link";
import UserAction from "./UserAction";
import InputSearch from "./InputSearch";

export default function index() {
  return (
    <header className="bg-color-accent">
      <div className="flex md:flex-row flex-col justify-between md:items-center p-4 gap-2">
        <Link href={"/"} className="font-bold text-2xl">
          ANIME LIST
        </Link>
        <InputSearch />
        <UserAction />
      </div>
    </header>
  );
}
