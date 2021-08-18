import { Router } from "express";
import { createSpeficicationController } from '../modules/cars/useCases/createSpecification';

export const specificationsRoutes = Router();

specificationsRoutes.post("/", (request, response)=>{
  return createSpeficicationController.handle(request, response);
})