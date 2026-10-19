/**
 * Single source of truth for which external integrations are actually connected.
 * Every value is false until a real provider/backend is wired up and verified.
 * UI must read from here instead of simulating success.
 */
export const integrationStatus = {
  paymentProvider: false,
  liveInventory: false,
  bookingBackend: false,
  messaging: false,
  fleetTelemetry: false,
  dashboardPersistence: false,
} as const;

export type IntegrationKey = keyof typeof integrationStatus;

export const NOT_CONNECTED_MESSAGE: Record<IntegrationKey, string> = {
  paymentProvider: 'Online payment is not connected yet. No card will be charged and no reservation is created.',
  liveInventory: 'Live availability is not connected. Vehicle availability shown is sample data and is not verified.',
  bookingBackend: 'Booking requests are not stored yet. Your details stay saved on this device only.',
  messaging: 'Online messaging is not connected yet. Your message has not been sent.',
  fleetTelemetry: 'Live fleet data is not connected. Figures and map markers are sample data.',
  dashboardPersistence: 'Demo mode: changes here are not saved to any system.',
};
