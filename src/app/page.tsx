// import { headers } from "next/headers";
// import Link from "next/link";
// import { redirect } from "next/navigation";

// import { LatestPost } from "@/app/_components/post";
// import { auth } from "@/server/better-auth";
import { getSession } from "@/server/better-auth/server";
import { api, HydrateClient } from "@/trpc/server";

export default async function Home() {
  const session = await getSession();

  if (session) {
    void api.post.getLatest.prefetch();
  }

  return (
    <HydrateClient>
      <main className="text-4xl font-bricolage">Faatul Baari Islamic School</main>
    </HydrateClient>
  );
}
