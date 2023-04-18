import productModel from '../models/product.model.js';

class ProductServices { 

  getAll() {
    return productModel.find();
  }

  getById(id) {
    return productModel.findById(id);
  }

  create(title, description, price, thumbnail, code, stock) {
    return productModel.create(title, description, price, thumbnail, code, stock);
  }
 

  update(id, title, description, price, thumbnail, code, stock) {
    return productModel.findByIdAndUpdate(id, title, description, price, thumbnail, code, stock, { new: true });
  }

  delete(id) {
    return productModel.findByIdAndDelete(id);
  }

}

export default new ProductServices()