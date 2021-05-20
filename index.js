import express from 'express';
import Server from './src/config/server';
import morgan from 'morgan';
import cookieParser from 'cookie-parser';
import { csrf } from './src/middlewares';

import routes from './src/modules';

const middlewares = { csrf, cookieParser, morgan };

const application = new Server({ express, routes, middlewares });

application.listen(3011)
