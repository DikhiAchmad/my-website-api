import { type Request, type Response } from "express";
import { inject, injectable } from "tsyringe";
import { StatusCodes } from "http-status-codes";
import { wrapError } from "../utils/wrap-error.utils";
import PostsService from "../service/posts.service";
import { PostsResponse } from "../schema/posts/response.schema";

@injectable()
export default class PostsController {
    constructor(@inject(PostsService) public service: PostsService) { }

    async get(req: Request, res: Response) {
        await wrapError(res, async () => {
            let getting_data = await this.service.get();
            let get_response: PostsResponse = {
                message: "Post data has been displayed!",
                data: getting_data
            }
            res.status(StatusCodes.OK).json(get_response);
        });
    }

}