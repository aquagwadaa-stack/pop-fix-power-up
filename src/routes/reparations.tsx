import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/reparations")({
  beforeLoad: () => {
    throw redirect({ to: "/services" });
  },
});
