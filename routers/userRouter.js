import express from "express"
import {
    getAllUsers,
    getUser,
    createUser,
    updateUser,
    deleteUser,
} from "../controllers/usersControllers.js"
import { validateCreateUser, validateUpdateUser } from '../middleware/validationMiddleware.js';

export const userRouter = express.Router()

userRouter.route("/").get(getAllUsers).post(validateCreateUser, createUser);
userRouter.route("/:id").get(getUser).put(validateUpdateUser, updateUser).delete(deleteUser);
