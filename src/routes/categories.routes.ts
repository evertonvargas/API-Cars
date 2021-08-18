import { CategoryRepository } from '../modules/cars/repositories/implementations/CategoryRepository';
import { Router } from "express";
import { createCategoryController } from '../modules/cars/useCases/createCategory';
import { listCategoryController } from '../modules/cars/useCases/listCategory';

export const categoriesRoutes = Router();

categoriesRoutes.post("/", (request, response) => {
  return createCategoryController.handle(request, response);
})

categoriesRoutes.get("/", (request, response)=>{
  return listCategoryController.handle(request, response);
})