import { Request, type Response } from "express";
import { verifyJwtUtils } from "./jwt.utils";

export const userProfile = (req: Request) => {
    const tokenWithBearer = req.headers.authorization;
    const decodeToken = verifyJwtUtils(tokenWithBearer!.split(" ")[1]);
    return decodeToken;
}
