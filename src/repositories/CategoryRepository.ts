import { Category } from './../model/Category';
import { ICreateCategoryDTO } from './ICategoryRepository';

export class CategoryRepository {

  private categories: Category[];

  constructor() {
    this.categories = [];
  }

  create({name, description}: ICreateCategoryDTO) {
    const category = new Category();
    Object.assign(category, {
      name,
      description,
      created_at: new Date()
    })

    this.categories.push(category)
    return category;
  }

  list():Category[]{
    return this.categories;
  }

  findByName(name: string):Category{
    const category = this.categories.find(categorie => categorie.name === name)
    return category;
  }

}