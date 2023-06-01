import { Category } from "../models/category.model";

export const Category_Seed:Array<Pick<Category, "id" | "name" | "details">> = [
    {
      id: "a29ba7d1-add9-4e69-b9cf-90ca0462ff0b",
      name: "Medicinal Herbs",
      details:"Medical herbs are plants with healing properties used in traditional medicine. They offer natural remedies for various ailments. Examples include chamomile for relaxation, ginger for digestion, and echinacea for boosting the immune system."
    },
    {
      id: "a8d7683b-48fd-41a8-a6d8-1b62ccaddbf7",
      name: "Culinary Herbs",
      details: "Culinary herbs are aromatic plants used to enhance the flavor and aroma of food. They are commonly used in cooking for their distinctive tastes. Examples include basil, thyme, rosemary, and cilantro."
    },
    {
      id: "c2c845b9-9233-4ba5-a566-98d2d40842a7",
      name: "Aromatic Herbs",
      details: "Aromatic herbs are plants that have a strong fragrance or aroma. They are often used for their pleasing scents and are commonly found in perfumes, cosmetics, and aromatherapy."
    },
    {
      id: "ce1719eb-161c-4a81-8802-25a64c26ffd9",
      name: "Ornamental Herbs",
      details: "Ornamental herbs are plants that are cultivated primarily for their aesthetic value. "
    }
  ];





/*

                CATEGORY
-- INSERT INTO category(id, name, details) VALUES('a29ba7d1-add9-4e69-b9cf-90ca0462ff0b', 'Medicinal Herbs', 'Medical herbs are plants with healing properties used in traditional medicine. They offer natural remedies for various ailments. Examples include chamomile for relaxation, ginger for digestion, and echinacea for boosting the immune system.');


-- INSERT INTO category(id, name, details) VALUES('a8d7683b-48fd-41a8-a6d8-1b62ccaddbf7', 'Culinary Herbs', 'Culinary herbs are aromatic plants used to enhance the flavor and aroma of food. They are commonly used in cooking for their distinctive tastes. Examples include basil, thyme, rosemary, and cilantro.');


-- INSERT INTO category(id, name, details) VALUES('c2c845b9-9233-4ba5-a566-98d2d40842a7', 'Aromatic Herbs', 'Aromatic herbs are plants that have a strong fragrance or aroma. They are often used for their pleasing scents and are commonly found in perfumes, cosmetics, and aromatherapy.');


-- INSERT INTO category(id, name, details) VALUES('ce1719eb-161c-4a81-8802-25a64c26ffd9', 'Ornamental Herbs', 'Ornamental herbs are plants that are cultivated primarily for their aesthetic value. .');





                    USER
-- INSERT INTO users(id, name, email, password, role, api_key) VALUES('9fe972b5-92be-4c3e-a96d-c74fc66e36ce', 'Coded Hola', 'codedhola2000@gmail.com', 'developer', 'user', 'eolqlg8glmbcgeiq4cx1dntk5fjeao');


-- INSERT INTO users(id, name, email, password, role, api_key) VALUES('6f593218-bbe2-4cb5-a614-bdeaee61815c', 'Ola Samuel', 'olakintan2015@gmail.com', 'developer', 'user', 'eolqlg8glmbcgeiq4cx1dntk5fjeao');

**/