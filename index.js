const http = require('http');
const port = 8080;

const handleResponse = (response) => {
    response.write('I got your message!');
    response.end();
};

const requestHandler = (request, response) => {
    showRequest(request);
    handleResponse(response);
};

const showRequest = (request) => {
    console.log("Request path was: " + request.url);
    console.log("Request method was: " + request.method);
};

const server = http.createServer(requestHandler)

server.listen(port, (err) => {
  if (err) {
    return console.log('Server is not working well...\n', err);
  }

  console.log(`Server is listening on ${port}`);
});