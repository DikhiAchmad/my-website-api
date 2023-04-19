import jwt from "jwt-promisify";
import { JwtPayload } from "../schema/jwt/jwt-payload";

export const accessTokenUtils = (payload: JwtPayload) => {
    return jwt.sign(payload, process.env.JWT_SECRET_KEY!, {
        expiresIn: process.env.ACCESS_TOKEN_EXPIRED,
        algorithm: "HS256",
    })
}

export const refreshTokenUtils = (payload: JwtPayload) => {
    return jwt.sign(payload, process.env.JWT_REFRESH_KEY!, {
        expiresIn: process.env.REFRESH_TOKEN_EXPIRED,
        algorithm: "HS256",
    })
}

export const verifyJwtUtils = (token: string) => {
    return jwt.verify(token, process.env.JWT_SECRET_KEY!)
}

export const decodeJwtUtils = (token: string) => {
    return jwt.decode(token)
}