import { CategoryRepository } from '../modules/cars/repositories/CategoryRepository';
import { Router } from "express";
import { createCategoryController } from '../modules/cars/useCases/createCategory';

export const categoriesRoutes = Router();

const categoryRepository = new CategoryRepository();

categoriesRoutes.post("/", (request, response) => {
  return createCategoryController.handle(request, response);
})

categoriesRoutes.get("/", (request, response)=>{
  const all = categoryRepository.list();
  return response.json(all)
})