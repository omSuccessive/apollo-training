import { config } from 'dotenv';

config();

const configurations = Object.freeze({
    env: process.env.NODE_ENV,
    port: process.env.PORT,
    serviceURL: process.env.SERVICE_URL,
});

console.log('>>>>>>>>>>>', configurations);
export default configurations;