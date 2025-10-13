import express, {
  type NextFunction,
  type Request,
  type Response,
} from "express";
import cors from "cors";
import router from "./routes/routes.js";
import type errosHandle from "./errorsHandler.js";

const app = express();
app.use(router);
app.use(express.json());
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
    return res.send("caiu no erro mane");
  }
);

app.listen(4000, () => {
  console.log("is running");
});

export default app;
