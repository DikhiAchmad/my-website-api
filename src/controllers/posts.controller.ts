import { Request, Response } from "express";
import { inject, injectable } from "tsyringe";
import { StatusCodes } from "http-status-codes";
import { wrapError } from "../utils/wrap-error.utils";
import PostsService from "../service/posts.service";
import { DestroyPostsResponse, GetPostsResponse, ShowPostsResponse, StorePostsResponse, UpdatePostsResponse } from "../schema/posts/response.schema";
import { storePostsRequest, updatePostsRequest } from "../schema/posts/request.schema";
import { userProfile } from "../utils/user-profile.utils";

@injectable()
export default class PostsController {
    constructor(@inject(PostsService) public service: PostsService) { }

    async index(req: Request, res: Response) {        
        await wrapError(res, async () => {
            const data = await this.service.getPosts();
            const get_response: GetPostsResponse = {
                message: "Post data has been displayed!",
                data: data
            }
            res.status(StatusCodes.OK).json(get_response);
        });
    }
    
    async store(req: Request, res: Response) {
        await wrapError(res,async () => {
            const get_profil = await userProfile(req);
            const data = storePostsRequest.parse(req.body);
            const store_data = await this.service.storePosts(get_profil.id, data);
            const store_response: StorePostsResponse = {
                message: "Post data has been saved!",
                data: store_data
            }
            res.status(StatusCodes.OK).json(store_response);
        })
    }

    async show(req: Request, res: Response) {        
        await wrapError(res, async () => {
            const params_id = req.params.id;
            const data = await this.service.showPosts(params_id);
            const get_response: ShowPostsResponse = {
                message: "Post data has been displayed!",
                data: data
            }
            res.status(StatusCodes.OK).json(get_response);
        });
    }

    async update(req: Request, res: Response) {
        await wrapError(res,async () => {
            const params_id = req.params.id;

            const get_profil = await userProfile(req);
            const data = updatePostsRequest.parse({
                id: params_id,
                title: req.body.title,
                content: req.body.content
            });
            const update_data = await this.service.updatePosts(params_id, get_profil.id, data);
            const update_response : UpdatePostsResponse = {
                message: "data post has been updated!",
                data: update_data
            }
            res.status(StatusCodes.OK).json(update_response);
        })
    }

    async destroy(req: Request, res: Response) {
        await wrapError(res,async () => {
            const params_id = req.params.id;
            const update_data = await this.service.destroyPosts(params_id);
            const destory_response : DestroyPostsResponse = {
                message: "data post has been deconsted!",
                data: update_data
            }
            res.status(StatusCodes.OK).json(destory_response);
        })
    }
}