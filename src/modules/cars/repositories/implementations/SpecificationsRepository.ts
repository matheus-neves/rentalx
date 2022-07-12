import { Specification } from "../../model/Specification";
import { ICreateCategoryDTO } from "../ICategoriesRepository";
import { ISpecificationsRepository } from "../ISpecificationsRepository";

class SpecificationsRepository implements ISpecificationsRepository {
  private specifications: Specification[];

  constructor() {
    this.specifications = [];
  }

  create({ description, name }: ICreateCategoryDTO) {
    const specification = new Specification();

    const newSpecification: Specification = {
      ...specification,
      name,
      description,
      created_at: new Date(),
    };

    this.specifications.push(newSpecification);
  }

  findByName(name: string): Specification {
    const specification = this.specifications.find(
      (specification) => specification.name === name
    );
    return specification;
  }
}

export { SpecificationsRepository };
