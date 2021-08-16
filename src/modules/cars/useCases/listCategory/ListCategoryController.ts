import { ListCategoryUseCase } from './ListCategoryUseCase';
import {Request, Response} from "express";

export class ListCategoryCategoryController{

  constructor(private listCategoryUseCase: ListCategoryUseCase){}

  handle(request: Request, response: Response){
    const all = this.listCategoryUseCase.execute();
    return response.json(all)
  }
}