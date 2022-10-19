// const http = require("http");

// FILES
const fs = require("fs");
const http = require("http");
const url = require("url");
// const server = http.createServer((req, res) => {
//   const url = req.url;
//   const method = req.method;
//   if (url == "/") {
//     res.write("<html>");
//     res.write("<head><title>My File</title></head>");
//     res.write(
//       "<body><form action='message' method ='POST'><input name ='message' type ='text'/><button type='submit'>Send Money</button></form></body>"
//     );
//     res.write("</html>");
//     return res.end();
//   }
//   if ((url = "/message" && method == "POST")) {
//     const body = [];
//     req.on("data", (chunk) => {
//       console.log(chunk);
//       body.push(chunk);
//     });
//     req.on("end", () => {
//       const parsedBody = Buffer.concat(body).toString();
//       console.log(parsedBody);
//       const message = parsedBody.split[1];
//       fs.writeFileSync("message.txt", message);
//     });
//     res.statusCode = 302;
//     res.setHeader("Location", "/");
//     return res.end();
//   }
//   console.log(req.headers);
//   res.setHeader("Content-Type", "text/html");
//   res.write("<html>");
//   res.write("<head><title>My File</title></head>");
//   res.write("<body><h1>My File is here, shut up now</h1></body>");
//   res.write("</html>");
//   res.end();
// });

// server.listen(3000);

// blocking synchronous manner
// const fs = require("fs");
// const textIn = fs.readFileSync("./read.txt", "utf-8");
// console.log(textIn);

// const textOut = `This is what is in the first file: ${textIn}.\n and created on ${Date.now()}.\n by Adeolu Oluwasegun David`;

// fs.writeFileSync("./output.txt", textOut);

// console.log("File added");

// non-blocking asynchronous manner
// fs.readFile("./output.txt", "utf-8", (err, data1) => {
//   fs.readFile("./read.txt", "utf-8", (err, data2) => {
//     fs.readFile("./notes.txt", "utf-8", (err, data3) => {
//       console.log(data3);
//       fs.writeFile(
//         "./final.txt",
//         `${data1}.\n ${data2}.\n ${data3}.\n`,
//         "utf-8",
//         (err) => {
//           fs.readFile("./final.txt", "utf-8", (err, data) => {
//             console.log(data);
//           });
//         }
//       );
//     });
//   });
// });

// console.log("Processing ......");

// Network

// Top level code to execute only once

const replaceTemplate = (temp, product) => {
  let output = temp.replace(/{%PRODUCTNAME%}/g, product.productName);
  output = output.replace(/{%IMAGE%}/g, product.image);
  output = output.replace(/{%FROM%}/g, product.from);
  output = output.replace(/{%QUANTITY%}/g, product.quantity);
  output = output.replace(/{%PRICE%}/g, product.price);
  output = output.replace(/{%DESCRIPTION%}/g, product.price);
  output = output.replace(/{%ID%}/g, product.id);

  if (!product.organic)
    output = output.replace(/{%NOT_ORGANIC%}/g, "not-organic");

  return output;
};

// the data object
const data = fs.readFileSync(`${__dirname}/dev-data/data.json`, "utf8");
const dataObject = JSON.parse(data);

// the html template
const tempOverview = fs.readFileSync(
  `${__dirname}/template/template-overview.html`,
  "utf-8"
);
const tempProduct = fs.readFileSync(
  `${__dirname}/template/product-template.html`,
  "utf-8"
);
const tempCard = fs.readFileSync(
  `${__dirname}/template/card-template.html`,
  "utf-8"
);

const server = http.createServer((req, res) => {
  const pathName = req.url;

  if (pathName === "/" || pathName === "/overview") {
    res.writeHead("200", { "Content-Type": "text/html" });

    const cardsHTML = dataObject
      .map((el) => replaceTemplate(tempCard, el))
      .join("");

    const output = tempOverview.replace("{%PRODUCT_CARDS%}", cardsHTML);
    res.end(output);
  } else if (pathName === "/" || pathName === "/product") {
    res.writeHead("200", { "Content-Type": "text/html" });
    res.end(tempProduct);
  } else if (pathName === "/api") {
    res.writeHead("200", { "Content-Type": "text/html" });
    res.end(data);
  } else {
    res.writeHead("404", {
      "Content-type": "text/html",
      "my-own-header": "hello-there",
    });
    {
      res.end("<h1>Hello I am real</h1>");
    }
  }
});

server.listen(8000, "127.0.0.1", () => {
  console.log("listening on port 8000");
});
