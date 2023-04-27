import { BaseResponse } from "../base";

export type getCategoriesResponse = {
    id: string;
    nameCategories: string;
    createdAt: Date;
    updatedAt: Date;
}[];

export type storeCategoriesResponse = {
    id: string;
    nameCategories: string;
    createdAt: Date;
    updatedAt: Date;
};

export type showCategoriesResponse = {
    id: string;
    nameCategories: string;
    createdAt: Date;
    updatedAt: Date;
} | null;

export type updateCategoriesResponse = {
    id: string;
    nameCategories: string;
    createdAt: Date;
    updatedAt: Date;
};

export type destroyCategoriesResponse = {
    id: string;
    nameCategories: string;
    createdAt: Date;
    updatedAt: Date;
};

export type GetCategoriesResponse = BaseResponse<getCategoriesResponse>;
export type StoreCategoriesResponse = BaseResponse<storeCategoriesResponse>;
export type ShowCategoriesResponse = BaseResponse<showCategoriesResponse>;
export type UpdateCategoriesResponse = BaseResponse<updateCategoriesResponse>;
export type DestroyCategoriesResponse = BaseResponse<destroyCategoriesResponse>;