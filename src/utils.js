import { faker } from "@faker-js/faker";

faker.locale = "es";


export const generateProduct = () => {
    return {
        id: faker.database.mongodbObjectId(),
        title: faker.commerce.productName(),
        description: faker.commerce.productDescription(),
        price: faker.commerce.price(),
        thumbnail: faker.random.alphaNumeric(10),
        code: faker.random.alphaNumeric(10),
        stock: faker.random.numeric(1) 
    }
};