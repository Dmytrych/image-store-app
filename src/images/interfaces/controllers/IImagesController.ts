import {UploadImageRequestType} from "../../controllers/models";
import {Response} from "express";

export interface IImagesController {
  upload(req: UploadImageRequestType, res: Response): void;
}