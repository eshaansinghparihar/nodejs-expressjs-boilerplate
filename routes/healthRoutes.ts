import { Router } from "express";
import { HealthController } from "../controllers/healthController";

const healthRouter = Router();
const healthController = new HealthController();

healthRouter.get("/", async (_req, res, next) => {
  try {
    const response = await healthController.getServiceHealth();
    return res.json(response);
  } catch (err) {
    next(err);
  }
});

export default healthRouter;
