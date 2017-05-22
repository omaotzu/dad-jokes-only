const port = process.env.PORT || 4000;
const env = process.env.NODE_ENV || 'development';
const dbURI = process.env.MONGODB_URI || `mongodb://localhost/dad-jokes-only-${env}`;
const secret = process.env.SECRET || 'It is one giant secret';

module.exports = { port, env, dbURI, secret };
