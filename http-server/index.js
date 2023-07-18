const hello = () => {
  console.log("Hello Atiya Khan Node.js!");
};

hello();
const http_var = require("http");
const fs_var = require("fs");

let Content_home = "";
let Content_project = "";
let Content_registration = "";

fs_var.readFile("./home.html", (err, home) => {
  if (err) {
    throw err;
  }
 Content_home = home;
});

fs_var.readFile("./project.html", (err, project) => {
  if (err) {
    throw err;
  }
  Content_project = project;
});

fs_var.readFile("./registration.html", (err, registration) => {
  if (err) {
    throw err;
  }
  Content_registration = registration;
});
  
 http
  .createServer((request, response) => {
    let url = request.url;
    response.writeHeader(200, { "Content-Type": "text/html" });
    switch (url) {
      case "/project":
        response.write(Content_project);
        response.end();
        break;
      case "/registration":
        response.write(Content_registration);
        response.end();
        break;
      default:
        response.write(Content_home);
        response.end();
        break;
    }
  }).listen(args.port);   
