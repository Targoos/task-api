# Task API

REST API para gestión de tareas construida con Express, TypeScript y Prisma.

## Stack
- Node.js + Express
- TypeScript
- PostgreSQL + Prisma

## Cómo correrlo localmente

1. Clonar el repositorio
2. Instalar dependencias: `npm install`
3. Crear un archivo `.env` con: `DATABASE_URL="postgresql://usuario@localhost:5432/taskdb"`
4. Correr migraciones: `npx prisma migrate dev`
5. Iniciar el servidor: `npm run dev`

## Endpoints

| Método | Ruta | Descripción |
|--------|------|-------------|
| GET | /tasks | Listar todas las tareas |
| POST | /tasks | Crear una tarea |
| PATCH | /tasks/:id | Marcar como completada |
| DELETE | /tasks/:id | Eliminar una tarea |