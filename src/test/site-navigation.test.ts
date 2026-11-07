import { QueryClient } from "@tanstack/react-query";
import { createRouter, rootRouteId } from "@tanstack/react-router";
import { describe, expect, it } from "vitest";

import { routeTree } from "@/routeTree.gen";
import { NAV } from "@/lib/site";
import { enquirySchema } from "@/lib/enquiry-schema";

describe("Door No. 4 navigation", () => {
  const router = createRouter({ routeTree, context: { queryClient: new QueryClient() } });

  it.each([...NAV.map((n) => n.to), "/gallery", "/privacy"])("%s resolves to a real page", (path) => {
    expect(router.matchRoutes(path).at(-1)?.routeId).not.toBe(rootRouteId);
  });
});

describe("Enquiry form validation", () => {
  const valid = {
    kind: "general" as const,
    firstName: "Ana",
    lastName: "Ebanks",
    email: "ana@example.com",
    subject: "General enquiry",
    message: "Could we book for a group of eight?",
  };

  it("accepts a complete enquiry", () => {
    expect(enquirySchema.safeParse(valid).success).toBe(true);
  });

  it("requires a valid email address", () => {
    expect(enquirySchema.safeParse({ ...valid, email: "not-an-email" }).success).toBe(false);
  });

  it("requires a message", () => {
    expect(enquirySchema.safeParse({ ...valid, message: "" }).success).toBe(false);
  });
});
