import prisma from '../config/db.js';

export const countProducts = async (where) => {
    return prisma.product.count({ where });
};

export const findProducts = async (where, orderBy, skip, limit) => {
    return prisma.product.findMany({
        where,
        include: { category: true, stocks: { include: { warehouse: true } } },
        orderBy,
        skip,
        take: limit,
    });
};

export const findProductById = async (id) => {
    return prisma.product.findUnique({
        where: { id: Number(id) },
        include: { category: true, stocks: { include: { warehouse: true } } }
    });
};

export const createProduct = async (data) => {
    return prisma.product.create({ data });
};

export const updateProduct = async (id, data) => {
    return prisma.product.update({ where: { id: Number(id) }, data });
};

export const deleteProduct = async (id) => {
    return prisma.product.delete({ where: { id: Number(id) } });
};