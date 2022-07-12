import { Specification } from "../../model/Specification";
import { ICreateCategoryDTO } from "../ICategoriesRepository";
import { ISpecificationsRepository } from "../ISpecificationsRepository";

class SpecificationsRepository implements ISpecificationsRepository {
  private specifications: Specification[];

  // eslint-disable-next-line no-use-before-define
  private static INSTANCE: SpecificationsRepository;

  private constructor() {
    this.specifications = [];
  }

  public static getInstance(): SpecificationsRepository {
    if (!SpecificationsRepository.INSTANCE) {
      SpecificationsRepository.INSTANCE = new SpecificationsRepository();
    }

    return SpecificationsRepository.INSTANCE;
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
