require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors")
const authRoute = require("./router/auth-router"); 
const serviceRoute = require("./router/service-router")
const contactRoute = require("./router/contact-router");
const connectDb = require("./Utils/db");
const errorMiddleware = require("./middlewares/error-middleware"); 

/*Send Data to database*/
const corsOption = {
  origin: "http://localhost:5173",
  method: "GET,POST,PUT,DELETE,PATCH,HEAD",
  Credential:true,

};


app.use(cors(corsOption));


app.use(express.json());

app.use("/api/auth", authRoute); 
app.use("/api/form", contactRoute);
app.use("/api/data", serviceRoute);

app.use(errorMiddleware);

const PORT = 5000;

connectDb().then(() => {
  app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
  });
});
