import { BaseResponse } from "../base";

export type getPostsResponse = {
    id: string;
    title: string;
    content: string;
    status: string;
    createdAt: Date;
    updatedAt: Date;
    categories: {
        nameCategories: string;
    };
    user: {
        name: string;
    };
}[];

export type storePostsResponse = {
    id: string;
    title: string;
    content: string;
    status: string;
    createdAt: Date;
    updatedAt: Date;
    categories: {
        nameCategories: string;
    };
    user: {
        name: string;
    };
};

export type showPostsResponse = {
    id: string;
    title: string;
    content: string;
    status: string;
    createdAt: Date;
    updatedAt: Date;
    categories: {
        nameCategories: string;
    };
    user: {
        name: string;
    };
} | null;

export type updatePostsResponse = {
    id: string;
    title: string;
    content: string;
    status: string;
    createdAt: Date;
    updatedAt: Date;
    categories: {
        nameCategories: string;
    };
    user: {
        name: string;
    };
};

export type destroyPostsResponse = {
    id: string;
    title: string;
    content: string;
    status: string;
    createdAt: Date;
    updatedAt: Date;
    categories: {
        nameCategories: string;
    };
    user: {
        name: string;
    };
};

export type GetPostsResponse = BaseResponse<getPostsResponse>;
export type StorePostsResponse = BaseResponse<storePostsResponse>;
export type ShowPostsResponse = BaseResponse<showPostsResponse>;
export type UpdatePostsResponse = BaseResponse<updatePostsResponse>;
export type DestroyPostsResponse = BaseResponse<destroyPostsResponse>;