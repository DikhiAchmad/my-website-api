import { BaseResponse } from "../base";

export type postsResponse = {
    title: string;
    content: string;
    user: {name: string};
}[];

export type PostsResponse = BaseResponse<postsResponse>;