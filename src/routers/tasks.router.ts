import { Router } from "express";
import { completeTask, create, deleteTask, getOneTask, index, update } from "../controllers/tasks.controller";

const tasksRouter = Router();

tasksRouter.get("/", index);
tasksRouter.post("/", create);
tasksRouter.get("/:id", getOneTask);
tasksRouter.post("/:id", update);
tasksRouter.delete("/:id", deleteTask);
tasksRouter.patch("/:id", completeTask);

export default tasksRouter;