const loadtest = require("loadtest");
const options = {
  url: "http://localhost:3000",
  maxRequests: 1000,
  concurrency: 100,
  method: "GET",
  headers: {
    "User-Agent": "loadtest",
  },
};

loadtest.loadTest(options, function (error, result) {
  if (error) {
    console.error(error);
  } else {
    console.log(result);
  }
});
