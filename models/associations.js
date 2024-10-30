import Category from "./Category";
import products from "./Products";

Category.hasMany(products, { foreignKey: "categoryId", as: "id" });
Category.hasMany(products, { foreignKey: "categoryName", as: "name" });
products.belongsTo(Category, { foreignKey: "categoryId", as: "id" });
products.belongsTo(Category, { foreignKey: "categoryName", as: "name" });