import prisma from '../config/db.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

export const registerUser = async ({ username, password, email, name, role }) => {
    const hashed = await bcrypt.hash(password, 10);

    return prisma.user.create({
        data: { username, password: hashed, email, name, role },
    });
};

export const findUserByUsername = (username) => {
    return prisma.user.findUnique({ where: { username } });
};

export const validatePassword = (password, hash) => {
    return bcrypt.compare(password, hash);
};

export const generateToken = (user) => {
    return jwt.sign(
        { userId: user.id, role: user.role },
        process.env.JWT_SECRET,
        { expiresIn: process.env.JWT_EXPIRES_IN || '1h' }
    );
};
