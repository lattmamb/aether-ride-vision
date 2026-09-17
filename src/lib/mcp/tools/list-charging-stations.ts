import { defineTool } from "@lovable.dev/mcp-js";
import { chargingStations } from "../../../data/vehicles";

export default defineTool({
  name: "list_charging_stations",
  title: "List charging stations",
  description:
    "List the public charging stations with address, coordinates, charger availability and charging speed.",
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => ({
    content: [{ type: "text", text: JSON.stringify(chargingStations, null, 2) }],
    structuredContent: { stations: chargingStations },
  }),
});
