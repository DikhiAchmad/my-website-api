import { BaseResponse } from "../base";

export type authResponse = {
    accessToken: string;
    refreshToken: string;
};

export type AuthResponse = BaseResponse<authResponse>;