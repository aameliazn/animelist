import React from "react";

export const apiDataAnime = async (resource, query) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/${resource}?${query}`
  );
  const data = await response.json();
  return data;
};

export const apiNestedDataAnime = async (resource, objectProperty) => {
  const response = await apiDataAnime(resource);
  return response.data.flatMap((item) => item[objectProperty]);
};

export const reproduce = async (data, gap) => {
  const first = ~~(Math.random() * (data.length - gap) + 1);
  const last = first + gap;
  const response = { data: data.slice(first, last) };
  return response;
};
