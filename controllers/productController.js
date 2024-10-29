import products from '../models/Products.js';
export const getProducts = async (req, res) => {
    try {
        const productsList = await products.findAll({
            attributes: ['id', 'name', 'description', 'price', 'categoryId']
        });
        res.json(productsList);
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

export const getProductById = async (req, res) => {
    const { id } = req.params;
    try {
        const product = await products.findByPk(id, {
            attributes: ['id', 'name', 'description', 'price', 'categoryId']
        });
        if (product) {
            res.json(product);
        } else {
            res.status(404).json({ error: 'Product not found' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

export const createProduct = async (req, res) => {
    const { name, description, price, categoryId } = req.body;
    try {
        const product = await products.create({ name, description, price, categoryId });
        res.status(201).json({
            id: product.id,
            name: product.name,
            description: product.description,
            price: product.price,
            categoryId: product.categoryId
        });
    } catch (error) {
        console.error('Error creating product:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

export const updateProduct = async (req, res) => {
    const { id } = req.params;
    const { name, description, price, categoryId } = req.body;
    try {
        const product = await products.findByPk(id);
        if (product) {
            product.name = name;
            product.description = description;
            product.price = price;
            product.categoryId = categoryId;
            await product.save();
            res.json({
                id: product.id,
                name: product.name,
                description: product.description,
                price: product.price,
                categoryId: product.categoryId
            });
        } else {
            res.status(404).json({ error: 'Product not found' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

export const deleteProduct = async (req, res) => {
    const { id } = req.params;
    try {
        const product = await products.findByPk(id);
        if (product) {
            await product.destroy();
            res.json({ message: 'Product deleted successfully' });
        } else {
            res.status(404).json({ error: 'Product not found' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
};