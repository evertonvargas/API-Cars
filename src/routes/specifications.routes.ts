import { CreateSpecificationService } from './../modules/cars/services/CreateSpecificationService';
import { SpecificationRepository } from '../modules/cars/repositories/SpecificationRepository';
import { Router } from "express";

export const specificationsRoutes = Router();

const specificationRepository = new SpecificationRepository();

specificationsRoutes.post("/", (request, response)=>{
  const { name, description } = request.body;

  const createSpecificationService = new CreateSpecificationService(specificationRepository)
  const specification = createSpecificationService.execute({name, description});

  return response.status(201).json(specification);
})