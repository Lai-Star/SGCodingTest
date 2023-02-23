const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    "/kino",
    createProxyMiddleware({
      target: "https://puertorico.secondchancebonuszone.com",
      changeOrigin: true,
      pathRewrite: {
        "^/kino": "/kino"
      },
    })
  );
};