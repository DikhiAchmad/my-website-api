import { z } from "zod";

export const getCategoriesRequest = z.object({
    nameCategories: z.string(),
});

export const storeCategoriesRequest = z.object({
    nameCategories: z.string(),
});

export const updateCategoriesRequest = z.object({
    id: z.string(),
    nameCategories: z.string(),
});

export const destroyCategoriesRequest = z.object({
    id: z.string(),
});

export type GetCategoriesRequest = z.infer<typeof getCategoriesRequest>;
export type StoreCategoriesRequest = z.infer<typeof storeCategoriesRequest>;
export type UpdateCategoriesRequest = z.infer<typeof updateCategoriesRequest>;
export type DestroyCategoriesRequest = z.infer<typeof destroyCategoriesRequest>;
