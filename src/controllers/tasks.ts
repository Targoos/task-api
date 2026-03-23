import { Request, Response } from "express";
import prisma from "../lib/prisma";

export const getAllTasks = async (req: Request, res: Response) => {
  const tasks = await prisma.task.findMany({
    orderBy: { createdAt: "desc" },
  });
  res.json(tasks);
};

export const createTask = async (req: Request, res: Response) => {
  const { title } = req.body;

  if (!title) {
    res.status(400).json({ error: "El título es obligatorio" });
    return;
  }

  try {
    const task = await prisma.task.create({
      data: { title },
    });
    res.status(201).json(task);
  } catch (error) {
    console.error("error al crear:", error);
    res.status(500).json({ error: "Error interno" });
  }
};

export const updateTask = async (req: Request, res: Response) => {
  const id = Number(req.params.id);

  const task = await prisma.task.findUnique({ where: { id } });

  if (!task) {
    res.status(404).json({ error: "Tarea no encontrada" });
    return;
  }

  const updated = await prisma.task.update({
    where: { id },
    data: { completed: !task.completed },
  });

  res.json(updated);
};

export const deleteTask = async (req: Request, res: Response) => {
  const id = Number(req.params.id);

  const task = await prisma.task.findUnique({ where: { id } });

  if (!task) {
    res.status(404).json({ error: "Tarea no encontrada" });
    return;
  }

  await prisma.task.delete({ where: { id } });
  res.status(204).send();
};
