import Category from "../models/Category.js"

export const getCategories = async (req, res) => {
    try {
        const categories = await Category.findAll({
            attributes: ["id", "name"],
        })
        res.json(categories)
    } catch (error) {
        res.status(500).json({ error: "Internal Server Error" })
    }
}

export const getCategoryById = async (req, res) => {
    const { id } = req.params
    try {
        const category = await Category.findByPk(id, {
            attributes: ["id", "name"],
        })
        if (category) {
            res.json(category)
        } else {
            res.status(404).json({ error: "Category not found" })
        }
    } catch (error) {
        res.status(500).json({ error: "Internal Server Error" })
    }
}

export const createCategory = async (req, res) => {
    const { name } = req.body
    try {
        const category = await Category.create({ name })
        res.status(201).json({
            id: category.id,
            name: category.name,
        })
    } catch (error) {
        console.error("Error creating category:", error)
        res.status(500).json({ error: "Internal Server Error" })
    }
}

export const updateCategory = async (req, res) => {
    const { id } = req.params
    const { name } = req.body
    try {
        const category = await Category.findByPk(id)
        if (category) {
            category.name = name
            await category.save()
            res.json({
                id: category.id,
                name: category.name,
            })
        } else {
            res.status(404).json({ error: "Category not found" })
        }
    } catch (error) {
        res.status(500).json({ error: "Internal Server Error" })
    }
}

export const deleteCategory = async (req, res) => {
    const { id } = req.params
    try {
        const category = await Category.findByPk(id)
        if (category) {
            await category.destroy()
            res.json({ message: "Category deleted successfully" })
        } else {
            res.status(404).json({ error: "Category not found" })
        }
    } catch (error) {
        res.status(500).json({ error: "Internal Server Error" })
    }
}
