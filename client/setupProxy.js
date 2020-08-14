const { createProxyMiddleware } = require("http-proxy-middleware");
module.exports = function (app) {
  if (process.env.NODE_ENV !== "production") {
    app.use(
      ["/"],
      createProxyMiddleware({
        target: "http://localhost:3000",
      })
    );
  } else {
    app.use(
      ["/"],
      createProxyMiddleware({
        target: "https://senior-chat-app.herokuapp.com/",
      })
    );
  }
};
