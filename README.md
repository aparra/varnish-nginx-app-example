# varnish-nginx-app-example

Example of using `docker-compose` to configure nginx (proxing an node.js app) behind varnish.

      +---------+      +---------+      +---------+
----->| varnish |----->|  ngix   |----->|   app   |
      +---------+      +---------+      +---------+

### Usage

From the repo root, run:

```bash
docker-compose -p example up
```

To check the app running, run:

```bash
curl localhost:3000/some-path
```

To check the nginx proxing the app, run:

```bash
curl localhost:8080/some-path
```

To check the varnish on top of nginx, run:

```bash
curl localhost/some-path
```

All requets should return:

```html
  <!DOCTYPE html>
  <html>
    <head>
      <title>App</title>
      <link rel="stylesheet" href="/stylesheets/main.css" />
    </head>
    <body>
      <p><strong>Request received for:</strong> /some-path</p>
    </body>
  </html>
```
