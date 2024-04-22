import { Request, Response } from 'express';
import Task from '../models/task.model';

export const index = async (req: Request, res: Response) => {
    try {
        const tasks = await Task.find();
        return res.status(200).json({
            success: true,
            messages: ["Tasks fetched successfully"],
            data: tasks,
            status: 200,
        })
    } catch (error) {
        console.log(error);
        return res.status(200).json({
            success: false,
            messages: ["Tasks fetched successfully"],
            data: [],
            status: 500,
            error,
        })
    }
}

export const create = async (req: Request, res: Response) => {
    try {
        const body = req.body;
        const newTask = await Task.create({
            title: body.title,
            description: body.description,
            completed: false,
        })
        return res.status(200).json({
            success: true,
            messages: ["Task created successfully"],
            data: newTask,
            status: 200,
        });
    } catch (error) {
        console.log(error);
        return res.status(200).json({
            success: false,
            messages: ["Tasks fetched successfully"],
            data: [],
            status: 500,
            error,
        })
    }
}

export const getOneTask = async (req: Request, res: Response) => {
    try {
        const task = await Task.findById(req.params.id);
        if (!task) {
            return res.status(404).json({
                success: false,
                messages: ["Task not found"],
                data: [],
                status: 404,
            })
        }
        return res.status(200).json({
            success: false,
            messages: ["Task fetched successfully"],
            data: task,
            status: 200,
        });
    } catch (error) {
        console.log(error);
        return res.status(200).json({
            success: false,
            messages: ["Tasks fetched successfully"],
            data: [],
            status: 500,
            error,
        })
    }
}

export const update = async (req: Request, res: Response) => {
    try {
        const id = req.params.id;
        const body = req.body;
        const updatedTask = await Task.findByIdAndUpdate(id, {
            title: body.title,
            description: body.description,
            completed: body.completed,
        }, { new: true });
        if (!updatedTask) {
            return res.status(200).json({
                success: false,
                messages: ["Task not found"],
                data: [],
                status: 404,
            })
        }
        return res.status(200).json({
            success: true,
            messages: ["Task updated successfully"],
            data: updatedTask,
            status: 200,
        })
    } catch (error) {
        console.log(error);
        return res.status(200).json({
            success: false,
            messages: ["Tasks fetched successfully"],
            data: [],
            status: 500,
            error,
        })
    }
}

export const deleteTask = async (req: Request, res: Response) => {
    try {
        const id = req.params.id;
        const deletedTask = await Task.findByIdAndDelete(id);
        if (!deletedTask) {
            return res.status(200).json({
                success: false,
                messages: ["Task not found"],
                data: [],
                status: 404,
            })
        }
        return res.status(200).json({
            success: true,
            messages: ["Task deleted successfully"],
            data: deletedTask,
            status: 200,
        })
    } catch (error) {
        console.log(error);
        return res.status(200).json({
            success: false,
            messages: ["Tasks fetched successfully"],
            data: [],
            status: 500,
            error,
        })
    }
}

export const completeTask = async (req: Request, res: Response) => {
    try {
        const id = req.params.id;
        const completedTask = await Task.findByIdAndUpdate(id, {
            completed: true,
        }, { new: true });
        if (!completedTask) {
            return res.status(200).json({
                success: false,
                messages: ["Task not found"],
                data: [],
                status: 404,
            })
        }
        return res.status(200).json({
            success: true,
            messages: ["Task completed successfully"],
            data: completedTask,
            status: 200,
        })
    } catch (error) {
        console.log(error);
        return res.status(200).json({
            success: false,
            messages: ["Tasks fetched successfully"],
            data: [],
            status: 500,
            error,
        })
    }
}