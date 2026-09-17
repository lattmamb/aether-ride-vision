import { defineTool } from "@lovable.dev/mcp-js";
import { subscriptionPlans } from "../../../data/vehicles";

export default defineTool({
  name: "list_subscription_plans",
  title: "List subscription plans",
  description:
    "List the public subscription plans, including price, commitment length, mileage allowance and included features.",
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => ({
    content: [{ type: "text", text: JSON.stringify(subscriptionPlans, null, 2) }],
    structuredContent: { plans: subscriptionPlans },
  }),
});
