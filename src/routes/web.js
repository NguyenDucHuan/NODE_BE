const express = require('express');

const authRoutes = require('./authRoutes');
const userRoutes = require('./userRoutes');
const serviceRoutes = require('./serviceRoutes');
const koiFishBreedRoutes = require('./koiFishBreedRoutes');
const zodiacRoutes = require('./zodiacRoutes');
const pondFuatureRouter = require('./pondFuatureRoutes')
const destinyRouter = require("./destinyRoutes")
const directionRouter = require("./directionRoutes")
const advertisementRouter = require('./advertisementRoutes');

let initWebRoutes = (app) => {
  app.use("/api/v1", authRoutes);
  app.use("/api/v1", userRoutes);
  app.use("/api/v1", serviceRoutes);
  app.use("/api/v1", koiFishBreedRoutes);
  app.use("/api/v1", zodiacRoutes);
  app.use("/api/v1", pondFuatureRouter)
  app.use("/api/v1", destinyRouter)
  app.use("/api/v1", directionRouter)
  app.use("/api/v1", advertisementRouter);
};

module.exports = initWebRoutes;
