import express, { Request, Response } from "express";
const app = express();
import routes from "./routes/users.routes";
import { createServer } from "http";
import { Server, Socket } from "socket.io";
import { sampleData } from './datasource';

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
const httpServer = createServer();


app.get("/", (req: Request, res: Response): void => {
  res.json({ message: "Please Like the Video!" });
});

routes(app);


const io = new Server(httpServer,{  cors: {
  origin: '*',
} });

io.on("connection", (socket) => {
  
  socket.emit('test event', sampleData)

});

httpServer.listen(3000);

app.listen("3001", (): void => {
  console.log("Server Running!");
});
