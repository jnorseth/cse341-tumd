const swaggerAutogen = require('swagger-autogen')();

const doc = {
  info: {
    title: 'The Ultimate Music Database',
    description: 'The final project for CSE341',
  },
  host: 'localhost:3000',
  schemes: ['http'],
};

const outputFile = './swagger.json';

const endpointsFiles = ['./index.js'];

swaggerAutogen(outputFile, endpointsFiles, doc);