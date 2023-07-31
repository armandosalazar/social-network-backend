module.exports = (server) => {
  server.on("connection", (socket) => {
    socket.on("client:message", (message) => {
      console.log(message);
      server.emit("server:message", message);
    });
  });
};
