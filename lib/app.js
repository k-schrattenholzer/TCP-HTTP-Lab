const net = require('net');
const parseRequest = require('./utils/parseRequest');
const createResponse = require('./utils/createResponse');

const app = net.createServer(socket => {

  socket.on('data', data => {
    const request = parseRequest(data.toString());

    if(request.method === 'GET' && request.path === '/') {
      socket.write(createResponse({ body: 'helloo', status: '200 OK', contentType: 'text/plain' }));
    }

    else if(request.method === 'POST' && request.path === '/echo') {
      socket.write(createResponse({ body: request.body, status: '200 OK', contentType: 'text/plain' }));
    }

    else if(request.method === 'GET' && request.path === '/red') {

      const redContent = `<!DOCTYPE html>
      <html lang="en">
      <head>
          <meta charset="UTF-8">
          <title>Red Route</title>
      </head>
      <h1>rojo
      </h1>
      </html>`;

      socket.write(createResponse({ body: redContent, status: '200 OK', contentType: 'text/plain' }));
    }

    else if(request.method === 'GET' && request.path === '/green') {

      const greenContent = `<!DOCTYPE html>
      <html lang="en">
      <head>
          <meta charset="UTF-8">
          <title>green Route</title>
      </head>
      <h1>verde
      </h1>
      </html>`;

      socket.write(createResponse({ body: greenContent, status: '200 OK', contentType: 'text/plain' }));
    }

    else if(request.method === 'GET' && request.path === '/blue') {

      const blueContent = `<!DOCTYPE html>
      <html lang="en">
      <head>
          <meta charset="UTF-8">
          <title>blue Route</title>
      </head>
      <h1>azure
      </h1>
      </html>`;

      socket.write(createResponse({ body: blueContent, status: '200 OK', contentType: 'text/plain' }));
    }

    socket.end(createResponse({ body: 'Not Found', status: '404 Not Found', contentType: 'text/plain' }));
  });
});

module.exports = app;
