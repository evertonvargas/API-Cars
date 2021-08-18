import { CreateCategoryController } from './CreateCategoryController';
import { CreateCategoryService } from './CreateCategoryServices';
import { CategoryRepository } from '../../repositories/implementations/CategoryRepository';

const categoriesRepository = new CategoryRepository();

const createCategoryService = new CreateCategoryService(categoriesRepository);

const createCategoryController = new CreateCategoryController(createCategoryService);

export { createCategoryController };