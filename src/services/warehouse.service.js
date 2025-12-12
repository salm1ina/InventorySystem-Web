import prisma from '../config/db.js';

export const getWarehouses = () => {
    return prisma.warehouse.findMany({
        include: { stocks: true },
    });
};

export const getWarehouseById = (id) => {
    return prisma.warehouse.findUnique({
        where: { id: Number(id) },
        include: { stocks: true },
    });
};

export const createWarehouse = (data) => {
    return prisma.warehouse.create({ data });
};

export const updateWarehouse = (id, data) => {
    return prisma.warehouse.update({
        where: { id: Number(id) },
        data,
    });
};

export const deleteWarehouse = (id) => {
    return prisma.warehouse.delete({
        where: { id: Number(id) },
    });
};
