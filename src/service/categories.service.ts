import { StoreCategoriesRequest, UpdateCategoriesRequest } from '../schema/categories/request.schema';
import { destroyCategoriesResponse, getCategoriesResponse, storeCategoriesResponse, updateCategoriesResponse } from '../schema/categories/response.schema';
import prisma from '../utils/prisma.utils';

export default class Categorieservice {
    async getCategories(): Promise<getCategoriesResponse> {
        const categories = await prisma.categories.findMany({
            select: {
                id: true,
                nameCategories: true,
                createdAt: true,
                updatedAt: true
            }
        });
        return categories;
    }

    async storeCategories(data: StoreCategoriesRequest): Promise<storeCategoriesResponse> {
        const categories = await prisma.categories.create({
            data: {
                nameCategories: data.nameCategories
            },
            select: {
                id: true,
                nameCategories: true,
                createdAt: true,
                updatedAt: true
            }
        })
        return categories;
    }

    async updateCategories(id: string, data: UpdateCategoriesRequest): Promise<updateCategoriesResponse> {
        const categories = await prisma.categories.update({
            where: {
                id: id
            },
            data: {
                nameCategories: data.nameCategories
            },
            select: {
                id: true,
                nameCategories: true,
                createdAt: true,
                updatedAt: true
            }
        })
        return categories;
    }

    async destroyCategories(id: string): Promise<destroyCategoriesResponse> {
        const categories = await prisma.categories.delete({
            where: {
                id: id
            },
            select: {
                id: true,
                nameCategories: true,
                createdAt: true,
                updatedAt: true
            }
        })
        return categories;
    }
}