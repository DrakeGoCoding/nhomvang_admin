import agent from "./agent";
import { ADMIN_PRODUCT_ENDPOINT, PRODUCT_ENDPOINT } from "../constants/endpoints";

const pageSize = 10;

const limit = (size, page) => `limit=${size}&offset=${page ? page * size : 0}`;
const omitForProduct = product =>
    Object.assign({}, product, {
        slug: undefined,
        createdDate: undefined,
        modifiedDate: Date.now()
    });

const Product = {
    getAll: (page = 0, filter = {}) =>
        agent.get(`${PRODUCT_ENDPOINT}?${limit(pageSize, page)}&${new URLSearchParams(filter).toString()}`),
    getBySlug: slug => agent.get(`${PRODUCT_ENDPOINT}/${slug}`),
    create: product => agent.post(ADMIN_PRODUCT_ENDPOINT, { product }),
    update: product =>
        agent.put(`${ADMIN_PRODUCT_ENDPOINT}/${product.slug}`, {
            product: omitForProduct(product)
        }),
    delete: slug => agent.delete(`${ADMIN_PRODUCT_ENDPOINT}/${slug}`),
    pageSize
};

export default Product;