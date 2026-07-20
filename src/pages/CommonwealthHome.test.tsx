import { existsSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { describe, expect, it } from "vitest";

const pagePath = fileURLToPath(new URL("./CommonwealthHome.tsx", import.meta.url));

describe("CommonwealthHome", () => {
  it("presents UnityLink Commonwealth as the product and exposes its operating spine", async () => {
    expect(existsSync(pagePath), "CommonwealthHome.tsx must exist").toBe(true);

    const { CommonwealthHomeContent } = await import("./CommonwealthHome");

    render(
      <MemoryRouter>
        <CommonwealthHomeContent />
      </MemoryRouter>,
    );

    expect(
      screen.getByRole("heading", { name: /UnityLink Commonwealth/i }),
    ).toBeInTheDocument();

    for (const label of [
      "Member",
      "Series",
      "Assets",
      "Mobility",
      "Energy",
      "Work",
      "Governance",
      "Benefits",
      "Evidence",
    ]) {
      expect(screen.getByText(label, { selector: "h3" })).toBeInTheDocument();
    }

    expect(screen.getByRole("link", { name: /Open operator dashboard/i })).toHaveAttribute(
      "href",
      "/dashboard",
    );
    expect(screen.getByRole("link", { name: /Access mobility/i })).toHaveAttribute(
      "href",
      "/vehicles",
    );
  });
});
