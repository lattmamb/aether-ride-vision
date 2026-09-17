import { defineTool } from "@lovable.dev/mcp-js";
import { z } from "zod";
import { vehicles } from "@/data/vehicles";

export default defineTool({
  name: "list_vehicles",
  title: "List vehicles",
  description:
    "List the electric vehicles available for subscription, with monthly price, range and body type.",
  inputSchema: {
    type: z
      .enum(["sedan", "suv", "truck", "sports"])
      .optional()
      .describe("Only return vehicles of this body type."),
    maxMonthlyPrice: z
      .number()
      .positive()
      .optional()
      .describe("Only return vehicles at or below this monthly price in USD."),
  },
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: ({ type, maxMonthlyPrice }) => {
    const items = vehicles
      .filter((v) => (type ? v.type === type : true))
      .filter((v) => (maxMonthlyPrice ? v.price <= maxMonthlyPrice : true))
      .map((v) => ({
        id: v.id,
        model: v.model,
        type: v.type,
        monthlyPrice: v.price,
        tagline: v.tagline,
        rangeMiles: v.performance.range,
        available: v.available,
      }));

    return {
      content: [{ type: "text", text: JSON.stringify(items, null, 2) }],
      structuredContent: { vehicles: items },
    };
  },
});
