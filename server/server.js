import { WebSocketServer } from 'ws';

const server = new WebSocketServer({ port: 8080 });

server.on('connection', (ws) => {
  console.log('Client connected');

  ws.send('Welcome to the WebSocket server!');

  // Broadcast server time every 5 seconds
  const intervalId = setInterval(() => {
    const message = `Server time is ${new Date().toLocaleTimeString()}`;
    server.clients.forEach((client) => {
      if (client.readyState === 1) { // WebSocket.OPEN == 1
        client.send(message);
      }
    });
  }, 5000);

  ws.on('message', (msg) => {
    console.log(`Received: ${msg}`);

    server.clients.forEach((client) => {
      if (client.readyState === 1) {
        client.send(`Client says: ${msg.toString()}`);
      }
    });
  });

  ws.on('close', () => {
    console.log('Client disconnected');
    clearInterval(intervalId); // Clear interval when client disconnects
  });
});

console.log('WebSocket server is listening on ws://localhost:8080');
