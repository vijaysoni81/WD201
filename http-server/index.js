//to run through terminal
//PS C:\Users\GHRCE\WD201\http-server> node index.js --port 5000
//in explorer http://localhost:5000/

const args = require("minimist")(process.argv.slice(2));
port11 = args.port
console.log(args.port); // prints the value of the --port option

const http = require("http");
const fs = require("fs");

let home11 = "";
let project11 = "";
let registration11 = "";

fs.readFile("home.html", (err, home) => {
  if (err) {
    throw err;
  }
  home11 = home;
});
fs.readFile("registration.html", (err, registration) => {
  if (err) {
    throw err;
  }
  registration11 = registration;
});
fs.readFile("project.html", (err, project) => {
  if (err) {
    throw err;
  }
  project11 = project;
});
http.createServer((request, response) => {
    let url = request.url;
    response.writeHeader(200, { "Content-Type": "text/html" });
    switch (url) {
      case "/project":
        response.write(project11);
        response.end();
        break;
        case "/registration":
        response.write(registration11);
        response.end();
        break;
      default:
        response.write(home11);
        response.end();
        break;
    }
  })
  .listen(port11);
