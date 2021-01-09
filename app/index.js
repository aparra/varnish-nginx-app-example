const http = require('http')
const PORT = 3000

const html = (req) => (`
  <!DOCTYPE html>
  <html>
    <head>
      <title>App</title>
      <link rel="stylesheet" href="/stylesheets/main.css" />
    </head>
    <body>
      <p><strong>Request received for:</strong> ${req.url}</p>
    </body>
  </html>
`)

function handleRequest(req, res) {
  console.log(`Request received for: ${req.url}`)
  res.writeHead(200, { 'Content-Type': 'text/html' })
  res.end(html(req))
}

var server = http.createServer(handleRequest);

server.listen(PORT, () => {
  console.log(`Server listening on: http://127.0.0.1:${PORT}`)
})
