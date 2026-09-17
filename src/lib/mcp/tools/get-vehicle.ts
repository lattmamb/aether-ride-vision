import { defineTool, ToolError } from "@lovable.dev/mcp-js";
import { z } from "zod";
import { vehicles } from "../../../data/vehicles";

export default defineTool({
  name: "get_vehicle",
  title: "Get vehicle details",
  description:
    "Get full details for one vehicle: pricing, performance, features, available colors and image paths.",
  inputSchema: {
    id: z
      .string()
      .trim()
      .min(1)
      .describe("Vehicle id, for example model-3, model-y or cybertruck."),
  },
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: ({ id }) => {
    const vehicle = vehicles.find((v) => v.id === id.toLowerCase());
    if (!vehicle) {
      throw new ToolError(
        `No vehicle with id "${id}". Known ids: ${vehicles.map((v) => v.id).join(", ")}.`,
      );
    }

    const details = {
      id: vehicle.id,
      model: vehicle.model,
      type: vehicle.type,
      monthlyPrice: vehicle.price,
      priceUnit: vehicle.priceUnit,
      tagline: vehicle.tagline,
      features: vehicle.features,
      performance: vehicle.performance,
      available: vehicle.available,
      colors: vehicle.colors,
      images: vehicle.colorImages ?? { default: vehicle.image },
      detailsPath: `/vehicles/${vehicle.id}`,
    };

    return {
      content: [{ type: "text", text: JSON.stringify(details, null, 2) }],
      structuredContent: { vehicle: details },
    };
  },
});
