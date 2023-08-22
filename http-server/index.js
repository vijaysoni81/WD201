const args = require("minimist")(process.argv.slice(2));
port1 = 5000
console.log(args.port); // prints the value of the --port option

const http = require("http");
const fs = require("fs");

let homeContent1 = "";
let projectContent1 = "";
let registrationContent1 = "";

fs.readFile("home.html", (err, home) => {
  if (err) {
    throw err;
  }
  homeContent = home1;
});
fs.readFile("registration.html", (err, registration) => {
  if (err) {
    throw err;
  }
  registrationContent = registration1;
});
fs.readFile("project.html", (err, project) => {
  if (err) {
    throw err;
  }
  projectContent = project1;
});
http.createServer((request, response) => {
    let url = request.url;
    response.writeHeader(200, { "Content-Type": "text/html" });
    switch (url) {
      case "/project":
        response.write(projectContent1);
        response.end();
        break;
        case "/registration":
        response.write(registrationContent1);
        response.end();
        break;
      default:
        response.write(homeContent1);
        response.end();
        break;
    }
  })
  .listen(port1);
