const swaggerAutogen = require('swagger-autogen')();

let doc, outputFile;

for(let i = 1; i <= 2; i++) {
  if(i == 1) {
    doc = {
      info: {
        title: 'The Ultimate Music Database',
        description: 'The final project for CSE341',
      },
      host: 'localhost:3000',
      schemes: ['http'],
    };

    outputFile = './swagger.local.json';
  }
  else if(i == 2) {
    doc = {
      info: {
        title: 'The Ultimate Music Database',
        description: 'The final project for CSE341',
      },
      host: 'cse341-tumd.onrender.com',
      schemes: ['https'],
    };

    outputFile = './swagger.render.json';
  }

  const endpointsFiles = ['./index.js'];

  swaggerAutogen(outputFile, endpointsFiles, doc);
}