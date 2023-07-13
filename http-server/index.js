const hello = () => {
  console.log("Hello Atiya Khan Node.js!");
};

hello();
const http_var = require("http");
const fs_var = require("fs");

let Content_home = "";
let Content_project = "";


fs.readFile("home.html", (err, home) => {
  if (err) {
    throw err;
  }
  homeContent = home;
});


fs_var.readFile("home.html", (err, home) => {
  if (err) {
    throw err;
  }

  fs_var.readFile("project.html", (err, project) => {
  if (err) {
    throw err;
  }
  Content_project = project;
});

  
  http_var
  .createServer((request, response) => {
    let url = request.url;
    response.writeHeader(200, { "Content-Type": "text/html" });
    switch (url) {
      case "/project":
        response.write(Content_project);
        response.end();
        break;
      default:
        response.write(Content_home);
        response.end();
        break;
    }
  })
  .listen(3000);
