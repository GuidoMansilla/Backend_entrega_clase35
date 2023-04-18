import express from "express";
import mongoose from "mongoose";
import routes from "./routes/index.routes.js";
import config from "./config/config.js";
import Handlebars from 'handlebars';
import { allowInsecurePrototypeAccess } from '@handlebars/allow-prototype-access'

const app = express();

// Settings
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

/*
mongoose.set("strictQuery", true);
mongoose.connect(config.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log("DB is connected"))
  .catch((err) => console.error(err));
*/

// MongoDB local
mongoose.set('strictQuery', true);
mongoose.connect('mongodb+srv://GuidoMansilla:pass123@ecommerce.hle4qnz.mongodb.net/?retryWrites=true&w=majority', (error) => {
  if(error) {
    console.log('Error al conectar a MongoDB', error);
  } else {
    console.log('Conectado a MongoDB');
  }
})

// Routes
app.use('/api', routes);


// Handlebars
app.engine('hbs', handlebars.engine({
  extname: '.hbs',
  defaultLayout: 'main.hbs',
  handlebars: allowInsecurePrototypeAccess(Handlebars)
}));


app.listen(config.PORT, () => console.log('Server on port', config.PORT))