//--> Puerto
process.env.PORT = process.env.PORT || 3000;

//--> Entorno
process.env.NODE_ENV = process.env.NODE_ENV || 'dev';

//--> Base de datos
let urlDB = "mongodb://localhost:27017/test";
process.env.URLDB = urlDB;

//--> Caducidad del Token
process.env.CADUCIDAD_TOKEN = '48h';

//--> SEED de autenticación 
process.env.SEED_AUTENTICACION = process.env.SEED_AUTENTICACION || 'este-es-el-seed-desarrollo';