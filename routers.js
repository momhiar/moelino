const homeView = require("./views");


const urls = {
  "/": homeView.homeView,
};

const routeHandler = (req, res) => {
  const url = req.url;
  typeof urls[url] == "undefined"
    ? homeView.NotFoundView()
    : parseRoute(req, res);
};

const parseRoute = (req, res) => {
  urls[req.url](req, res);
};
module.exports = routeHandler;
