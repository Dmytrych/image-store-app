import {Request} from "express";

type UploadImageParams = {
  folder: string;
  item: string;
}

export type UploadImageRequestType = Request<UploadImageParams, {}, {}>