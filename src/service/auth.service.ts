import bcrypt from 'bcryptjs';
import { AuthRequest } from '../schema/auth/request.shema';
import { authResponse } from '../schema/auth/response.schema';
import { generateAccessToken, generateRefreshToken } from '../utils/jwt.utils';
import prisma from '../utils/prisma.utils';

export default class AuthService {
    async login(data: AuthRequest): Promise<authResponse> {
        const user = await prisma.user.findUniqueOrThrow({
            where: { email: data.email },
            select: {
                id: true,
                email: true,
                name: true,
                password: true
            }
        });
        if (!user) throw new Error("User not found");

        // validation password
        const isValidPassword = await bcrypt.compare(data.password, user.password!);
        if (!isValidPassword) throw new Error("Invalid password");

        const accessToken = await generateAccessToken({
            id: user.id,
            email: user.email,
            name: user.name
        });

        const refreshToken = await generateRefreshToken({
            id: user.id,
            email: user.email,
            name: user.name
        });

        return {
            accessToken: accessToken,
            refreshToken: refreshToken
        };
    }
}