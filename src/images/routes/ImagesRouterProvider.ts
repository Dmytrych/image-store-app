import {IImagesController} from "../interfaces/controllers/IImagesController";
import {IRouterProvider} from "../../common/routing";
import express, {Router} from "express";

export default class ImagesRouterProvider implements IRouterProvider {
  imagesController: IImagesController;

  constructor(imagesController: IImagesController) {
    this.imagesController = imagesController;
  }

  getRouter(): Router {
    const router = express.Router()

    router.put("/", this.imagesController.upload.bind(this.imagesController))

    return router;
  }


}