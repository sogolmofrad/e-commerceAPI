import { CustomError } from "../utils/errorHandler.js"
import Product from "../models/product.js"

export const getProducts = async (req, res, next) => {
    try {
        const productsList = await Product.findAll()
        res.json(productsList)
    } catch (error) {
        console.error("Error fetching Products:", error)
        next(new CustomError("Failed to fetch products", 500))
    }
}

export const getProductById = async (req, res, next) => {
    const id = parseInt(req.params.id)
    try {
        const product = await Product.findByPk(id)
        if (!product) {
            return next(new CustomError("Product not found", 404))
        }
        res.json(product)
    } catch (error) {
        console.error("Error fetching product:", error)
        next(new CustomError("Failed to fetch product", 500))
    }
}

export const createProduct = async (req, res, next) => {
    const { name, description, price, categoryid } = req.body
    try {
        const newProduct = await Product.create({
            name,
            description,
            price,
            categoryid,
        })
        res.status(201).json(newProduct)
    } catch (error) {
        console.error("Error creating product:", error)
        next(new CustomError("Failed to create product", 500))
    }
}

export const updateProduct = async (req, res, next) => {
    const { id } = req.params
    const { name, description, price, categoryid } = req.body
    try {
        const product = await Product.findByPk(id)
        if (!product) {
            return next(new CustomError("Product not found", 404))
        }

        await product.update({ name, description, price, categoryid })
        res.json(product)
    } catch (error) {
        console.error("Error updating product:", error)
        next(new CustomError("Failed to update product", 500))
    }
}

export const deleteProduct = async (req, res, next) => {
    const { id } = req.params
    try {
        const product = await Product.findByPk(id)
        if (!product) {
            return next(new CustomError("Product not found", 404))
        }

        await product.destroy()
        res.json({ message: "Product deleted successfully" })
    } catch (error) {
        console.error("Error deleting product:", error)
        next(new CustomError("Failed to delete product", 500))
    }
}
