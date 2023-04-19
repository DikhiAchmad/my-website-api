import { postsResponse, PostsResponse } from '../schema/posts/response.schema';
import prisma from '../utils/prisma.utils';

export default class PostsService {
    async get(): Promise<postsResponse> {
        const posts = await prisma.posts.findMany(
            {
                select: {
                    title: true,
                    content: true,
                    user: {
                        select: {
                            name: true
                        }
                    }
                }
            }
        );
        return posts;
    }
}