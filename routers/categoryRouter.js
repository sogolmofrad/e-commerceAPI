import express from "express"
import {
    getCategories,
    getCategoryById,
    createCategory,
    updateCategory,
    deleteCategory,
} from "../controllers/categoryController.js"

export const categoryRouter = express.Router()

categoryRouter.get("/", getCategories)
categoryRouter.get("/:id", getCategoryById)
categoryRouter.post("/", createCategory)
categoryRouter.put("/:id", updateCategory)
categoryRouter.delete("/:id", deleteCategory)
