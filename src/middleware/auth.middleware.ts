import { NextFunction, Request, Response } from "express";
import jwt, { TokenExpiredError } from "jwt-promisify";
import { StatusCodes } from "http-status-codes";
import { wrapError } from "../utils/wrap-error.utils";

export function authMiddleware() {
    return async function (req: Request, res: Response, next: NextFunction) {
        await wrapError(res, async () => {
            const tokenWithBearer = req.headers.authorization;

            if (tokenWithBearer === undefined) {
                return res.status(StatusCodes.UNAUTHORIZED).json({
                    message: "Token is required to request this operation.",
                });
            }
            
            try {
                const token = tokenWithBearer.split(" ")[1];
                const decoded = await jwt.verify(token, process.env.JWT_SECRET_KEY!);
                
                res.locals.token = decoded;
                next();
            } catch (error) {
                if (error instanceof TokenExpiredError) {
                    return res.status(StatusCodes.FORBIDDEN).json({ message: "Token expired." });
                }
                const message = error instanceof Error ? error.message : "Internal Server Error";
                return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ message });
            }
        });
    };
}