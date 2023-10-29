import { z } from 'zod';

export const signUpSchema = z.object({
	email: z.string().email(),
	firstName: z.string().min(3),
	lastName: z.string(),
	password: z.string().min(6)
});
