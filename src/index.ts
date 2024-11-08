import express, { Application, Request, Response } from "express";
import cors, { CorsOptions } from "cors";
import dotenv from "dotenv";

//To be able to load files from environment
dotenv.config();

//Starting an  express application server.
const app: Application = express();

//Default port 3000 if not specified in environment.
const PORT = process.env.PORT || 3000;
//to be able to read json requets.
app.use(express.json());

//Configuring cors to only be able to use post method to retreive data from the server ensuring better security.
const corsOptions: CorsOptions = {
  origin: "*",
  methods: "GET,POST,PUT,DELETE,PATCH,OPTIONS",
  allowedHeaders: "Origin, X-Requested-With, Content-Type, Accept",
};

app.use(cors(corsOptions));
// This one is for preflightrequest
app.use("*", cors(corsOptions));

app.get("/health", (req: Request, res: Response) => {
  res.send("ok");
});

//server starts listening on port
try {
  app.listen(PORT, () => {
    console.log(`Connected successfully to port ${PORT}`);
  });
} catch (err) {
  console.log(err);
}
