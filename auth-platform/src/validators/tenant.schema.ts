// Tenant schema placeholder
import { z } from 'zod';

export const tenantSchema = z.object({
  name: z.string().min(1),
  domain: z.string().optional(),
});