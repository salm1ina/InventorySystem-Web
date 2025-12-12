import prisma from '../config/db.js';

export const getAllCategories = () => {
    return prisma.category.findMany({
        include: { products: true },
    });
};

export const getCategory = (id) => {
    return prisma.category.findUnique({
        where: { id: Number(id) },
        include: { products: true }
    });
};

export const createCategory = (data) => {
    return prisma.category.create({ data });
};

export const updateCategory = (id, data) => {
    return prisma.category.update({
        where: { id: Number(id) },
        data,
    });
};

export const deleteCategory = (id) => {
    return prisma.category.delete({
        where: { id: Number(id) },
    });
};
