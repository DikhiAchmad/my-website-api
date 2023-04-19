import { type Response } from "express";
import { ZodError } from "zod";
import 'dotenv/config';
import { StatusCodes } from 'http-status-codes';

export const wrapError = async (res: Response, process: Function) => {
    try {
        await process()
    } catch (err: any) {
        if (err instanceof ZodError) {
            res.status(StatusCodes.BAD_REQUEST).json({ message: "invalid request", errors: err.formErrors.fieldErrors });
        } else {
            console.error(err)
            res.status(StatusCodes.BAD_REQUEST).json({ message: err?.message ?? "unknown exception" });
        }
    }
}
