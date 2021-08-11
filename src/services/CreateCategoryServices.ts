import { Category } from './../model/Category';
import { ICategoryRepository } from '../repositories/ICategoryRepository';

interface IRequest{
  name: string;
  description: string;
}

export class CreateCategoryService {

  // private categoryRepository: CategoryRepository;

  // constructor(category: CategoryRepository) {
  //   this.categoryRepository = category;
  // }

  constructor(private categoryRepository: ICategoryRepository){}

  create({name, description}: IRequest): Category{
    const AlredyExistsCategory = this.categoryRepository.findByname(name)
    if (AlredyExistsCategory) {
      throw new Error("Category Already Exists!")
      //return response.status(400).json({error: "Category Already Exists!"})
    }

    return this.categoryRepository.create({name, description});
  }

}