import { z } from "zod";

// export const getPostsRequest = z.object({
//     title: z.string(),
//     createdBy: z.string(),
//     content: z.string(),
// });

export const storePostsRequest = z.object({
    title: z.string(),
    content: z.string(),
    category: z.string(),
    status: z.enum(['publish', 'draft'])
});

export const updatePostsRequest = z.object({
    id: z.string(),
    title: z.string(),
    content: z.string(),
    category: z.string(),
    status: z.enum(['publish', 'draft']),
});

export const showPostsRequest = z.object({
    id: z.string(),
});

export const destroyPostsRequest = z.object({
    id: z.string(),
});

// export type GetPostsRequest = z.infer<typeof getPostsRequest>;
export type StorePostsRequest = z.infer<typeof storePostsRequest>;
export type UpdatePostsRequest = z.infer<typeof updatePostsRequest>;
export type ShowPostsRequest = z.infer<typeof showPostsRequest>;
export type DestroyPostsRequest = z.infer<typeof destroyPostsRequest>;
