// Role schema placeholder
import { z } from 'zod';

export const roleSchema = z.object({
  name: z.string().min(1),
  description: z.string().optional(),
});