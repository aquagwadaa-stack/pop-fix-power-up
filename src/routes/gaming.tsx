import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/gaming")({
  beforeLoad: () => {
    throw redirect({ to: "/reparations", hash: "consoles-manettes" });
  },
});
