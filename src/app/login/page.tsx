import UserLayout from "@/layouts/user-layout";
import { HydrateClient } from "@/trpc/server";

export default function Login() {
  return (
    <HydrateClient>
      <UserLayout>
        <div>login page</div>
      </UserLayout>
    </HydrateClient>
  )
}