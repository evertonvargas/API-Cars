import { Category } from './../model/Category';
import { CategoryRepository } from '../repositories/CategoryRepository';

interface Icreate{
  name: string;
  description: string;
}

export class CreateCategoryService {

  // private categoryRepository: CategoryRepository;

  // constructor(category: CategoryRepository) {
  //   this.categoryRepository = category;
  // }

  constructor(private categoryRepository: CategoryRepository){}

  create({name, description}: Icreate): Category{
    const AlredyExistsCategory = this.categoryRepository.findByName(name);

    if (AlredyExistsCategory) {
      throw new Error("Category Already Exists!")
      //return response.status(400).json({error: "Category Already Exists!"})
    }

    return this.categoryRepository.create({ name, description });
  }

}