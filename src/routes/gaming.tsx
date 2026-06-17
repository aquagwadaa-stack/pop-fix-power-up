import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/gaming")({
  beforeLoad: () => {
    throw redirect({ to: "/services", hash: "reparation" });
  },
});
