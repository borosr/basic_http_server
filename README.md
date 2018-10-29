<h1 class="center">Basic HTTP server in Node.js</h1>

## Usage

1. Install Node.js from here: https://nodejs.org/en/

2. Run server with:

   ```bash
   node index.js
   ```

## What can i see?

For example:

```bash
Request path was: /
Request method was: GET
Request body data:

```

Only request url, method and request body if exists.

The response is constant message: `I got your message!`

## How can i try it?

### telnet (nc on Mac)

```bash
telnet localhost 8080
GET /random_get_endpoint HTTP/1.1
HOST: localhost

telnet localhost 8080
POST / HTTP/1.1
HOST: localhost

```

### CURL

```bash
#POST request
curl --data "birthyear=1970&month=1&day=1" http://localhost:8080

#GET request
curl http://localhost:8080

```

### Postman

Import `node_test.postman_collection.json` file to your Postman, and run `node_test` collection.

