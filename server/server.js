import { WebSocketServer } from 'ws';

const server = new WebSocketServer({ port: 8080 });

server.on('connection', (ws) => {
  console.log('Client connected');

  ws.send('Welcome to the WebSocket server!');

  ws.on('message', (msg) => {
    console.log(`Received: ${msg}`);

    server.clients.forEach((client) => {
      if (client.readyState === 1) { // WebSocket.OPEN == 1
        client.send(`Client says: ${msg.toString()}`);
      }
    });
  });

  ws.on('close', () => {
    console.log('Client disconnected');
  });
});

console.log('WebSocket server is listening on ws://localhost:8080');
