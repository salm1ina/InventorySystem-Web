import prisma from '../config/db.js';

export const listProducts = (where, skip, limit, sortBy, order) => {
    return prisma.product.findMany({
        where,
        include: {
            category: true,
            stocks: { include: { warehouse: true } }
        },
        orderBy: { [sortBy]: order },
        skip,
        take: limit
    });
};

export const countProducts = (where) => {
    return prisma.product.count({ where });
};

export const getProductById = (id) => {
    return prisma.product.findUnique({
        where: { id },
        include: {
            category: true,
            stocks: { include: { warehouse: true } }
        },
    });
};

export const createProduct = (data) => {
    return prisma.product.create({ data });
};

export const updateProduct = (id, data) => {
    return prisma.product.update({
        where: { id },
        data,
    });
};

export const deleteProduct = (id) => {
    return prisma.product.delete({ where: { id } });
};
