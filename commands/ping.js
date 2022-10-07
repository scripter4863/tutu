module.exports = {
    name: 'ping',
    description: "This command will give you a answer",
    execute(client, message, args) {
      {
            message.channel.send(`Pong! ${client.ws.ping} MS`);
      }
  }
}