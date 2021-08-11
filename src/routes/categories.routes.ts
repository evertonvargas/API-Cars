import { CategoryRepository } from './../repositories/CategoryRepository';
import { Router } from "express";

export const categoriesRoutes = Router();

const categoryRepository = new CategoryRepository();

categoriesRoutes.post("/", (request, response) => {
  const { name, description } = request.body;

  const AlredyExistsCategory = categoryRepository.findByName(name);

  if(AlredyExistsCategory){
    return response.status(400).json({error: "Category Already Exists!"})
  }

  const category = categoryRepository.create({ name, description });

  return response.status(201).json(category);
})

categoriesRoutes.get("/", (request, response)=>{
  const all = categoryRepository.list();
  return response.json(all)
})