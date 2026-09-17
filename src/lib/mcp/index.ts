import { defineMcp } from "@lovable.dev/mcp-js";
import listVehiclesTool from "./tools/list-vehicles";
import getVehicleTool from "./tools/get-vehicle";
import listSubscriptionPlansTool from "./tools/list-subscription-plans";
import listChargingStationsTool from "./tools/list-charging-stations";

export default defineMcp({
  name: "aether-ride-vision",
  title: "aether-ride-vision",
  version: "0.1.0",
  instructions:
    "Public tools for the Aether Ride Vision electric vehicle subscription service. Use `list_vehicles` to browse the fleet, `get_vehicle` for full details on one model, `list_subscription_plans` for pricing tiers, and `list_charging_stations` for charging locations. All data is public catalog information; no user accounts or bookings are exposed.",
  tools: [
    listVehiclesTool,
    getVehicleTool,
    listSubscriptionPlansTool,
    listChargingStationsTool,
  ],
});
