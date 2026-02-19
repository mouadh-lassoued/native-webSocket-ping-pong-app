import {WebSocketServer} from "ws";

const wss = new WebSocketServer({port:8080})
wss.on("connection",(ws)=>{
    let counter = 0;
    console.log("connected !")
    ws.id = crypto.randomUUID();
    ws.on("message",(message)=>{
        if(counter>8){
            ws.send("enough pongs for you !",ws.id.substr(0,2));
            ws.close();
        }
        if(message==="ping"){
            counter++;
            console.log(`received the ping from ${ws.id.substr(0,2)}, sending the pong for ${counter}th time`)
            ws.send("pong")
        }
    })
    ws.on("close",()=>{
         console.log("disconnected")   
    })

})
console.log("WebSocket server running on ws://localhost:8080");