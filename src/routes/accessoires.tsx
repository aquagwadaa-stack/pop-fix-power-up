import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/accessoires")({
  beforeLoad: () => {
    throw redirect({ to: "/reparations", hash: "accessoires" });
  },
});
