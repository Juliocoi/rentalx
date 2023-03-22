import { CategoriesRepository } from "../repositories/CategoriesRepository";

interface IRequest {
  name: string;
  description: string;
}
class CreateCategoryService {

  constructor(private categoriesRepository: CategoriesRepository){};

  execute({ name, description }: IRequest): void {

    const CategoriesAlreadyExists = this.categoriesRepository.findByName(name);

    if(CategoriesAlreadyExists){
      throw new Error("Category already exists.");
      
    }
  
    this.categoriesRepository.create({name, description});
  }
}

export { CreateCategoryService };