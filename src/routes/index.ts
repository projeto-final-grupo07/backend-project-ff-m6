import { Router } from "express";
import { Request, Response } from "express";
import { myController } from "../controllers/examples.controller";
import AppError from "../errors/appError";

const routerUser = Router();

routerUser.get("/list", myController);

routerUser.get("/test", (req: Request, res: Response) => {
  res.status(200).json({
    message: "Testing :^)",
  });
});

routerUser.get("/error", (req: Request, res: Response) => {
  throw new AppError(400, "Error is working");
});

export default routerUser;
