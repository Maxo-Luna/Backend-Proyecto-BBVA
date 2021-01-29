﻿const express = require("express");
const Cuenta = require("../models/cuenta.model");

module.exports = {
  getEmail,
  create,
  update
};


async function getEmail(email) {
  let cuentaDB = await Cuenta.find({ email: email });
  // validate
  if (!cuentaDB) throw "Cuenta/E-mail no encontrado";

  return await cuentaDB;
}

async function create(req) {
  const cuenta = new Cuenta(req);

  // Alta de usuario
  await cuenta.save();
}

async function update(email, opcion, importe) { 
  let cuentaModif = new Cuenta(await Cuenta.findOne({ email: email }));

  if (!cuentaModif) throw "Cuenta/E-mail no encontrado";

  let importeNum = parseFloat(importe);
  if (opcion == 'D') {
    cuentaModif.saldo = cuentaModif.saldo - importeNum;
  } else {
    cuentaModif.saldo = cuentaModif.saldo + importeNum;
  }
  cuentaModif.email = email;
  

  await cuentaModif.save();
}

