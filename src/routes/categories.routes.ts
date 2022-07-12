import { Router } from "express";

import { CategoriesRepository } from "../modules/cars/repositories/CategoriesRepository";
import { createCategoryController } from "../modules/cars/useCases/createCategory";

const categoriesRoutes = Router();
const categoriesRepository = new CategoriesRepository();

categoriesRoutes.get("/", (req, res) => {
  const categories = categoriesRepository.list();
  return res.status(200).json(categories);
});

categoriesRoutes.post("/", (req, res) =>
  createCategoryController.handle(req, res)
);

export { categoriesRoutes };
