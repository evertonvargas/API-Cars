import { Category } from "../model/Category"

interface ICreateCategoryDTO{
  name: string;
  description: string;
}

interface ICategoryRepository{
  // findByname: (name: string) => Category;
  // list: ()=> Category[];
  // create: (name: string, description: string) => void

  findByname(name: string): Category;
  list(): Category[];
  create({name, description}: ICreateCategoryDTO): Category;
}

export { ICategoryRepository, ICreateCategoryDTO}