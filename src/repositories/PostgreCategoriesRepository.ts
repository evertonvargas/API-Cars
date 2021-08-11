import { Category } from '../model/Category';
import { ICategoryRepository, ICreateCategoryDTO } from './ICategoryRepository';

export class PostgreCategoriesRepository implements ICategoryRepository{
  //atalho é Ctrl + . chama quick fix
  findByname(name: string): Category {
    console.log(name);
    return null;
  }
  list(): Category[] {
    return null;
  }
  create({name, description}: ICreateCategoryDTO): Category {
    console.log(name, description)
    return null;
  }
  
}