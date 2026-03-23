import express, { Request, Response } from "express";

import { userRoute } from "./modules/users/user.route";
import { initDB } from "./database/bt";

const app = express();
app.use(express.json());

initDB(); // must be Call the function

/* CREATE A POST ROUTE */
app.use("/api/v1/users",userRoute );

/* CREATE A GET API  */
app.get("/", (req: Request, res: Response) => {
  res.status(200).json({
    message: "This is the root route",
    path: req.path,
  });
});

app.listen(5000, () => {
  console.log("server running on port on 5000");
});
