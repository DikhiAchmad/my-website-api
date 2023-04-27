import { destroyPostsResponse, getPostsResponse, showPostsResponse, storePostsResponse, updatePostsResponse } from '../schema/posts/response.schema';
import { StorePostsRequest, UpdatePostsRequest } from '../schema/posts/request.schema';
import prisma from '../utils/prisma.utils';

export default class PostsService {
    async getPosts(): Promise<getPostsResponse> {
        const posts = await prisma.posts.findMany({
            select: {
                id: true,
                title: true,
                content: true,
                status: true,
                categories: {
                    select: {
                        nameCategories: true
                    }
                },
                user: {
                    select: {
                        name: true
                    }
                },
                createdAt: true,
                updatedAt: true
            }
        });
        return posts;
    }

    async storePosts(id_profile: string, data: StorePostsRequest): Promise<storePostsResponse> {
        const posts = await prisma.posts.create({
            data: {
                title: data.title,
                content: data.content,
                status: data.status,
                createdBy: id_profile,
                category: data.category
            },
            select: {
                id: true,
                title: true,
                content: true,
                status: true,
                categories: {
                    select: {
                        nameCategories: true
                    }
                },
                user: {
                    select: {
                        name: true
                    }
                },
                createdAt: true,
                updatedAt: true
            }
        })
        return posts;
    }

    async showPosts(id: string): Promise<showPostsResponse> {
        const posts = await prisma.posts.findUniqueOrThrow({
            where: {
                id: id
            },
            select: {
                id: true,
                title: true,
                content: true,
                status: true,
                categories: {
                    select: {
                        nameCategories: true
                    }
                },
                user: {
                    select: {
                        name: true
                    }
                },
                createdAt: true,
                updatedAt: true
            }
        });
        return posts;
    }

    async updatePosts(id: string, id_profile: string, data: UpdatePostsRequest): Promise<updatePostsResponse> {
        const posts = await prisma.posts.update({
            where: {
                id: id
            },
            data: {
                title: data.title,
                content: data.content,
                status: data.status,
                createdBy: id_profile,
                category: data.category
            },
            select: {
                id: true,
                title: true,
                content: true,
                status: true,
                categories: {
                    select: {
                        nameCategories: true
                    }
                },
                user: {
                    select: {
                        name: true
                    }
                },
                createdAt: true,
                updatedAt: true
            }
        })
        return posts;
    }

    async destroyPosts(id: string): Promise<destroyPostsResponse> {
        const posts = await prisma.posts.delete({
            where: {
                id: id
            },
            select: {
                id: true,
                title: true,
                content: true,
                status: true,
                categories: {
                    select: {
                        nameCategories: true
                    }
                },
                user: {
                    select: {
                        name: true
                    }
                },
                createdAt: true,
                updatedAt: true
            }
        })
        return posts;
    }
}