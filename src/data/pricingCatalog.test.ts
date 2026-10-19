import { describe, it, expect } from 'vitest';
import { estimateMonthly, getVehicle, getPlan, isApproved } from './pricingCatalog';

describe('pricing catalog', () => {
  it('is not approved until the owner confirms prices', () => {
    expect(isApproved()).toBe(false);
  });

  it('total is vehicle rate plus plan rate with no added tax or fees', () => {
    const est = estimateMonthly(getVehicle('model-3')!, getPlan('standard')!);
    expect(est.lines).toHaveLength(2);
    expect(est.total).toBe(189 + 129);
  });
});
