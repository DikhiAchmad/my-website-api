import { Request, Response } from "express";
import { inject, injectable } from "tsyringe";
import { StatusCodes } from "http-status-codes";
import AuthService from "../service/auth.service";
import { wrapError } from "../utils/wrap-error.utils";
import { authRequest } from "../schema/auth/request.shema";
import { AuthResponse } from '../schema/auth/response.schema';

@injectable()
export default class AuthController {
    constructor(@inject(AuthService) public service: AuthService) { }

    async auth(req: Request, res: Response) {
        await wrapError(res, async () => {
            let data = authRequest.parse(req.body);
            let token = await this.service.login(data);
            let auth_response: AuthResponse = {
                message: "Login Succesfully!",
                data: token
            }
            res.status(StatusCodes.OK).json(auth_response);
        });
    }

}