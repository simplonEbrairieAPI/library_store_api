// config
import config from '../config/env';

// services
import JwtService from './jwt';

// services dependencies
import jwt from 'jsonwebtoken';

// Instanciate all your singleton service with dépendencies injection
const jwtService = new JwtService(jwt, config.jwt_secret_key);


// export all the libs services
export { jwtService };