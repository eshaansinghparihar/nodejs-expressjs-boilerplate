import express from "express";
import healthRouter from "./routes/healthRoutes";
import echoRouter from "./routes/echoRoute";
import timeRouter from "./routes/timeRoute";
const app = express();
const port = 3000;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello CodeSandbox!");
});

app.use("/health", healthRouter);
app.use("/echo", echoRouter);
app.use("/time", timeRouter);

app.listen(port, () => {
  console.log(`Sandbox listening on port ${port}`);
});
