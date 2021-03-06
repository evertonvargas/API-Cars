import { CategoryRepository } from '../../repositories/implementations/CategoryRepository';
import { ListCategoryCategoryController } from "./ListCategoryController";
import { ListCategoryUseCase } from "./ListCategoryUseCase";

const categoriesRepository = CategoryRepository.getInstance(); //pego tds os métodos q tenho disponível pra uso

const listCategoryUseCase = new ListCategoryUseCase(categoriesRepository); // faço um caso de uso

const listCategoryController = new ListCategoryCategoryController(listCategoryUseCase); //uso o controler pra deixar routes mais simples e se encarregar de chamar o useCase

export { listCategoryController };