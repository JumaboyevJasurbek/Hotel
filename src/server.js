import express from "express";
import dotenv from "dotenv";
import routes from "./modules/routes.js";
import cors from "cors";
import errorhandler from "./middleware/errorhandler.js";
dotenv.config();

const PORT = process.env.PORT || 7000;

const app = express();
console.log(process.env.NODE_ENV);
app.use(cors());
app.use(express.json());
app.use("/", routes);
app.use(errorhandler);
app.all("/*", (req, res) => {
    res.status(404).json({
        message: req.url + "not found",
    });
});

app.listen(PORT, console.log(PORT));
