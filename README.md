# Task API

REST API para gestión de tareas construida con Express, TypeScript y Prisma.

## Stack
- Node.js + Express
- TypeScript
- PostgreSQL + Prisma

## Requisitos previos
- Node.js v20 o superior
- PostgreSQL instalado y corriendo

## Cómo correrlo localmente

1. Clonar el repositorio
```bash
   git clone https://github.com/Targoos/task-api.git
   cd task-api
```

2. Instalar dependencias
```bash
   npm install
```

3. Crear el archivo `.env` en la raíz del proyecto
```env
   DATABASE_URL="postgresql://tu_usuario@localhost:5432/taskdb"
```

4. Crear la base de datos
```bash
   psql postgres
   CREATE DATABASE taskdb;
   \q
```

5. Correr las migraciones
```bash
   npx prisma migrate dev
```

6. Iniciar el servidor
```bash
   npm run dev
```

El servidor corre en `http://localhost:3000`

## Endpoints

| Método | Ruta | Descripción | Body |
|--------|------|-------------|------|
| GET | /tasks | Listar todas las tareas | — |
| POST | /tasks | Crear una tarea | `{ "title": "string" }` |
| PATCH | /tasks/:id | Marcar como completada | — |
| DELETE | /tasks/:id | Eliminar una tarea | — |

## Estructura del proyecto
```
src/
├── index.ts          # Punto de entrada
├── routes/
│   └── tasks.ts      # Definición de rutas
├── controllers/
│   └── tasks.ts      # Lógica de cada endpoint
├── lib/
│   └── prisma.ts     # Instancia de Prisma
└── types/
    └── task.ts       # Interfaces de TypeScript
```