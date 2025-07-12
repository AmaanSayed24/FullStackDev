console.log("hello world");
const http=require("http");
const server=http.createServer((req,res)=>{
    res.end("Hello world from Node.js");

});
server.listen(3000,()=>{
    console.log('server is running at https://localhost:3000')
});