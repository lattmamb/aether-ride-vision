import { vehicles, subscriptionPlans } from './vehicles';
import type { Vehicle, SubscriptionPlan } from '../types';

/**
 * Centralized pricing catalog. Every price in the UI must come from here.
 *
 * Approval status: owner-supplied documents conflict on prices, deposits,
 * mileage, insurance and charging terms. Nothing is approved yet, so every
 * entry is 'pending_confirmation' and must never be presented as a
 * purchasable offer. Flip to 'approved' only after owner sign-off.
 */
export type ApprovalStatus = 'approved' | 'pending_confirmation';

export const CATALOG_STATUS: ApprovalStatus = 'pending_confirmation';
export const PENDING_LABEL = 'Pending confirmation';
export const PENDING_EXPLANATION =
  'Prices and plan terms are illustrative and pending confirmation. They are not a quote or an offer you can purchase yet.';

export interface PriceLine {
  label: string;
  amount: number;
}

export interface MonthlyEstimate {
  lines: PriceLine[];
  total: number;
  status: ApprovalStatus;
  /** Taxes, deposits, delivery and fees are not defined in an approved catalog. */
  excludes: string[];
}

export const isApproved = () => CATALOG_STATUS === 'approved';

export const getVehicle = (id?: string): Vehicle | undefined =>
  vehicles.find((v) => v.id === id || v.model.toLowerCase() === id?.toLowerCase());

export const getPlan = (id?: string): SubscriptionPlan | undefined => subscriptionPlans.find((p) => p.id === id);

/**
 * Explicit arithmetic: vehicle monthly rate + plan monthly rate.
 * No tax, delivery or fee lines are added because none are approved.
 */
export function estimateMonthly(vehicle: Vehicle, plan: SubscriptionPlan): MonthlyEstimate {
  const lines: PriceLine[] = [
    { label: `${vehicle.model} vehicle rate`, amount: vehicle.price },
    { label: `${plan.name} plan rate`, amount: plan.price },
  ];
  return {
    lines,
    total: lines.reduce((sum, l) => sum + l.amount, 0),
    status: CATALOG_STATUS,
    excludes: ['Taxes', 'Deposit', 'Delivery', 'Insurance terms', 'Charging terms', 'Mileage terms'],
  };
}

export const formatUSD = (n: number) => `$${n.toLocaleString('en-US', { minimumFractionDigits: 0, maximumFractionDigits: 2 })}`;

export { vehicles, subscriptionPlans };
