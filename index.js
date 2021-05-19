import express from 'express';
import Server from './src/config/server';
import config from './src/config/env';
import morgan from 'morgan';
import cookieParser from 'cookie-parser';
import { csrf } from './src/middlewares';

import routes from './src/modules';

const middlewares = { csrf, morgan, cookieParser };

const application = new Server({ express, routes, middlewares });

application.listen(3011)
