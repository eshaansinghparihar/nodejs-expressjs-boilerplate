import { Router } from "express";
import { TimeController } from "../controllers/timeController";

const timeRouter = Router();
const timeController = new TimeController();

timeRouter.get("/", async (_req, res, next) => {
  try {
    const response = await timeController.getTime();
    return res.json(response);
  } catch (err) {
    next(err);
  }
});

export default timeRouter;
