import { BaseResponse } from "../base";

export type getPostsResponse = {
    id: string;
    title: string;
    content: string;
    user: {name: string};
    createdAt: Date;
    updatedAt: Date;
}[];

export type storePostsResponse = {
    id: string;
    title: string;
    content: string;
    user: {
        name: string;
        id: string;
    };
    createdAt: Date;
    updatedAt: Date;
};

export type showPostsResponse = {
    id: string;
    title: string;
    content: string;
    user: {
        name: string;
        id: string;
    };
    createdAt: Date;
    updatedAt: Date;
} | null;

export type updatePostsResponse = {
    id: string;
    title: string;
    content: string;
    user: {
        name: string;
        id: string;
    };
    createdAt: Date;
    updatedAt: Date;
};

export type destroyPostsResponse = {
    id: string;
    title: string;
    content: string;
    user: {
        name: string;
        id: string;
    };
    createdAt: Date;
    updatedAt: Date;
};

export type GetPostsResponse = BaseResponse<getPostsResponse>;
export type StorePostsResponse = BaseResponse<storePostsResponse>;
export type ShowPostsResponse = BaseResponse<showPostsResponse>;
export type UpdatePostsResponse = BaseResponse<updatePostsResponse>;
export type DestroyPostsResponse = BaseResponse<destroyPostsResponse>;