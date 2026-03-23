import "dotenv/config";
import express from "express";
import taskRouter from "./routes/tasks";

const app = express();
const PORT = 3000;

app.use(express.json());

app.get("/health", (req, res) => {
  res.json({
    status: "ok",
    message: "Api funcionando",
  });
});

app.use("/tasks", taskRouter);

app.listen(PORT, () => {
  console.log(`Server is running on port  http://localhost:${PORT}`);
});
