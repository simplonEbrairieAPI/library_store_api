import express from 'express';
import Server from './src/config/server';
import config from './src/config/env';
import morgan from 'morgan';
import { csrf } from './src/middlewares';

import routes from './src/modules';

const middlewares = { csrf, morgan };

const application = new Server({ express, routes, middlewares });

application.listen(3011)
