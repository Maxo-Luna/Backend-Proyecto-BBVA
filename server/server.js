require("./config/config");
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require('cors');

app.use(cors());
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());

// Configuracion global de rutas
app.use(
  "/apirest/usuarios",
  require("../apirest/controllers/usuario.controller")
);

app.use(
  "/apirest/movimientos",
  require("../apirest/controllers/movimiento.controller")
);

app.use(
  "/apirest/cuentas",
  require("../apirest/controllers/cuenta.controller")
);

//-> Base de datos

mongoose.connect(
  process.env.URLDB,
  {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
  },
  (err) => {
    if (err) throw err;
    console.log("Base de datos disponible");
  }
);

//-> Puerto

app.listen(process.env.PORT, () => {
  console.log("Puerto ok");
});
