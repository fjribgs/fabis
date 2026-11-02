import UserLayout from "@/layouts/user-layout";
import { HydrateClient } from "@/trpc/server";
import LoginIndex from "@/app/_components/login/login-index";

export default function Login() {
  return (
    <HydrateClient>
      <UserLayout>
        <LoginIndex />
      </UserLayout>
    </HydrateClient>
  )
}