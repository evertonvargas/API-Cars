import { Category } from './../../model/Category';
import { ICategoryRepository } from "../../repositories/implementations/ICategoryRepository";


export class ListCategoryUseCase{

  constructor(private categoriesRepository: ICategoryRepository){}

  execute(): Category[]{
    const categories = this.categoriesRepository.list();
    return categories;
  }
}