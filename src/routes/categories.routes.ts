import { CreateCategoryService } from '../services/CreateCategoryServices';
import { CategoryRepository } from './../repositories/CategoryRepository';
import { Router } from "express";

export const categoriesRoutes = Router();

const categoryRepository = new CategoryRepository();

categoriesRoutes.post("/", (request, response) => {
  const { name, description } = request.body;

  const createCategoryService = new CreateCategoryService(categoryRepository)
  const category = createCategoryService.create({name, description});

  return response.status(201).json(category);
})

categoriesRoutes.get("/", (request, response)=>{
  const all = categoryRepository.list();
  return response.json(all)
})