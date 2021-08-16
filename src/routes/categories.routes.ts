import { CreateCategoryService } from '../modules/cars/services/CreateCategoryServices';
import { CategoryRepository } from '../modules/cars/repositories/CategoryRepository';
import { Router } from "express";

export const categoriesRoutes = Router();

const categoryRepository = new CategoryRepository();

categoriesRoutes.post("/", (request, response) => {
  const { name, description } = request.body;

  const createCategoryService = new CreateCategoryService(categoryRepository)
  const category = createCategoryService.execute({name, description});

  return response.status(201).json(category);
})

categoriesRoutes.get("/", (request, response)=>{
  const all = categoryRepository.list();
  return response.json(all)
})