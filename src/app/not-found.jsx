"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { FileSearch } from "@phosphor-icons/react";

export default function notFound() {
  const router = useRouter();

  return (
    <div className="min-h-96 max-w-xl mx-auto flex justify-center items-center">
      <div className="flex justify-center items-center gap-4 flex-col">
        <div className="flex justify-between items-center gap-2">
          <FileSearch size={43} className="text-color-accent" />
          <h3 className="text-color-accent text-4xl font-bold">NOT FOUND</h3>
        </div>
        <button
          onClick={() => router.back()}
          className="text-color-primary hover:text-color-accent transition-all underline"
        >
          Kembali
        </button>
      </div>
    </div>
  );
}
