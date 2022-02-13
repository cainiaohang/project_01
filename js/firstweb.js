const http = require('http')
const server = http.createServer()
server.on('request',(req,res)=>{
    const url = req.url
    const str = 'https://www.bilibili.com/'
    console.log(str)
    res.setHeader('content-type','text/html;charset=utf-8')
    res.end(str);

})
server.listen(80,()=>{
console.log('ok')
})