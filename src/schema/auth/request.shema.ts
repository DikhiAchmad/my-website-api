import { z } from "zod";

export const authRequest = z.object({
    email: z.string().email(),
    password: z.string().min(8),
});

export type AuthRequest = z.infer<typeof authRequest>;
