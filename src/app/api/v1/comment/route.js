import prisma from "@/libs/prisma";

export async function POST(request) {
  const { user_email, user_name, anime_id, anime_title, comment } =
    await request.json();
  const data = { user_email, user_name, anime_id, anime_title, comment };

  const createComment = await prisma.comment.create({ data });

  if (!createComment) return Response.json({ status: 500, isCreated: false });
  else return Response.json({ status: 200, isCreated: true });
}
