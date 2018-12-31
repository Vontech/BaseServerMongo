const express = require("express");
const bodyParser = require("body-parser");

import morgan from 'morgan';
import OAuthServer from 'express-oauth-server';

import config from "./backend/setup/config";
import {setupDB} from "./backend/setup/db"
import logger from "./backend/setup/logger";
import auth from "./backend/controllers/auth.controller";

import authedRoutes from "./backend/routes/authed.routes";
import openRoutes from "./backend/routes/open.routes";

setupDB();

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

logger.stream = {
  write(message) {
    logger.info(message);
  },
};

app.use(morgan('dev', { stream: logger.stream }));

app.oauth = new OAuthServer({
  model: auth,
  debug: true,
});

app.all('/oauth/token', app.oauth.token());

app.use('/api/s', app.oauth.authenticate(), authedRoutes);
app.use('/api', openRoutes);

app.onStartListener = () => {}

app.listen(config.serverPort, () => {
  logger.info(`Listening on port ${config.serverPort}`);
  app.onStartListener();
});

module.exports = app;
