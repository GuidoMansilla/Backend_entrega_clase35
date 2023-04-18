export const generateProductError = (product) => {
  return `One or more properties were incomplete or not valid.
  List of required properties:

  * title: needs to be a string, recieved ${product.title}
  * price: needs to be a number, recieved ${product.price}
  * code: needs to be a string, recieved ${product.code}
  * stock : needs to be a number, recieved ${product.stock}`
}

/*
export const paramError = (param) => {
  return `One propertie was not valid.
  List of required properties:
  * Id: needs to be a number, recieved ${param}`
}
*/