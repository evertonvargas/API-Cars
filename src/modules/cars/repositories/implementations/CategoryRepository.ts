import { Category } from '../../model/Category';
import { ICategoryRepository, ICreateCategoryDTO } from './ICategoryRepository';

//singleton -> criar apenas uma instância e ela vai ser global
export class CategoryRepository implements ICategoryRepository {

  private categories: Category[];

  private static INSTANCE: CategoryRepository;

  constructor() {
    this.categories = [];
  }

  public static getInstance(): CategoryRepository{
    if(!CategoryRepository.INSTANCE){
      CategoryRepository.INSTANCE = new CategoryRepository();
    }
    return CategoryRepository.INSTANCE;
  }

  create({name, description}: ICreateCategoryDTO): Category {
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

  findByname(name: string): Category{
    const category = this.categories.find(categorie => categorie.name === name)
    return category;
  }

}