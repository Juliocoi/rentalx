import { Category } from "../model/Category";

//DTO => Data Tranfer Object
interface createCategoryDTO{
  name: string;
  description: string
}

class CategoriesRepository {
  private categories: Category[];

  constructor(){
    this.categories = []
  }

  create({ name, description }: createCategoryDTO): void {
    const category = new Category();
  
    Object.assign(category, {
      name, 
      description,
      created_at: new Date(),
    });
  
    this.categories.push(category);
  }

  list(): Category[]{
    return this.categories;
  }

  findByName(name: string): Category {
    const category = this.categories.find(category => category.name === name);
    return category
  }
}

export { CategoriesRepository };