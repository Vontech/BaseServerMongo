import path from 'path';

const config = {};

config.logFileDir = path.join(__dirname, '../../log');
config.logFileName = 'app.log';
config.dbHost = process.env.dbHost || 'localhost';
config.dbPort = process.env.dbPort || '27017';
config.dbName = process.env.dbName || 'donedev';

if (process.env.NODE_ENV == 'test') {
    console.log("USING TEST SERVER")
    config.dbHost = 'localhost';
    config.dbPort = '27017';
    config.dbName = 'donetest';
}

// Client id and client secret for OAuth 2.0
// NOTE: The client secret should be kepy secret! Preferably set this variable
// as an environment variable; for now, this is public for debugging purposes.
// NOTE: If these are changed, then you will also need to update the frontend
// (use the new Base64 encoding of these objects -> id:secret)
// Happens to be: ZG9uZWRldjo5N0g3RjRGRDcySkY3QlBRTDBHQUNaMQ==
config.clientId = process.env.authClient || 'donedev';
config.clientSecret = process.env.authSecret || '97H7F4FD72JF7BPQL0GACZ1';

config.serverPort = process.env.PORT || 5000;

export default config;