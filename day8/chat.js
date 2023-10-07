var http = require("http");
var fs = require("fs");
var {Server} = require("socket.io");
var httpServer = http.createServer(function(req,res){
    fs.createReadStream("chat.html").pipe(res);
})

httpServer.listen("3000", () => {
    console.log("Server đang chạy");
});
const io = new Server(httpServer);

const users = {};
io.on('connection', socket => {
    socket.on("new-user", name => {
        users[socket.id] = name;
        socket.broadcast.emit("user-connected", name);
    });
    socket.on("send-message", message => {
        socket.broadcast.emit('chat-message', {message: message, name: users[socket.id]});
    });

    socket.on("disconnect", () => {
        socket.broadcast.emit("user-disconnected", users[socket.id]);
        delete users[socket.id];
    })

})