// ! DOCS: https://expressjs.com/en/guide/using-middleware.html
// Middleware are just functions
// Each middleware has access to the request and response objects (which you don't normal have access to in express)
// Middleware can end the HTTP request by sending back a response or with methods like res.send()
// OR middleware can be chained together, one after another by calling next()

// MORGAN: https://github.com/expressjs/morgan