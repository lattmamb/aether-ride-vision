import { existsSync } from "node:fs";
import path from "node:path";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { describe, expect, it } from "vitest";

const pagePath = path.join(process.cwd(), "src/pages/CommonwealthHome.tsx");
const pageModule = "./CommonwealthHome";

describe("CommonwealthHome", () => {
  it("presents UnityLink Commonwealth as the product and exposes its operating spine", async () => {
    expect(existsSync(pagePath), "CommonwealthHome.tsx must exist").toBe(true);

    const { CommonwealthHomeContent } = await import(/* @vite-ignore */ pageModule);

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

    const dashboardLinks = screen.getAllByRole("link", { name: /Open operator dashboard/i });
    expect(dashboardLinks.some((link) => link.getAttribute("href") === "/dashboard")).toBe(true);

    const mobilityLinks = screen.getAllByRole("link", { name: /Access mobility/i });
    expect(mobilityLinks.some((link) => link.getAttribute("href") === "/vehicles")).toBe(true);
  });
});
