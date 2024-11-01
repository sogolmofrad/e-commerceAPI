import Category from "./category"
import Product from "./product"

Category.hasMany(Product, { foreignKey: "categoryId", as: "id" })
Category.hasMany(Product, { foreignKey: "categoryName", as: "name" })
Product.belongsTo(Category, { foreignKey: "categoryId", as: "id" })
Product.belongsTo(Category, { foreignKey: "categoryName", as: "name" })
