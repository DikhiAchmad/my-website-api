import { z } from "zod";

export const postsRequest = z.object({
    title: z.string(),
    userId: z.string(),
    content: z.string(),
});

export type PostsRequest = z.infer<typeof postsRequest>;
