import {UploadImageRequestType} from "./models/create-image-models";
import {IImagesController} from "../interfaces/controllers/IImagesController";
import {Response} from "express";

export default class ImagesController implements IImagesController {
  public upload(req: UploadImageRequestType, res: Response) {

  }
}