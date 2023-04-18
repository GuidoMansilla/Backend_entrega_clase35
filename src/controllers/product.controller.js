import productValidator from "../validators/product.validator.js";


class ProductController {
    async getProducts(req, res) {
        try {
            const products = await productValidator.getProducts();
            res.json(products);
        } catch (error) {
            console.log(error.message);
        }
    }

    async getProduct(req, res) {
        try {
            const { id } = req.params;
            const product = await productValidator.getProduct(id);
            res.json(product);
        } catch (error) {
            console.log(error.message);
        }
    }

    async createProduct(req, res) {
        try {
            const { title, description, price, thumbnail, code, stock } = req.body;          
            const product = await productValidator.createProduct(title, description, price, thumbnail, code, stock );
            res.json(product);
        } catch (error) {
            res.json(error)
        }
    }

    async updateProduct(req, res) {
        try {
            const { id, title, description, price, thumbnail, code, stock } = req.body;          
            const product = await productValidator.updateProduct( id, title, description, price, thumbnail, code, stock );
            res.json(product);
        } catch (error) {
            res.json(error)
        }
    }

    async deleteProduct(req, res) {
        try {
            const { id } = req.params;
            const product = await productValidator.deleteProduct(id);
            res.json(product);
        } catch (error) {
            res.json(error)
        }
    }

}



export default new ProductController();