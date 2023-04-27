import { Request, Response } from "express";
import { inject, injectable } from "tsyringe";
import { StatusCodes } from "http-status-codes";
import { wrapError } from "../utils/wrap-error.utils";
import CategoriesService from "../service/categories.service";
import { DestroyCategoriesResponse, GetCategoriesResponse, StoreCategoriesResponse, UpdateCategoriesResponse } from "../schema/categories/response.schema";
import { storeCategoriesRequest, updateCategoriesRequest } from "../schema/categories/request.schema";

@injectable()
export default class CategoriesController {
    constructor(@inject(CategoriesService) public service: CategoriesService) { }

    async index(req: Request, res: Response) {        
        await wrapError(res, async () => {
            const data = await this.service.getCategories();
            const get_response: GetCategoriesResponse = {
                message: "categories data has been displayed!",
                data: data
            }
            res.status(StatusCodes.OK).json(get_response);
        });
    }
    
    async store(req: Request, res: Response) {
        await wrapError(res,async () => {
            const data = storeCategoriesRequest.parse(req.body);
            const store_data = await this.service.storeCategories(data);
            const store_response: StoreCategoriesResponse = {
                message: "categories data has been saved!",
                data: store_data
            }
            res.status(StatusCodes.OK).json(store_response);
        })
    }

    async update(req: Request, res: Response) {
        await wrapError(res,async () => {
            const params_id = req.params.id;
            const data = updateCategoriesRequest.parse({
                id: params_id,
                nameCategories: req.body.nameCategories
            });
            const update_data = await this.service.updateCategories(params_id, data);
            const update_response : UpdateCategoriesResponse = {
                message: "data categories has been updated!",
                data: update_data
            }
            res.status(StatusCodes.OK).json(update_response);
        })
    }

    async destroy(req: Request, res: Response) {
        await wrapError(res,async () => {
            const params_id = req.params.id;
            const update_data = await this.service.destroyCategories(params_id);
            const destory_response : DestroyCategoriesResponse = {
                message: "data categories has been deconsted!",
                data: update_data
            }
            res.status(StatusCodes.OK).json(destory_response);
        })
    }
}