import React from "react";
import Link from "next/link";

export default function Header({ title, linkTitle, linkHref }) {
  return (
    <div className="flex justify-between items-center p-4">
      <h1 className="text-2xl font-bold text-color-primary">{title}</h1>
      {linkTitle && linkHref ? (
        <Link
          href={linkHref}
          className="md:text-base text-sm underline text-color-primary hover:text-color-accent transition-all"
        >
          {linkTitle}
        </Link>
      ) : null}
    </div>
  );
}
