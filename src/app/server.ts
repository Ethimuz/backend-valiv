import dotenv from "dotenv";
dotenv.config();
import express, { Express } from "express";
import morgan from "morgan";
import cors from "cors";
import logModule from "./modules/log.module";
import mongooseModule from "./modules/mongoose.module";
import components from "./components";



async function main(){
  
  
  const server: Express = express();
  const port: number = parseInt(process.env['PORT'] || '5000');

  server.use(express.json());
  server.use(express.urlencoded({ extended: true }));
  server.use(morgan('dev'));
  server.use(cors());
  server.use('/api', ...components);

  try {
    await mongooseModule.connect();
    logModule.success('Database connection successful');
    
    server.listen(port, () => {
      logModule.success(`Server listening on port ${port}`);
    });
  } 
  catch (error) {
    logModule.error(`Failed database connection`);
  }

}
export default { main };