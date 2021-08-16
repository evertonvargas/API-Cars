import { Request, Response } from "express";
import { CreateCategoryService } from "./CreateCategoryServices";

export class CreateCategoryController {

  constructor(private createCategoryService: CreateCategoryService) { }

  handle(request: Request, response: Response) {
    const { name, description } = request.body;
    const category = this.createCategoryService.execute({ name, description });

    return response.status(201).json(category);
  }
}