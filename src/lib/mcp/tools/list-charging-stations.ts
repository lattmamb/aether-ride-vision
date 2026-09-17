import { defineTool } from "@lovable.dev/mcp-js";
import { chargingStations } from "../../../data/vehicles";

export default defineTool({
  name: "list_charging_stations",
  title: "List charging stations",
  description:
    "List the public charging stations with address, coordinates, charger availability and charging speed.",
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => {
    const stations = chargingStations.map((s) => ({
      id: s.id,
      name: s.name,
      address: s.address,
      latitude: s.location.lat,
      longitude: s.location.lng,
      availableChargers: s.available,
      totalChargers: s.total,
      chargingSpeedKw: s.chargingSpeed,
    }));
    return {
      content: [{ type: "text", text: JSON.stringify(stations, null, 2) }],
      structuredContent: { stations },
    };
  },
});
