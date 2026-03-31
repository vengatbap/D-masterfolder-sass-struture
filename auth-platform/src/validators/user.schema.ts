// User schema placeholder
import { z } from 'zod';

export const userSchema = z.object({
  email: z.string().email(),
  firstName: z.string().optional(),
  lastName: z.string().optional(),
});