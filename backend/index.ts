import express, {
  type NextFunction,
  type Request,
  type Response,
} from "express";
import cors from "cors";
import router from "./routes/routes.js";
import type errosHandle from "./errorsHandler.js";

const app = express();
app.use(express.json());
app.use(router);
app.use(
  cors({
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
    credentials: true,
  })
);

app.use(
  (
    err: Error & errosHandle,
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
<<<<<<< Updated upstream
    const statusCode = err.statuscode ?? 500;
    const message = err.message ?? "server internal error";
    return res.status(statusCode).send(message);
=======
      const statusCode = err.statusCode ?? 500
	    const message = error.statusCode ? error.message : 'Internal Server Error'
      	return res.status(statusCode).json({ message })

>>>>>>> Stashed changes
  }
);

app.listen(4000, () => {
  console.log("is running");
});

export default app;
